"use client"
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import useSWR from "swr";
import Swal from "sweetalert2";
import { removeProject } from "@/app/api/project";
import Image from "next/image";


export default function TableDemo() {
    const fetcher = (args: string) => fetch(args).then(res => res.json());
    const { data, error, isLoading } = useSWR<any, Error, string>(`${process.env.NEXT_PUBLIC_BDS_API}/projects`, fetcher)
    const [projects, setprojects] = useState([]);

    
    const ListAllProject = data?.response?.data;
    console.log(ListAllProject);
    
    useEffect(() => {
        setprojects(ListAllProject)
      }, [ListAllProject])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>error</div>
    const HandleRemove = async (id: string | number) => {
        try {
            Swal.fire({
                title: "Xóa đê",
                showCancelButton: true,
                confirmButtonText: "ok",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await removeProject(id)
                        .then(({ message }) => {
                            const updatedProjects = projects.filter((item: any) => item._id !== id);
                        
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
        } catch (error) {

        }
    };
    return (
        <div>
            <div className="flex justify-between my-10">
                <p className="text-2xl font-semibold">
                    Danh sách dự án
                </p>
                <Button className='' variant="outline" ><Link href={'/admin/project/add'}>Thêm dự án</Link></Button>
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
                    {ListAllProject?.map((invoice: any, index: number) => (
                        <TableRow key={invoice?._id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell className="font-medium">{invoice?.project_name}</TableCell>
                            <TableCell>{invoice?.project_price}</TableCell>
                            <TableCell>  {invoice?.project_room}</TableCell>
                            <TableCell>
                                <Image
                                    className="w-[50px]"
                                    src={invoice?.project_image}
                                    alt="anh phong"
                                    width={300}
                                    height={300}
                                />  </TableCell>
                            <TableCell>{invoice?.project_location}</TableCell>
                            <TableCell>{invoice?.project_content}</TableCell>
                            <TableCell className="text-right">{invoice?.project_address}</TableCell>
                            <TableCell className="text-right">{invoice?.project_acreage}</TableCell>
                            <TableCell className="text-right">{invoice?.project_acreage}</TableCell>
                            <TableCell className="text-right">
                                <Button className='mr-2' variant="outline"><Link href={`/admin/category/update/`}>Cập nhật</Link></Button>
                                <Button className='' variant="outline" onClick={() => HandleRemove(invoice?._id)}>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
