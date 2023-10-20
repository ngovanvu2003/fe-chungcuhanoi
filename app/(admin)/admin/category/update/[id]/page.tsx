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
import { ICategorys } from "@/interfaces/auths"
import Swal from 'sweetalert2';

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


    const onSubmit = async (categoryData: ICategorys) => {
        setIsSubmitting(true);
        try {
            await updateCategory(id, categoryData)
            Swal.fire({
                title: '',
                text: 'Cập nhật thành công !',
                icon: 'success',
                timer: 1500
            })
            router.push('/admin/category');

        } catch (error) {
            Swal.fire({
                title: 'Opps',
                text: 'Cập nhật thất bại!',
                icon: 'error',
            })
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
                                            rows={4}
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
