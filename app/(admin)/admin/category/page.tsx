"use client"
import { removeCategories, useFetchData } from '@/app/(client)/api/category';
import React, { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast"
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
const DataTable = () => {
  const { data: cate, isLoading, isError } = useFetchData();
  const [categorys, setcategorys] = useState([])
  const { toast } = useToast()
  const Category = cate?.response.data


  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading data</div>;
  }
  const HandleRemove = async (id: string) => {
    try {
      await removeCategories(id);
      const updatedCategorys = categorys.filter(item => item._id !== id);
      setcategorys(updatedCategorys);
      toast({
        description: "Danh mục đã được xóa thành công.",
      })

    } catch (error) {
      toast({
        description: "Lỗi xóa danh mục:" + error,
      })
    }
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >STT</TableHead>
            <TableHead>Tên danh mục </TableHead>
            <TableHead>Mô tả </TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Category.map((invoice: any, index: number) => (
            <TableRow key={invoice._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{invoice.category_name}</TableCell>
              <TableCell>{invoice.category_description}</TableCell>
              <TableCell className="text-right">
                <Button className='mr-2' variant="outline">sửa</Button>
                <Button className='' variant="outline" onClick={() => HandleRemove(invoice._id)}>Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
