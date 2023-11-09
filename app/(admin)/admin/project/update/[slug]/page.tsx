/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { getProjectById, updateProject } from "@/app/api/project";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillImageFill } from "react-icons/bs";
import * as z from "zod";
import Swal from "sweetalert2";
import { IProject } from "@/interfaces/project";
import { Form } from "@/components/ui/form";
import { useFetchData } from "@/app/api/category";
const formSchema = z.object({
  project_name: z.string().min(2, {
    message: "project_name must be at least 5 characters.",
  }),
  project_content: z.string(),
  project_price: z.number(),
  project_room: z.number(),
  // project_image:z.array(),
  project_location: z.string(),
  project_acreage: z.number(),
  project_district: z.string(),
  category_name: z.string(),
  categoryId: z.string(),
  map_link: z.string(),
  project_image: z.string()

});

const page = () => {
  const router = useRouter();
  const { slug } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({

    resolver: zodResolver(formSchema),
    defaultValues: {
      project_name: "",
      project_content: "",
      categoryId: "",
      project_district: "",
      project_location: "",
      map_link: "",
      project_image: "",
    },

  });
  const { data } = useFetchData();

  const listCategories = data?.response?.data;

  const [quanhuyen, setDataquanhuyen] = useState<any>();
  const [images, setImages] = useState<any>([]);
  const handleRemoveImage = (index: any) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  useEffect(() => {
    fetch(
      "https://api-hanoi.onrender.com/hanoiCitys"
    )
      .then((response) => response.json())
      .then((result) => {
        const items = result[0]?.districts;
        setDataquanhuyen(items);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const { project } = await getProjectById(slug);
          setImages(project.project_image)
          form.setValue('project_location', project.project_location)
          form.setValue("project_name", project.project_name);
          form.setValue("project_content", project.project_content);
          form.setValue("project_price", project.project_price);
          form.setValue("project_room", project.project_room);
          // form.setValue('project_image', project.project_image);
          form.setValue("project_location", project.project_location);
          form.setValue("project_acreage", project.project_acreage);
          form.setValue("project_district", project.project_district);
          form.setValue("categoryId", project.categoryId);
          form.setValue("map_link", project.map_link)
        }

      } catch (error) {
        console.error("Failed to fetch project:");
      }
    };
    fetchData();
  }, [slug, form]);
  const onHandleSubmit = async (projectData: IProject) => {
    setIsSubmitting(true);
    try {
      const results = await updateProject(slug, {
        ...projectData,
        project_image: images
      });
      Swal.fire({
        title: "",
        text: "Cập nhật thành công !",
        icon: "success",
        timer: 1500,
      });
      router.push("/admin/project");
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onHandleSubmit)}>
          <div className="min-h-32 lg:col-span-3 ">
            <div className="bg-white border border-slate-300 p-5  rounded-md">
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
                    {...form.register("project_name")}
                  />
                  { }
                </div>
                <div className="grid grid-rows-[max-content_auto]">
                  <label className="block text-slate-800 text-sm font-medium mb-2">
                    Danh mục
                  </label>
                  <select
                    {...form.register("categoryId")}
                    className="w-full h-full min-h-[30px] px-2 border border-slate-300 rounded-md">
                    {listCategories?.map((item: any) => {
                      return (
                        <option key={item?._id} value={item?._id}>
                          {item?.category_name}
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
                    {...form.register("project_price")}
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
                    {...form.register("project_acreage")}
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
                    {...form.register("project_room")}
                  />
                </div>
                <div className="grid grid-rows-[max-content_auto]">
                  <label className="block text-slate-800 text-sm font-medium mb-2">
                    Quận/Huyện
                  </label>
                  <select
                    {...form.register("project_district")}
                    value={selectedValue}
                    onChange={handleChange}
                    className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    {quanhuyen?.map((item: any) => (
                      <option key={item?.code} value={item?.code}>{item?.name}</option>
                    ))}

                  </select>
                </div>
                <div className="grid grid-rows-[max-content_auto]">
                  <label className="block text-slate-800 text-sm font-medium mb-2">
                    Phường
                  </label>
                  <select
                    disabled={disableSelect}
                    className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <option value="">Abc</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-slate-800 text-sm font-medium mb-2">
                    Địa chỉ cụ thể
                  </label>
                  <input
                    {...form.register("project_location")}
                    type="text"
                    className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    placeholder="Địa chỉ..."

                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-slate-800 text-sm font-medium mb-2">
                    Mô tả dự án
                  </label>
                  <textarea

                    className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    placeholder="Tên dự án"
                    {...form.register("project_content")}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-slate-800 text-sm font-medium mb-2">
                    Map link
                  </label>
                  <input
                    {...form.register('map_link')}
                    type="text"
                    className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    placeholder="http://..."
                  />
                </div>
                <div className="image-list">
                  {images.map((image: any, index: any) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Ảnh ${index}`}
                        key={index}
                      />
                      <h2 onClick={() => handleRemoveImage(index)}>Xóa</h2>
                    </div>
                  ))}
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
                            {...form.register("project_image")}
                            id="file-upload"
                            type="file"
                            multiple
                            className="sr-only"
                          />
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
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
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default page;
