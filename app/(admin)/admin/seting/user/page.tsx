"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import Link from 'next/link';
const page = () => {
  const [user,setUser]= useState<any>({});
    useEffect(() => {
   
      const lcal = JSON.parse(localStorage.getItem("user") as string);
      // console.log(lcal);
      
      setUser(lcal.user);
    },[])
    console.log(user);
    
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }
  //   if (isError) {
  //     return <div>Error loading data</div>;
  //   }
  return (
    <div>
      <Table>
        
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px] font-bold">UserName</TableHead>
            <TableHead className="w-[300px] font-bold">Email</TableHead>
            <TableHead className="w-[300px] font-bold">Phone</TableHead>
            <TableHead className="text-right font-bold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          <TableRow>
            <TableCell className="">{user?.name}</TableCell>
            <TableCell className="">{user?.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
           
            <TableCell className="text-right">
                <Button className='mr-2 bg-teal-300' variant="outline"><Link href={`/admin/seting/user/update/${user._id}`}>Cập nhật</Link></Button>
              </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default page;
