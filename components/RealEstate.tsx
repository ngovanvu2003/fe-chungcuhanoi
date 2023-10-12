"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowRightAlt, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Card } from './ui/card';

const RealEstate = () => {

    return (
        <Card className='border-none'>
            <div className='flex justify-between items-center my-8'>
                <h3 className='font-semibold text-2xl'>Bất động sản dành cho bạn</h3>
                <a href="" className='hover:text-gray-500 text-sm'>Tin nhà đất bán mới nhất </a>
            </div>
            <Link href={''} className='grid grid-cols-4 gap-7 max-w-screen-2xl mx-auto'>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-4 text-title'>
                        <div>
                            <p className='text-title text-base font-semibold '>Bán gấp nhà giảm 3 tỷ, nhà 1 trệt 2 lầu, 6 phòng ngủ, sân 7 chỗ ôtô né nhau, full nội thất cao cấp</p>
                        </div>
                        <p className=' text-red-500 text-xl my-2'>6,7 tỷ - 135m2</p>
                        <p className='flex items-center gap-1 font-sans text-sm'>
                            <i><CiLocationOn /></i>
                            <span>Trung Hòa - Cầu Giấy</span>
                        </p>
                        <p className='text-xs text-gray-500 my-5'>Đăng hôm nay</p>
                    </div>
                </div>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-3 text-title'>
                        <div>
                            <p className='text-title text-base font-semibold '>Bán gấp nhà giảm 3 tỷ, nhà 1 trệt 2 lầu, 6 phòng ngủ, sân 7 chỗ ôtô né nhau, full nội thất cao cấp</p>
                        </div>
                        <p className=' text-red-500 text-xl my-2'>6,7 tỷ - 135m2</p>
                        <p className='flex items-center gap-1 font-sans text-sm'>
                            <i><CiLocationOn /></i>
                            <span>Trung Hòa - Cầu Giấy</span>
                        </p>
                        <p className='text-xs text-gray-500 my-5'>Đăng hôm nay</p>
                    </div>
                </div>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-3 text-title'>
                        <div>
                            <p className='text-title text-base font-semibold '>Bán gấp nhà giảm 3 tỷ, nhà 1 trệt 2 lầu, 6 phòng ngủ, sân 7 chỗ ôtô né nhau, full nội thất cao cấp</p>
                        </div>
                        <p className=' text-red-500 text-xl my-2'>6,7 tỷ - 135m2</p>
                        <p className='flex items-center gap-1 font-sans text-sm'>
                            <i><CiLocationOn /></i>
                            <span>Trung Hòa - Cầu Giấy</span>
                        </p>
                        <p className='text-xs text-gray-500 my-5'>Đăng hôm nay</p>
                    </div>
                </div>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-3 text-title'>
                        <div>
                            <p className='text-title text-base font-semibold '>Bán gấp nhà giảm 3 tỷ, nhà 1 trệt 2 lầu, 6 phòng ngủ, sân 7 chỗ ôtô né nhau, full nội thất cao cấp</p>
                        </div>
                        <p className=' text-red-500 text-xl my-2'>6,7 tỷ - 135m2</p>
                        <p className='flex items-center gap-1 font-sans text-sm'>
                            <i><CiLocationOn /></i>
                            <span>Trung Hòa - Cầu Giấy</span>
                        </p>
                        <p className='text-xs text-gray-500 my-5'>Đăng hôm nay</p>
                    </div>
                </div>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-3 text-title'>
                        <div>
                            <p className='text-title text-base font-semibold '>Bán gấp nhà giảm 3 tỷ, nhà 1 trệt 2 lầu, 6 phòng ngủ, sân 7 chỗ ôtô né nhau, full nội thất cao cấp</p>
                        </div>
                        <p className=' text-red-500 text-xl my-2'>6,7 tỷ - 135m2</p>
                        <p className='flex items-center gap-1 font-sans text-sm'>
                            <i><CiLocationOn /></i>
                            <span>Trung Hòa - Cầu Giấy</span>
                        </p>
                        <p className='text-xs text-gray-500 my-5'>Đăng hôm nay</p>
                    </div>
                </div>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-3 text-title'>
                        <div>
                            <p className='text-title text-base font-semibold '>Bán gấp nhà giảm 3 tỷ, nhà 1 trệt 2 lầu, 6 phòng ngủ, sân 7 chỗ ôtô né nhau, full nội thất cao cấp</p>
                        </div>
                        <p className=' text-red-500 text-xl my-2'>6,7 tỷ - 135m2</p>
                        <p className='flex items-center gap-1 font-sans text-sm'>
                            <i><CiLocationOn /></i>
                            <span>Trung Hòa - Cầu Giấy</span>
                        </p>
                        <p className='text-xs text-gray-500 my-5'>Đăng hôm nay</p>
                    </div>
                </div>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-3 text-title'>
                        <div>
                            <p className='text-title text-base font-semibold '>Bán gấp nhà giảm 3 tỷ, nhà 1 trệt 2 lầu, 6 phòng ngủ, sân 7 chỗ ôtô né nhau, full nội thất cao cấp</p>
                        </div>
                        <p className=' text-red-500 text-xl my-2'>6,7 tỷ - 135m2</p>
                        <p className='flex items-center gap-1 font-sans text-sm'>
                            <i><CiLocationOn /></i>
                            <span>Trung Hòa - Cầu Giấy</span>
                        </p>
                        <p className='text-xs text-gray-500 my-5'>Đăng hôm nay</p>
                    </div>
                </div>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-3 text-title'>
                        <div>
                            <p className='text-title text-base font-semibold '>Bán gấp nhà giảm 3 tỷ, nhà 1 trệt 2 lầu, 6 phòng ngủ, sân 7 chỗ ôtô né nhau, full nội thất cao cấp</p>
                        </div>
                        <p className=' text-red-500 text-xl my-2'>6,7 tỷ - 135m2</p>
                        <p className='flex items-center gap-1 font-sans text-sm'>
                            <i><CiLocationOn /></i>
                            <span>Trung Hòa - Cầu Giấy</span>
                        </p>
                        <p className='text-xs text-gray-500 my-5'>Đăng hôm nay</p>
                    </div>
                </div>
            </Link>
            <button className='mx-auto flex items-center gap-2 border my-10 px-10 rounded-lg border-gray-500 border-solid py-3'>
                <span>
                    Mở rộng
                </span>
                <MdOutlineKeyboardArrowDown />
            </button>
            <div className='flex justify-between items-center my-8'>
                <h3 className='font-semibold text-2xl'>Dự án bất động sản nổi bật</h3>
                <a href="" className='text-red-500 text-sm flex items-center gap-1'>
                    <span>
                        Xem thêm
                    </span>
                    <MdOutlineArrowRightAlt />
                </a>
            </div>
            <Link href={''} className='grid grid-cols-4 gap-5'>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-3 '>
                        <p className='truncate  text-green-600 text-xs bg-green-100 px-1 py-1 rounded'><span className='font-semibold' >Đang mở bán</span>- 10/2023: Mở bán phân khu mới</p>
                        <div>
                            <p className=' text-lg font-semibold '>Vinhomes Smart City</p>
                        </div>
                        <p className='font-semibold my-1    '>280 ha</p>
                        <span>Trung Hòa - Cầu Giấy</span>
                    </div>
                </div>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-3 '>
                        <p className='truncate  text-green-600 text-xs bg-green-100 px-1 py-1 rounded'><span className='font-semibold' >Đang mở bán</span>- 10/2023: Mở bán phân khu mới</p>
                        <div>
                            <p className=' text-lg font-semibold '>Vinhomes Smart City</p>
                        </div>
                        <p className='font-semibold my-1    '>280 ha</p>
                        <span>Trung Hòa - Cầu Giấy</span>
                    </div>
                </div>
                <div className='  shadow-2xl rounded-md'>
                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2023/10/09/20231009093238-c173_wm.jpg" alt="" />
                    <div className='p-3 '>
                        <span className='font-semibold truncate rounded  text-green-600 text-xs bg-green-100 px-1 py-1' >Đang mở bán</span>
                        <div>
                            <p className=' text-lg font-semibold '>Vinhomes Smart City</p>
                        </div>
                        <p className='font-semibold my-1    '>280 ha</p>
                        <span>Trung Hòa - Cầu Giấy</span>
                    </div>
                </div>
            </Link>
        </Card>
    )
}

export default RealEstate