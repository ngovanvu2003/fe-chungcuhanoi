"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Swal from 'sweetalert2';
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { addCategory } from "@/app/api/category"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { ICategorys } from "@/interfaces/auths";


const formSchema = z.object({
    category_name: z.string().min(2, {
        message: "Tối thiểu 2 ký tự",
    }),
    category_description: z.string()
})


const page = () => {
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category_name: "",
            category_description: ""
        },
    })

    const onSubmit = async (categoryData: ICategorys) => {
        setIsSubmitting(true);
        try {
            await addCategory(categoryData);
            Swal.fire({
                title: '',
                text: 'Thêm thành công !',
                icon: 'success',
                timer: 1500
            })
            router.push('/admin/category');

        } catch (error) {
            Swal.fire({
                title: '',
                text: 'Danh mục đã tồn tại vui lòng nhập lại !',
                icon: 'error',
                confirmButtonText: 'Nhập lại'
            })
            return;
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 lg:w-[60%] md:w-[70%] w-[100%] ">
                    <FormField
                        control={form.control}
                        name="category_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nhập tên danh mục..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category_description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <textarea
                                        className="w-full border border-solid border-[rgb(224,224,224)] p-2 rounded-[5px]"
                                        placeholder="Nhập mô tả danh mục..."
                                        {...field}
                                        rows={4}  // Số dòng muốn hiển thị
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default page
