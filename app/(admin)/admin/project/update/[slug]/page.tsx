/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { getProjectById, updateProject } from "@/app/api/project";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { IProject } from "@/interfaces/project";
import { useFetchData } from "@/app/api/category";
import FormUpload from "@/components/admin/Upload/FormUpload";
import ListFiles from "@/components/admin/Upload/ListImage";
import Image from "next/image";
import { TiDelete } from "react-icons/ti";
import { DeleteImage, upLoadFiles } from "@/app/api/upload";

const page = () => {
  const router = useRouter();
  const { slug } = useParams();
  const [dataProject, setDataProjects] = useState<any>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phuong, setPhuong] = useState([]);
  const { data: cate } = useFetchData();
  const categoryData = cate?.response?.data;
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [images, setImages] = useState<any>([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>();

  const [quanhuyen, setDataquanhuyen] = useState<any>();
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
    setPhuong(district?.wards);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const { project } = await getProjectById(slug);
          setDataProjects(project);
          setImages(project?.project_image);
          setValue("project_location", project.project_location);
          setValue("project_name", project.project_name);
          setValue("project_content", project.project_content);
          setValue("project_price", project.project_price);
          setValue("project_room", project.project_room);
          setValue("project_location", project.project_location);
          setValue("project_acreage", project.project_acreage);
          setValue("project_district", project.project_district);
          setValue("categoryId", project.categoryId);
          setValue("map_link", project.map_link);
        }
      } catch (error) {
        console.error("Failed to fetch project:");
      }
    };
    fetchData();
  }, [images?.project_image, setValue, slug]);

  const handleFileInputChange = (e: any) => {
    const files = e.target.files;
    const fileList = Array.from(files);
    const uploadDelay = 1500;
    setTimeout(() => {
      setSelectedFiles((prevSelectedFiles: any) => [
        ...prevSelectedFiles,
        ...fileList,
      ]);
    }, uploadDelay);
  };

  const onCLickDeleteImage = async (idImage: any) => {
    try {
      updateProject(slug, {
        ...dataProject,
        project_image: images?.filter(
          (image: any) => image.public_id !== idImage
        ),
      }).then(() => {
        DeleteImage(idImage).then((response: any) => {
          if (response?.data?.result == "ok") {
            setImages(
              images?.filter((image: any) => image.public_id !== idImage)
            );
            Swal.fire({
              title: "",
              text: "Xóa ảnh thành công !",
              icon: "success",
              timer: 1500,
            });
          }
        });
      });
    } catch (error) {
      Swal.fire({
        title: "Opps",
        text: "Xóa ảnh thất bại!",
        icon: "error",
      });
    }
  };

  const onHandleSubmit = async (projectData: IProject) => {
    setIsSubmitting(true);
    try {
      const response: any = await upLoadFiles(selectedFiles);
      if (response) {
        const results = await updateProject(slug, {
          ...projectData,
          project_image: [...images, ...response],
        });
        Swal.fire({
          title: "",
          text: "Cập nhật thành công !",
          icon: "success",
          timer: 1500,
        });
        router.push("/admin/project");
      }
    } catch (error) {
      Swal.fire({
        title: "Opps",
        text: "Cập nhật thất bại!",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [selectedValue, setSelectedValue] = useState<string>("");
  const [disableSelect, setDisableSelect] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    selectedValue !== "" ? setDisableSelect(false) : setDisableSelect(true);
  }, [selectedValue]);

  return (
    <div className="overflow-x-auto text-black">
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="min-h-32 lg:col-span-3 ">
          <div className="bg-white border border-slate-300 p-5 rounded-md">
            <h2 className=" text-slate-700 font-semibold text-[35px] uppercase text-center">
              Cập nhật dự án
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
              {/* Start Group Desc */}
              <div className="col-span-2">
                <label htmlFor="" className="block text-sm font-medium mb-2">
                  Mô tả dự án
                </label>
                <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 grid gap-1">
                  <label htmlFor="overviewDescription">Tổng quan:</label>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 "
                    placeholder="Mô tả"
                    type="text"
                    id=""
                    name=""
                  ></input>
                  <div className="grid justify-start">
                    <FormUpload />
                  </div>
                </div>
                <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 mt-2">
                  <label htmlFor="overviewDescription">Vị trí:</label>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 mb-2"
                    type="text"
                    placeholder="Mô tả"
                    id=""
                    name=""
                  ></input>
                  <div className="grid justify-start">
                    <FormUpload />
                  </div>

                  <input
                    type="text"
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 my-2"
                    id="overviewImage"
                    name="overviewImage"
                  ></input>
                </div>
                <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 grid gap-1 mt-2">
                  <label htmlFor="overviewDescription">Tiện ích:</label>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 "
                    placeholder="Tiêu đề"
                    type="text"
                    id=""
                    name=""
                  ></input>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 mt-1 mb-1"
                    placeholder="Mô tả"
                    type="text"
                    id=""
                    name=""
                  ></input>
                  <div>
                    <div className="grid justify-start">
                      <FormUpload />
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 my-2"
                      placeholder="Mô tả hình ảnh"
                      id="overviewImage"
                      name="overviewImage"
                    ></input>
                  </div>
                </div>
                <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 grid gap-2 mt-2">
                  <label htmlFor="overviewDescription">
                    Thiết kế mặt bằng:
                  </label>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700"
                    type="text"
                    placeholder="Tiêu đề"
                    id=""
                    name=""
                  ></input>
                  <div className="grid justify-start">
                    <FormUpload />
                  </div>
                  <input
                    type="text"
                    placeholder="Mô tả hình ảnh"
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700"
                    id="overviewImage"
                    name="overviewImage"
                  ></input>
                  <input
                    type="text"
                    placeholder="Mô tả chi tiết"
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700"
                    id="overviewImage"
                    name="overviewImage"
                  ></input>
                </div>

                <div className="overview w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 mt-2">
                  <label htmlFor="overviewDescription">
                    {" "}
                    Tiện ích bổ sung:
                  </label>
                  <input
                    className="w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700"
                    placeholder="Tiêu đề"
                    type="text"
                    id=""
                    name=""
                  ></input>
                </div>
              </div>
              {/* End Group Desc */}
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
              <div className="col-span-2">
                <div className="flex  justify-center flex-wrap">
                  {images?.map((image: any) => (
                    <div key={image?.public_id} className="relative  m-4 ">
                      <Image
                        className="rounded-[9px]"
                        src={image?.image_url}
                        width={200}
                        height={100}
                        alt="Image Not Found"
                      />

                      <div
                        className="absolute cursor-pointer p-1 text-xl rounded-bl-lg  text-white top-0  right-0 bg-red-500 hover:bg-red-600"
                        onClick={() => onCLickDeleteImage(image?.public_id)}
                      >
                        <TiDelete />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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
                  Cập nhật
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
