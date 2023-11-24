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
import React, { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCategoryById, updateCategory } from "@/app/api/category"
import { ICategorys } from "@/interfaces/auths"
import Swal from 'sweetalert2';
import { useCategoryQuery } from "@/app/Hooks/categories/useCategoriesQuery"
import { useCategoriesMutation } from "@/app/Hooks/categories/useCategoriesMutation"

// const formSchema = z.object({
//     category_name: z.string().min(2, {
//         message: "category_name must be at least 2 characters.",
//     }),
//     category_description: z.string()
// })


const UpdateCategories = React.memo(() => {
    const router = useRouter();
    const { id } = useParams()

    const { data, isLoading, isError } = useCategoryQuery(id)
    const listCate = data?.data?.category

    const { form, onSubmit } = useCategoriesMutation({
        action: "UPDATE",
        onSuccess: () => {
            console.log("Sửa thành công");
            form.reset();
            router.push("/admin/category");
        },
    });
    const hihi = (values: any) => {
        try {
            onSubmit({ _id: id, ...values });

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (listCate && form) {
            form.reset({
                category_name: listCate?.category_name,
                category_description: listCate?.category_description,
            });
        }
    }, [listCate, form]);
    return (
        <div>
            <h2 className='text-3xl my-5 text-center'>
                Cập nhật danh mục
            </h2>
            <div className="flex justify-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(hihi)} className="space-y-8 lg:w-[60%] md:w-[70%] w-[100%] ">
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
});

export default UpdateCategories;
