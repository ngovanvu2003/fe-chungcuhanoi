"use client";
import RelatedProducts from "@/components/admin/ProjectDetail/RelatedProducts";
import Contact from "@/components/admin/ProjectDetail/Contact";
import Remises from "@/components/admin/ProjectDetail/Remises";
import Details from "@/components/admin/ProjectDetail/Details";
import Location from "@/components/admin/ProjectDetail/Location";
import { BsShare } from "react-icons/bs";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProjectById } from "@/app/api/project";
import LocationOnTheMap from "@/components/admin/ProjectDetail/LocationOnTheMap";

const Index = React.memo(() => {
  const [project, setProject] = useState(null);
  const { id } = useParams<any>();
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getProjectById(id);

        if (response && response.project) {
          setProject(response.project);
        }
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching project:", error);
      }
    };
    fetchProject();
  }, [id]);
  return (
    <div className="mx-2 max-w-5xl lg:mx-auto mt-20  text-sm">
      <div>
        <div className="my-2">
          <a href="" className="text-[#999] font-[14px] line-[20px]">
            Dự án
          </a>
          <span className="text-[#999]"> / </span>
          <a href="" className="text-[#999]">
            Đồng Nai
          </a>
          <span className="text-[#999]"> / </span>
          <a href="" className="text-[#999]">
            Nhơn Trạch
          </a>
          <span className="text-[#999]"> / </span>
          <a href="">Khu đô thị mới khu dân cư Phú Thịnh 1</a>
        </div>

        <div className="flex justify-between">
          <h1 className="font-medium text-xl mb-4">{project?.project_name}</h1>
          <div className="hidden md:block">
            {" "}
            <div className="flex  flex-row   items-center px-3 hover:bg-slate-50 border rounded-lg ">
              <div className="mr-2 ">
                <BsShare />
              </div>

              <button> Chia sẻ </button>
            </div>
          </div>
        </div>
        <div className=" mb-5">
          <a href="">{project?.project_location}</a>
          <a href="" className="text-[#74150F] font-medium">
            Xem bản đồ
          </a>
        </div>
        <div className="grid sm md:grid-cols-2 gap-1 border rounded-lg">
          <div className="relative">
            <img
              className="w-[100%] rounded-l-lg"
              src={project?.project_image[0]?.image_url}
              alt=""
            />
            <div className="absolute top-0 left-0 bg-slate-50 py-1 px-2 border rounded-md m-2 text-[#999] font-serif">
              <label htmlFor="">Đang cập nhật</label>
            </div>
          </div>
          <div className="grid grid-cols-[70%,29%] gap-1">
            <div>
              <img
                className="w-[100%] h-[100%]"
                src={project?.project_image[1]?.image_url}
                alt=""
              />
            </div>
            <div className="grid grid-rows-2  gap-1 ">
              <div>
                <img
                  className="w-[100%] h-[100%] rounded-tr-lg"
                  src={project?.project_image[2]?.image_url}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-[100%] h-[100%] rounded-br-lg"
                  src={project?.project_image[3]?.image_url}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-3 md:block hidden">
          <ul className="flex gap-10">
            <li>
              <a href="">
                <div className="flex-col">
                  <h4 className="font-medium">Tổng quan</h4>
                  <span>Giới thiệu về dự án</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex-col">
                  <h4 className="font-medium">Mặt bằng dự án</h4>
                  <span>Tổng thể hạ tầng</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex-col">
                  <h4 className="font-medium">Vị trí</h4>
                  <span>Bản đồ dự án</span>
                </div>
              </a>
            </li>

            <li>
              <a href="">
                <div className="flex-col">
                  <h4 className="font-medium">Dự án liên quan</h4>
                  <span>Dự án xung quanh</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="grid sm:grid-flow-col-1 md:grid-cols-[60%,35%] gap-2 md:gap-[5%] lg:gap-[5%] mt-[40px]">
        <div>
          <h2 className="font-medium text-lg">
            Tổng quan {project?.project_name}
          </h2>
          <div className="my-[13px] text-sm">
            <div className="flex gap-5">
              <label>
                <h4>Diện tích</h4>
              </label>
              <span>20 ha</span>
            </div>
          </div>

          <div className="text-sm">
            <p className="mb-[16px]">
              <strong className="font-medium">
                Dự án {project?.project_name}{" "}
              </strong>
              {project?.project_content}
            </p>
          </div>

          <figure className="text-center text-[#999] ">
            <img
              src={project?.project_image[0]?.image_url}
              alt=""
              className="sm:w-[390px] sm:h-[200px] md:w-[100%] md:h-[400px]"
            />
            <figcaption className="mt-3 mb-5">
              <i>
                Phối cảnh tổng thể dự án Khu dân cư Phú Thịnh 1 tại Nhơn Trạch,
                Đồng Nai
              </i>
            </figcaption>
          </figure>
          <h3 className="font-medium text-lg">Vị trí</h3>

          <Location />

          <Details />

          <h2 className="font-medium text-lg mb-4">Mặt bằng dự án</h2>
          <Remises />
          <h2 className="font-semibold mt-6">
            {" "}
            Vị trí dự án Khu dân cư Phú Thịnh 1
          </h2>
          <LocationOnTheMap />
        </div>
        <Contact />
      </div>
      <hr className="mt-6" />
      <RelatedProducts />
    </div>
  );
});
export default Index;
