/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { createProject, upLoadFiles } from "@/app/api/project";
import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { MdCircle, MdOutlinePhoto } from "react-icons/md";
import { BsFillImageFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { getUser } from "@/app/api/auths";
import { useFetchData } from "@/app/api/category";
const page = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const [quanhuyen, setDataquanhuyen] = useState<any>();
  useEffect(() => {
    fetch(
      "https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=01&limit=-1"
    )
      .then((response) => response.json())
      .then((result) => {
        const items = result.data.data;
        setDataquanhuyen(items);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }, []);

  const { data: cate, isLoading, isError } = useFetchData();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>();

  const categoryData = cate?.response?.data;

  const [images, setImages] = useState<any>([]);
  const [images1, setImages1] = useState<any>({});
  const handleAddImage = (event: any) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageUrl = e.target.result;
        setImages([...images, { files, file, imageUrl }]);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index: any) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  const getDataFromImages = () => {
    const data = images.map((item: any) => ({
      files: item.files,
    }));
    return data;
  };

  const onHandleAdd = async (value: any) => {
    try {
      // const arrayImage = Array.from(getDataFromImages())
      // console.log("can",value.project_image);
      // console.log("cos",arrayImage);
      // const updatedImages:any = arrayImage.map((item:any , index:any) => item?.files);
      // for (let i = 0; i < updatedImages.length; i++) {
      //     const file = updatedImages[i];
      //     setImages1({...file});
      // }

      // const updatedImages2:any = updatedImages.map((item:any) => item);
      // console.log(updatedImages2);
      // setImageUpload((prevImages: any) => [...prevImages, ...updatedImages] as any);
      const imgs = await upLoadFiles(value.project_image);
      const formReq = {
        ...value,
        project_image: imgs,
        userId: "653b76e9ea42a6a6490f955c",
      };
      console.log(formReq);

      const response = await createProject(formReq);
      if (response.success == true) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${response.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/admin/project");
        return;
      } else {
        Swal.fire({
          title: "Opps!",
          text: `${response.message}`,
          icon: "error",
          confirmButtonText: "Vui lòng thêm lại dữ liệu",
        });
      }
    } catch (error: any) {
      Swal.fire({
        title: "Opps!",
        text: `${error?.message}`,
        icon: "error",
      });

      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto text-black">
      <form onSubmit={handleSubmit(onHandleAdd)}>
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
                  onChange={handleChange}
                  className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <option value="">chọn</option>
                  {quanhuyen?.map((item: any, index: any) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <option value={item.name_with_type}>
                        {index}) {item.name_with_type}{" "}
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
                  <option value="">Abc</option>
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
              <div className="col-span-2">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <BsFillImageFill
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          {...register("project_image")}
                          id="file-upload"
                          type="file"
                          multiple
                          className="sr-only"
                          onChange={handleAddImage}
                        />
                      </label>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div className="image-list">
                {images.map((image: any, index: any) => (
                  <div key={index}>
                    <img
                      src={image?.imageUrl}
                      alt={`Ảnh ${index}`}
                      key={index}
                    />
                    <h2 onClick={() => handleRemoveImage(index)}>Xóa</h2>
                  </div>
                ))}
              </div>

              <div className="col-span-2">
                <div className="w-full min-h-[150px] rounded-md mt-5 border border-slate-500 grid grid-cols-[30%_auto] overflow-hidden gap-5">
                  <div className="w-full h-max min-h-full border border-r-slate-500 relative">
                    <img
                      src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1"
                      alt=""
                      className="w-full"
                    />
                    <button>
                      <BiX className="cursor-pointer w-[30px] h-[30px] fill-slate-600 absolute -top-1 -right-1 " />
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="w-full h-max min-h-full border relative">
                      <img
                        src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1"
                        alt=""
                        className="w-full"
                      />
                      <button>
                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                      </button>
                    </div>
                    <div className="w-full h-max min-h-full border relative">
                      <img
                        src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1"
                        alt=""
                        className="w-full"
                      />
                      <button>
                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                      </button>
                    </div>
                    <div className="w-full h-max min-h-full border relative">
                      <img
                        src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1"
                        alt=""
                        className="w-full"
                      />
                      <button>
                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                      </button>
                    </div>
                    <div className="w-full h-max min-h-full border relative">
                      <img
                        src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1"
                        alt=""
                        className="w-full"
                      />
                      <button>
                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                      </button>
                    </div>
                    <div className="w-full h-max min-h-full border relative">
                      <img
                        src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1"
                        alt=""
                        className="w-full"
                      />
                      <button>
                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                      </button>
                    </div>
                    <div className="w-full h-max min-h-full border relative">
                      <img
                        src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1"
                        alt=""
                        className="w-full"
                      />
                      <button>
                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                      </button>
                    </div>
                    <div className="w-full h-max min-h-full border relative">
                      <img
                        src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1"
                        alt=""
                        className="w-full"
                      />
                      <button>
                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
