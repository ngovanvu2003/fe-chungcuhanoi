"use client";
import { createProject } from "@/app/api/project";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useFetchData } from "@/app/api/category";
import FormUpload from "@/components/admin/Upload/FormUpload";
import ListFiles from "@/components/admin/Upload/ListImage";
import { DeleteImage, upLoadFiles } from "@/app/api/upload";
const page = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [phuong, setPhuong] = useState([]);
  // useState upload image
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  //----------------------------------------------------------------

  //  Thêm ảnh vào mảng
  const handleFileInputChange = (e: any) => {
    setLoading(true);
    const files = e.target.files;
    const fileList = Array.from(files);
    const uploadDelay = 1500;
    setTimeout(() => {
      setSelectedFiles((prevSelectedFiles: any) => [
        ...prevSelectedFiles,
        ...fileList,
      ]);
      setLoading(false);
    }, uploadDelay);
  };
  // ----------------------------------------------------------------
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const [quanhuyen, setDataquanhuyen] = useStat<any>();
  useEffect(() => {
    fetch("https://api-hanoi.onrender.com/hanoiCitys")
      .then((response) => response.json())
      .then((result) => {
        const item = result[0]?.districts;
        setDataquanhuyen(item);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }, []);
  const handleChanges = (event: any) => {
    const selectedDistrict = event.target.value;
    setSelectedValue(selectedDistrict);

    // Tìm danh sách phường tương ứng với quận/huyện đã chọn
    const district = quanhuyen?.find(
      (item: any) => item?.code === selectedDistrict
    );
    console.log("district", district);
    setPhuong(district?.wards);
  };

  const { data: cate, isLoading, isError } = useFetchData();
  const categoryData = cate?.response?.data;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>();

  const onHanldSubmit = async (value: any) => {
    try {
      if (Array.isArray(selectedFiles) && selectedFiles.length === 0) {
        Swal.fire({
          title: "Opps!",
          text: `Bạn chưa chọn ảnh`,
          icon: "error",
          confirmButtonText: "Vui lòng thêm lại dữ liệu",
        });
      } else {
        const responseImages: any = await upLoadFiles(selectedFiles);
        if (responseImages) {
          const formReq = {
            ...value,
            project_image: responseImages,
            userId: "653b76e9ea42a6a6490f955c",
          };
          const response = await createProject(formReq);
          if (response?.success == true) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: `${response?.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
            setSelectedFiles([]);
            router.push("/admin/project");
            return;
          } else {
            Swal.fire({
              title: "Opps!",
              text: `${response?.message}`,
              icon: "error",
              confirmButtonText: "Vui lòng thêm lại dữ liệu",
            });
            responseImages.map((item: any) => {
              DeleteImage(item.public_id);
            });
          }
        }
      }
    } catch (error: any) {
      Swal.fire({
        title: "Opps!",
        text: `${error?.message}`,
        icon: "error",
      });
    }
  };

  return (
    <div className="overflow-x-auto text-black">
      <form onSubmit={handleSubmit(onHanldSubmit)}>
        <div className="min-h-32 lg:col-span-3 ">
          <div className="bg-white border border-slate-300 p-5 rounded-md">
            <h2 className=" text-slate-700 font-semibold text-[35px] uppercase text-center">
              Thêm mới dự án
            </h2>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-6 p-4">
              <div className="col-span-2">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Tên dự án
                </label>
                <input
                  type="text"
                  className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="Tên dự án"
                  {...register("project_name")}
                />
              </div>
              <div className="grid grid-rows-[max-content_auto]">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Danh mục
                </label>
                <select
                  {...register("categoryId")}
                  value={watch("categoryId")}
                  onChange={(e) => setValue("categoryId", e.target.value)}
                  className="w-full h-full min-h-[30px] px-2 border border-slate-300 rounded-md"
                >
                  <option value="">chọn</option>
                  {categoryData?.map((cat: any) => {
                    return (
                      <option key={cat._id} value={cat._id}>
                        {cat.category_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Giá dự án
                </label>
                <input
                  type="text"
                  className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="Giá dự án"
                  {...register("project_price")}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Diện tích
                </label>
                <input
                  type="text"
                  className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="Diện tích"
                  {...register("project_acreage")}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Số phòng trong dự án
                </label>
                <input
                  type="text"
                  className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="Số phòng"
                  {...register("project_room")}
                />
              </div>
              <div className="grid grid-rows-[max-content_auto]">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Quận/Huyện
                </label>
                <select
                  value={selectedValue}
                  {...register("project_district")}
                  onChange={handleChanges}
                  className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <option value="">chọn</option>
                  {quanhuyen?.map((item: any) => {
                    return (
                      <option key={item?.code} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="grid grid-rows-[max-content_auto]">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Phường
                </label>
                <select className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  {phuong?.map((item: any) => (
                    <option key={item?.code} value={item?.code}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Địa chỉ cụ thể
                </label>
                <input
                  type="text"
                  className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="Địa chỉ..."
                  {...register("project_location")}
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="" className="block text-sm font-medium mb-2">
                  Mô tả dự án
                </label>
                <textarea
                  placeholder="Mô tả dự án..."
                  cols={30}
                  rows={5}
                  {...register("project_content")}
                  className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                ></textarea>
              </div>
              <div className="col-span-2">
                <label className="block text-slate-800 text-sm font-medium mb-2">
                  Map link
                </label>
                <input
                  type="text"
                  className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  placeholder="http://..."
                  {...register("map_link")}
                />
              </div>

              {/* Form uploading */}
              <div className="col-span-2">
                <FormUpload
                  loading={loading}
                  handleFileInputChange={handleFileInputChange}
                  selectedFiles={selectedFiles}
                />
                <div
                  className={
                    selectedFiles.length
                      ? " border-dashed border-2 rounded-[8px] border-[#e5e5e5] "
                      : ""
                  }
                >
                  <ListFiles
                    setSelectedFiles={setSelectedFiles}
                    selectedFiles={selectedFiles}
                    handleFileInputChange={handleFileInputChange}
                    loading={loading}
                  />
                </div>
              </div>
              {/* End Form uploading */}

              <div className="col-span-2"></div>
              <div className="col-span-2 mt-6 flex items-center justify-end gap-x-5">
                <button
                  type="submit"
                  className="cursor-pointer px-3 py-2 text-sm font-semibold text-gray-900"
                >
                  Quay lại
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Thêm mới
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
