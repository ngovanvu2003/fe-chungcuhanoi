/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { MdCircle, MdOutlinePhoto } from "react-icons/md";
import { BsFillImageFill } from "react-icons/bs";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
// import { getUserById } from "@/app/api/user";

const page = () => {

    const {slug} = useParams()
    console.log(slug)

    const {
        register,
        handleSubmit,
    } = useForm()


    // const userfull = getUserById(slug)
    // console.log(userfull)
    // const [selectedValue, 
    // ] = useState<string>('');
    // const [disableSelect, setDisableSelect] = useState<boolean>(true);

    // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setSelectedValue(event.target.value);
    // }

    // useEffect(() => {
    //     selectedValue !== '' ? setDisableSelect(false) : setDisableSelect(true)
    // }, [selectedValue])

    return (
        <div className="overflow-x-auto text-black">
            <form >
                <div className="min-h-32 lg:col-span-3 ">
                    <div className='bg-white border border-slate-300 p-5 rounded-md'>
                        <h2 className=" text-slate-700 font-semibold text-[35px] uppercase text-center">Update User</h2>
                        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-6 p-4">
                            <div className='col-span-2'>
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="User Name"
                                />
                            </div>
                            <div className='col-span-2'>
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Email"
                                />
                            </div>
                            <div className='col-span-1'>
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Password
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="******"
                                />
                            </div>
                            <div className='col-span-1'>
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="SĐT"
                                />
                            </div>
                            
                          
                            <div className="col-span-2">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Avatar
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <BsFillImageFill className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" type="file" multiple className="sr-only" />
                                            </label>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-span-2 mt-6 flex items-center justify-end gap-x-5">
                                <button
                                    type="submit"
                                    className="cursor-pointer px-3 py-2 text-sm font-semibold text-gray-900"
                                >
                                    Quay lại
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>


                </div >
            </form >
        </div >
    )
}

export default page