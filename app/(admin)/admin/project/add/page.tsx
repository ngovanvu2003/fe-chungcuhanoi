"use client"

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
                        <div className="grid grid-cols-1  gap-2 lg:grid-cols-2 lg:gap-4 p-4">
                            <div className='col-span-2'>
                                <label
                                    htmlFor="Họ Tên"
                                    className="relative flex"
                                >
                                    Tên dự án
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Tên dự án"
                                />

                            </div>
                            <div>
                                <label htmlFor="HeadlineAct" className=" flex text-sm font-medium text-gray-900">
                                    Danh mục
                                </label>

                                <div className="relative mt-1.5">
                                    <input
                                        type="text"
                                        list="HeadlineActArtist"
                                        id="HeadlineAct"
                                        className="w-full px-2 rounded-lg outline-none border-gray-300 border py-3 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                                        placeholder="Please select"
                                    />

                                    <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-5 w-5 text-gray-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <datalist id="HeadlineActArtist">

                                    {/* {locations.find((location: any) => location.name === 'Thành phố Hà Nội')} */}
                                    {/* //  => {
                                    //     <div>
                                    //         {data?.districts?.map((me: any) => {
                                    //             // console.log(me)
                                    //             return <option key={index} value="">{me}</option>
                                    //         })}
                                    //     </div>
                                    // })} */}
                                </datalist>
                            </div>
                            <div className='col-span-1'>
                                <label
                                    htmlFor="Họ Tên"
                                    className="relative flex"
                                >
                                    Giá dự án
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Tên dự án"
                                />

                            </div>
                            <div className='col-span-1'>
                                <label
                                    htmlFor="Họ Tên"
                                    className="relative flex"
                                >
                                    Diện tích
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Tên dự án"
                                />

                            </div>
                            <div className='col-span-1'>
                                <label
                                    htmlFor="Họ Tên"
                                    className="relative flex"
                                >
                                    Số phòng trong dự án
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Tên dự án"
                                />
                            </div>
                            <div className='col-span-1'>
                                <label
                                    htmlFor="Họ Tên"
                                    className="relative flex"
                                >
                                    Địa chỉ cụ thể
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Tên dự án"
                                />
                            </div>
                            <div className='col-span-1'>
                                <label
                                    htmlFor="Họ Tên"
                                    className="relative flex"
                                >
                                    Quận/Huyện
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Tên dự án"
                                />
                            </div>

                            <div className='col-span-2'>
                                <label htmlFor="" className='flex'>Mô tả dự án</label>
                                <textarea name="" id="" cols={30} rows={10} className='w-full px-4 rounded-lg outline-none border-gray-300 border py-3 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0'>a</textarea>
                            </div>
                            <div className='col-span-2'>
                                <label
                                    htmlFor="Họ Tên"
                                    className="relative flex"
                                >
                                    Map link
                                </label>
                                <input
                                    type="text"
                                    className=" block rounded-md border w-full py-2 px-2 outline-none border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    placeholder="Tên dự án"
                                />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className='bg-white shadow-md p-10 mt-10 border border-gray-100  rounded-md'>
                        <label htmlFor="" className='flex'>Thêm hình ảnh</label>
                        <input type="file" className='w-full' />
                    </div>
                    <div className='bg-white mt-10 shadow-md  rounded-md'>
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