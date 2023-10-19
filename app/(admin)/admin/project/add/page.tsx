/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { BiX } from "react-icons/bi";

const page = () => {

    return (
        <div className="overflow-x-auto text-black">
            <div>
                <h1 className="text-center font-medium text-gray-900 text-[30px]">Thêm dự án</h1>
            </div>
            <form action="">
                <div className="min-h-32 lg:col-span-3 ">
                    <div className='bg-white shadow-md border border-gray-100 p-5  rounded-md'>
                        <h1 className=" font-medium text-gray-900 text-[20px] py-2">Thông tin chung</h1>
                        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4 p-4">
                            <div className='col-span-2'>
                                <label
                                    className="flex"
                                >
                                    Tên dự án
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[45px] py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Tên dự án"
                                />

                            </div>
                            <div className="grid grid-rows-[max-content_auto]">
                                <label className="">
                                    Danh mục
                                </label>
                                <select className="w-full h-full min-h-[45px] px-2 border border-gray-200 rounded-md">
                                    <option value="">Nhà đất bán</option>
                                    <option value="">Nhà đất cho thuê</option>
                                </select>

                            </div>
                            <div className='col-span-1'>
                                <label
                                    className="flex"
                                >
                                    Giá dự án
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[45px] py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Giá dự án"
                                />

                            </div>
                            <div className='col-span-1'>
                                <label
                                    className="flex"
                                >
                                    Diện tích
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[45px] py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Diện tích"
                                />

                            </div>
                            <div className='col-span-1'>
                                <label
                                    className="flex"
                                >
                                    Số phòng trong dự án
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[45px] py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Số phòng"
                                />
                            </div>
                            <div className="grid grid-rows-[max-content_auto]">
                                <label
                                >
                                    Quận/Huyện
                                </label>
                                <select className="w-full h-full min-h-[45px] px-2 border border-gray-200 rounded-md">
                                    <option value="">Quận/Huyện</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                </select>
                            </div>
                            <div className="grid grid-rows-[max-content_auto]">
                                <label
                                >
                                    Phường
                                </label>
                                <select disabled={true} className="w-full h-full min-h-[45px] px-2 border border-gray-200 rounded-md">
                                    <option value="">Abc</option>
                                </select>
                            </div>
                            <div className='col-span-2'>
                                <label
                                    className="flex"
                                >
                                    Địa chỉ cụ thể
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[45px] py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Địa chỉ..."
                                />
                            </div>

                            <div className='col-span-2'>
                                <label htmlFor="" className='flex'>Mô tả dự án</label>
                                <textarea name="" id="" cols={30} rows={5} className='w-full px-4 rounded-lg outline-none border-gray-300 border py-3 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0'>a</textarea>
                            </div>
                            <div className='col-span-2'>
                                <label
                                    className="flex"
                                >
                                    Map link
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full min-h-[45px] py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="http://..."
                                />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className='bg-white shadow-md p-10 mt-10 border border-gray-100 rounded-md'>
                        <label htmlFor="" className='flex'>Thêm hình ảnh</label>
                        <input type="file" multiple className='w-full' />
                        <div className="w-full min-h-[150px] rounded-md mt-5 border border-slate-500 grid grid-cols-[30%_auto] overflow-hidden gap-5">
                            <div className="w-full h-max min-h-full border border-r-slate-500 relative">
                                <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                <button>
                                    <BiX className="cursor-pointer w-[30px] h-[30px] fill-slate-600 absolute -top-1 -right-1 " />
                                </button>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                <div className="w-full h-max min-h-full border border-r-slate-500 relative">
                                    <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                    <button>
                                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                    </button>
                                </div>
                                <div className="w-full h-max min-h-full border border-r-slate-500 relative">
                                    <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                    <button>
                                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                    </button>
                                </div>
                                <div className="w-full h-max min-h-full border border-r-slate-500 relative">
                                    <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                    <button>
                                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                    </button>
                                </div>
                                <div className="w-full h-max min-h-full border border-r-slate-500 relative">
                                    <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                    <button>
                                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                    </button>
                                </div>
                                <div className="w-full h-max min-h-full border border-r-slate-500 relative">
                                    <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                    <button>
                                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                    </button>
                                </div>
                                <div className="w-full h-max min-h-full border border-r-slate-500 relative">
                                    <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                    <button>
                                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                    </button>
                                </div>
                                <div className="w-full h-max min-h-full border border-r-slate-500 relative">
                                    <img src="https://th.bing.com/th/id/OIP.w80M5agLYcmrAHRSCxgc2AHaFP?pid=ImgDet&rs=1" alt="" className="w-full" />
                                    <button>
                                        <BiX className="cursor-pointer w-[20px] h-[20px] fill-slate-600 absolute -top-1 -right-1 " />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white mt-10 shadow-md rounded-md'>
                        <button
                            className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            <span className="text-sm font-medium"> Thêm </span>
                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default page