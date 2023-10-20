/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { MdCircle, MdOutlinePhoto } from "react-icons/md";
import { BsFillImageFill } from "react-icons/bs";

const page = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [disableSelect, setDisableSelect] = useState<boolean>(true);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    }

    useEffect(() => {
        selectedValue !== '' ? setDisableSelect(false) : setDisableSelect(true)
    }, [selectedValue])

    return (
        <div className="overflow-x-auto text-black">
            <form >
                <div className="min-h-32 lg:col-span-3 ">
                    <div className='bg-white border border-slate-300 p-5 rounded-md'>
                        <h2 className=" text-slate-700 font-semibold text-[35px] uppercase text-center">Thêm mới dự án</h2>
                        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-6 p-4">
                            <div className='col-span-2'>
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Tên dự án
                                </label>
                                <input
                                    type="text"
                                    className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Tên dự án"
                                />
                            </div>
                            <div className="grid grid-rows-[max-content_auto]">
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Danh mục
                                </label>
                                <select className="w-full h-full min-h-[30px] px-2 border border-slate-300 rounded-md">
                                    <option value="">Nhà đất bán</option>
                                    <option value="">Nhà đất cho thuê</option>
                                </select>
                            </div>
                            <div className='col-span-1'>
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Giá dự án
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Giá dự án"
                                />
                            </div>
                            <div className='col-span-1'>
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Diện tích
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Diện tích"
                                />
                            </div>
                            <div className='col-span-1'>
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Số phòng trong dự án
                                </label>
                                <input
                                    type="text"
                                    className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Số phòng"
                                />
                            </div>
                            <div className="grid grid-rows-[max-content_auto]">
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Quận/Huyện
                                </label>
                                <select value={selectedValue} onChange={handleChange} className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                    <option value="">Quận/Huyện</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                </select>
                            </div>
                            <div className="grid grid-rows-[max-content_auto]">
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Phường
                                </label>
                                <select disabled={disableSelect} className="block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                    <option value="">Abc</option>
                                </select>
                            </div>
                            <div className='col-span-2'>
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Địa chỉ cụ thể
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Địa chỉ..."
                                />
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="" className="block text-sm font-medium mb-2">
                                    Mô tả dự án
                                </label>
                                <textarea placeholder="Mô tả dự án..." cols={30} rows={5} className='w-full px-4 rounded-lg outline-none border-slate-300 border py-3 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'></textarea>
                            </div>
                            <div className='col-span-2'>
                                <label className="block text-slate-800 text-sm font-medium mb-2">
                                    Map link
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[30px] py-2 px-2 outline-none border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="http://..."
                                />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
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
                            <div className='col-span-2'>
                                <div className="w-full min-h-[150px] rounded-md mt-5 border border-slate-500 grid grid-cols-[30%_auto] overflow-hidden gap-5">
                                    <div className="w-full h-max min-h-full border border-r-slate-500 relative">
                                        <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                        <button>
                                            <BiX className="cursor-pointer w-[30px] h-[30px] fill-slate-600 absolute -top-1 -right-1 " />
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2">
                                        <div className="w-full h-max min-h-full border relative">
                                            <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                            <button>
                                                <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                            </button>
                                        </div>
                                        <div className="w-full h-max min-h-full border relative">
                                            <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                            <button>
                                                <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                            </button>
                                        </div>
                                        <div className="w-full h-max min-h-full border relative">
                                            <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                            <button>
                                                <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                            </button>
                                        </div>
                                        <div className="w-full h-max min-h-full border relative">
                                            <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                            <button>
                                                <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                            </button>
                                        </div>
                                        <div className="w-full h-max min-h-full border relative">
                                            <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                            <button>
                                                <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                            </button>
                                        </div>
                                        <div className="w-full h-max min-h-full border relative">
                                            <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                            <button>
                                                <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                            </button>
                                        </div>
                                        <div className="w-full h-max min-h-full border relative">
                                            <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                            <button>
                                                <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                            </button>
                                        </div>
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
                                    Thêm mới
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