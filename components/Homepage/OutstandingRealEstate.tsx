import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OutstandingRealEstate = () => {
    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2.5,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    }
    return (
        <div>
            <div className='flex justify-between items-center my-8'>
                <h3 className='font-semibold text-lg md:text-2xl'>Dự án bất động sản nổi bật</h3>
                <a href="" className='text-red-500 text-sm flex items-center gap-1'>
                    <span>
                        Xem thêm
                    </span>
                    <MdOutlineArrowRightAlt />
                </a>
            </div>
            <Slider className='grid grid-cols-4 gap-5  overflow-x-auto ' {...settings}>
                <div className='  shadow rounded-md'>
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
                <div className='  shadow rounded-md'>
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
                <div className='  shadow rounded-md'>
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
            </Slider>
        </div>
    )
}

export default OutstandingRealEstate