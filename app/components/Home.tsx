"use client"
import {BiTimeFive} from "react-icons/bi"

const UIHome1 = () => {
    return(
        <div className="max-w-full  ">
            <div className="max-w-[80%] flex m-auto">
                <div className="max-w-[70%] mr-[30px]">
                    <div className="border-b border-b-[#EEEEEE]">
                        <ul className="flex gap-2 text-[20px] font-semibold">
                            <li className="p-[10px] hover:text-[#2C2C2C] text-[#999999] hover:border-b-2 hover:border-b-[#D73A2F]"><button>Tin nổi bật</button></li>
                            <li className="p-[10px] hover:text-[#2C2C2C] text-[#999999] hover:border-b-2 hover:border-b-[#D73A2F]"><button>Tin tức</button></li>
                            <li className="p-[10px] hover:text-[#2C2C2C] text-[#999999] hover:border-b-2 hover:border-b-[#D73A2F]"><button>BĐS TPHCM</button></li>
                            <li className="p-[10px] hover:text-[#2C2C2C] text-[#999999] hover:border-b-2 hover:border-b-[#D73A2F]"><button>BĐS Hà Nội</button></li>
                        </ul>
                    </div>

                    <div className="flex mt-[20px]">
                        <div className="">
                            <img className="max-w-[457px] mr-[30px]" src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/giao-dien.webp" alt="" />
                            <p className="pt-[20px] text-[20px] font-semibold">Sàn Môi Giới Bất Động Sản Chi Bạo Để Tuyển Quân</p>
                            <div className="flex"><p className="mt-[3px]"><BiTimeFive/></p><p className="ml-[5px]">2 ngày trước</p></div>
                            
                        </div>

                        <div>
                            <p className=" text-[#2C2C2C] my-[10px] pb-[10px] border-b border-b-[#EEEEEE]">4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</p>
                            
                            <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE] ">Thị Trường BĐS Năm 2023, Thời Điểm Khó Khăn Nhất Đã Qua?</p>

                            <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]">Cách Chụp Ảnh, Quay Video Nhà Đẹp - Bí Quyết Cho Thuê Nhà Nhanh Có Thể Bạn Chưa Biết</p>

                            <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]" >Lãi Suất Vay Ngân Hàng Tháng 10/2023 Mới Nhất</p>

                            <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]">Sàn Môi Giới Bất Động Sản Chi Bạo Để Tuyển Quân</p>

                            <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]">Ngã Ba Nhơn Trạch Ở Đâu, Xung Quanh Có Gì [Cập Nhật 2023]</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="max-w-full" src="https://tpc.googlesyndication.com/simgad/12357706041318739107" alt="" />
                    <img className="max-w-full" src="https://tpc.googlesyndication.com/simgad/12357706041318739107" alt="" />
                </div>
            </div>
        </div>
    )
}

export default UIHome1