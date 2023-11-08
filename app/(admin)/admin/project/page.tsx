"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useSWR from "swr";
import Swal from "sweetalert2";
import { VND, removeProject } from "@/app/api/project";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { VscRequestChanges } from "react-icons/vsc"
import { MdGroupAdd } from "react-icons/md";
export default function TableDemo() {
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR<any, Error, string>(
    `${process.env.NEXT_PUBLIC_BDS_API}/projects`,
    fetcher
  );
  const [projects, setprojects] = useState([]);

  const ListAllProject = data?.response?.data;
  console.log(ListAllProject);

  useEffect(() => {
    setprojects(ListAllProject);
  }, [ListAllProject]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  const HandleRemove = async (id: string | number) => {
    try {
      Swal.fire({
        title: "Bạn có muốn xóa không?",
        showCancelButton: true,
        confirmButtonText: "Xóa",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await removeProject(id)
            .then(({ message }) => {
              const updatedProjects = projects.filter(
                (item: any) => item._id !== id
              );

              // Update the state with the new data after removing the project
              setprojects(updatedProjects);
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
    } catch (error) { }
  };
  return (
    <div className=" overflow-x-auto">
      <div className="flex justify-between my-10">
        <p className="text-2xl font-semibold">Danh sách dự án</p>
        <Button className="" variant="outline">
          <Link href={"/admin/project/add"}><MdGroupAdd /> </Link>
        </Button>
      </div>
      <Table className="overflow-x-auto w-[1500px]">
        <TableHeader>
          <TableRow>
            <TableHead className="">#</TableHead>
            <TableHead>Tên dự án</TableHead>
            <TableHead>Gia tiền</TableHead>
            <TableHead className="">Số phòng</TableHead>
            <TableHead className="">Ảnh</TableHead>
            <TableHead className="">Địa điểm</TableHead>
            <TableHead className="">Mô tả</TableHead>
            <TableHead className="">Địa chỉ cụ thể</TableHead>
            <TableHead className="text-center">Diện tích</TableHead>
            <TableHead className="w-[150px] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className=" border-collapse border">
          {ListAllProject?.map((invoice: any, index: number) => (
            <TableRow key={invoice?._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">
                {invoice?.project_name}
              </TableCell>
              <TableCell>{VND.format(invoice?.project_price)}</TableCell>
              <TableCell> {invoice?.project_room}</TableCell>
              <TableCell>
                {invoice?.project_image[0] ? (
                  <Image
                    className="w-[50px]"
                    src={invoice.project_image[0]}
                    alt="anh phong"
                    width={300}
                    height={300}
                  />
                ) : (
                  // Handle the case when there is no image
                  <p>No image available</p>
                )}

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
                <Button className="mr-2" variant="outline">
                  <Link href={`/admin/project/update/${invoice?._id}`}><VscRequestChanges /> </Link>
                </Button>
                <Button
                  className=""
                  variant="outline"
                  onClick={() => HandleRemove(invoice?._id)}
                >
                  <AiOutlineDelete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
