"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useSWR from "swr";
import Swal from "sweetalert2";
import { removeProject } from "@/app/api/project";
import Image from "next/image";
import { CiTrash } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";

export default function TableDemo() {
  const fetcher = (args: string) => fetch(args).then((res) => res.json());

  const { data, error, isLoading } = useSWR<any, Error, string>(
    `${process.env.NEXT_PUBLIC_BDS_API_PROJECT}`,
    fetcher
  );
  const [projects, setprojects] = useState(data?.response?.data);
  const [search, setSearch] = useState("");
  const { data: searchQuery } = useSWR<any, Error, string>(
    `${process.env.NEXT_PUBLIC_BDS_API_PROJECT}?_search=${search}`,
    fetcher
  );

  const [quanhuyen, setDataquanhuyen] = useState<any>();
  useEffect(() => {
    fetch(
      "https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=01&limit=-1"
    )
      .then((response) => response.json())
      .then((result) => {
        const items = result.data.data;
        console.log(items);
        setDataquanhuyen(items);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }, []);

  useEffect(() => {
    setprojects(searchQuery?.response?.data);
  }, [searchQuery?.response?.data]);
  const searchBDS = (e: any) => {
    setSearch(e.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  const HandleRemovePrject = async (id: string) => {
    try {
      Swal.fire({
        title: "Bạn có chắc muốn xóa ?",
        showCancelButton: true,
        confirmButtonText: "ok",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await removeProject(id)
            .then(({ message }) => {
              const updatedCategories = projects.filter(
                (item: any) => item._id !== id
              );
              setprojects(updatedCategories);
              Swal.fire({
                position: "top",
                icon: "success",
                title: `${message}`,
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              Swal.fire({
                position: "top",
                icon: "error",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500,
              });
            });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-10">
        <p className="text-2xl font-semibold">Danh sách dự án</p>

        <div className="flex justify-between my-10 ">
          {/* select-search theo địa chỉ */}
          <div>
            <label
              htmlFor="searchBy"
              className="inline-block w-[5rem] text-sl mt-2"
            >
              Địa điểm :
            </label>
          </div>

          <div className="pr-2 border border-gray-300 rounded p-2 w-64 mr-3">
            <select
              id="searchBy"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            >
              <option value="" onClick={searchBDS}>
                Tất cả
              </option>
              {quanhuyen?.map((item: any, index: any) => {
                return (
                  <option value={item.name_with_type}>
                    {index}. {item.name_with_type}{" "}
                  </option>
                );
              })}
            </select>
          </div>
          {/* search filter  */}
          <input
            type="search"
            className="mr-5 block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            onChange={(e) => searchBDS(e)}
            placeholder="Search ... "
          />

          <Button className="mr-5">
            <CiTrash />
          </Button>
          <Button className="" variant="outline">
            <Link href={"/admin/project/add"}>
              <AiFillPlusCircle />
            </Link>
          </Button>
        </div>
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Tên dự án</TableHead>
            <TableHead>Gia tiền</TableHead>
            <TableHead className="text-right">Số phòng</TableHead>
            <TableHead className="text-right">Ảnh</TableHead>
            <TableHead className="text-right">Địa điểm</TableHead>
            <TableHead className="text-right">Mô tả</TableHead>
            <TableHead className="text-right">Địa chỉ cụ thể</TableHead>
            <TableHead className="text-right">Diện tích</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className=" border-collapse border">
          {projects?.map((invoice: any, index: number) => (
            <TableRow key={invoice?._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">
                {invoice?.project_name}
              </TableCell>
              <TableCell>{invoice?.project_price}</TableCell>
              <TableCell> {invoice?.project_room}</TableCell>
              <TableCell>
                <Image
                  className="w-[50px]"
                  src={invoice?.project_image}
                  alt="anh phong"
                  width={300}
                  height={300}
                />{" "}
              </TableCell>
              <TableCell>{invoice?.project_location}</TableCell>
              <TableCell>{invoice?.project_content}</TableCell>
              <TableCell className="text-right">
                {invoice?.project_address}
              </TableCell>
              <TableCell className="text-right">
                {invoice?.project_acreage}
              </TableCell>
              <TableCell className="text-right">
                {invoice?.project_acreage}
              </TableCell>
              <TableCell className="text-right">
                <Button className="mr-2" variant="outline">
                  <Link href={`/admin/project/update/${invoice?._id}`}>
                    Cập nhật
                  </Link>
                </Button>
                <Button
                  className=""
                  variant="outline"
                  onClick={() => HandleRemovePrject(invoice._id)}
                >
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
