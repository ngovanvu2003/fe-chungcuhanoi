"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
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
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCategoryById, updateCategory } from "@/app/api/category"


const formSchema = z.object({
    category_name: z.string().min(2, {
        message: "category_name must be at least 2 characters.",
    }),
    category_description: z.string()
})


const page = () => {
    const router = useRouter();
    const { id } = useParams()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category_name: "",
            category_description: ""
        },
    })

    useEffect(() => {
        // Hàm lấy thông tin danh mục khi id thay đổi
        const fetchData = async () => {
            try {
                if (id) {
                    const { category } = await getCategoryById(id);
                    form.setValue('category_name', category.category_name);
                    form.setValue('category_description', category.category_description);
                }
            } catch (error) {
                console.error("Failed to fetch category:", error.message);
            }
        };

        fetchData();
    }, [id, form]);


    const onSubmit = async (categoryData: any) => {
        setIsSubmitting(true);
        try {
            await updateCategory(id, categoryData)
            setTimeout(() => {
                router.push('/admin/category');
            }, 1000)
            console.log("update thành công")
        } catch (error) {
            console.error("Failed thêm thất bại:", error.message);
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <div>
            <h2 className='text-3xl my-5 text-center'>
                Cập nhật danh mục
            </h2>
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
                                        <Input placeholder="category_name" {...field} />
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
                                    <FormLabel>Description</FormLabel><br />
                                    <FormControl>
                                        <textarea
                                            className="w-full border border-solid border-[rgb(224,224,224)] p-2 rounded-[5px]"
                                            placeholder="category_description"
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
        </div>
    )
}

export default page
