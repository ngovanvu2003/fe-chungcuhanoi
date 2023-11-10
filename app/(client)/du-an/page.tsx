"use client"
import { BsArrowRight } from "react-icons/bs";
import SearchPrj from "../../../components/admin/projects/searchprj";
import Proj from "../../../components/admin/projects/project";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
const Project = () => {
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR<any, Error, string>(
    `${process.env.NEXT_PUBLIC_BDS_API}/projects`,
    fetcher
  );
  const [projects, setprojects] = useState([]);

  const ListAllProject = data?.response?.data;

  useEffect(() => {
    setprojects(ListAllProject);
  }, [ListAllProject]);


  if (error) return <div>error</div>
  if (isLoading) return <Skeleton />
  return (
    <div className="container max-w-7xl mx-auto m-20">
      <SearchPrj />
      <div className="grid md:grid-cols-[60%,40%] gap-6 ">
        <div>
          <div className="flex flex-wrap  ">
            <a href="#" className="text-gray-400">
              Dự án
            </a>
            <span className="mx-1">/</span>
            <a href="#" className="hover:text-gray-400">
              Dự án BĐS Toàn Quốc
            </a>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Dự án toàn quốc
            </h1>
          </div>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-between">
            <div className="mb-2 md:mb-0">Hiện đang có 5.470 dự án</div>
            <div className="border border-solid rounded-md w-full md:w-auto">
              <select className="px-2 md:px-4 py-1 md:py-2 rounded-lg border-gray-300 text-gray-700 text-sm hidden md:block">
                <option value="" className="text-amber-800">
                  Mới nhất
                </option>
                <option value="">Mới cập nhật</option>
                <option value="">Giá cao nhất</option>
                <option value="">Giá thấp nhất</option>
              </select>
            </div>
          </div>
          {projects?.map((item: any) => {
            return <Proj key={item?._id} dataProject={item} />
          })}
        </div>

        <div className="hidden md:block">
          <div className="flex justify-between gap-8">
            <h2>Đánh giá dự án</h2>
            <a href="" className="flex gap-2 text-red-600  items-center">
              Xem tất cả <BsArrowRight />
            </a>
          </div>
          <div>
            <img
              src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
              alt=""
              className="w-full mt-2"
            />
          </div>
          <div className="mt-6">
            <div className="flex justify-between gap-8">
              <h2>Tin tức</h2>
              <a href="" className="flex gap-2 text-red-600 items-center">
                Xem tất cả <BsArrowRight />
              </a>
            </div>
            <div>
              <div className="flex gap-4">
                <img
                  src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
                  alt=""
                  className="w-1/3 mt-2"
                />
                <div className="grid items-end">
                  <div className="font-bold">
                    Loạt Thách Thức Khiến Nhà Ở Xã Hội Khó Cán Mốc 1 Triệu Căn
                    Năm 2030
                  </div>
                  <span className="text-gray-400">Hôm nay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
