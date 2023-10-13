"use client"
import { BiTimeFive } from "react-icons/bi"
import {AiOutlineArrowRight} from "react-icons/ai"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const UIHome1 = () => {
    return (
        <div className="max-w-full  ">
            <div className="max-w-[80%] flex m-auto">
                <div className="max-w-[70%] mr-[30px]">
                    <Tabs defaultValue="account">
                        <div className="flex justify-between">
                            <div>
                            <TabsList>
                                <TabsTrigger value="1">Tin nổi bật</TabsTrigger>
                                <TabsTrigger value="2">Tin tức</TabsTrigger>
                                <TabsTrigger value="3">BĐS TPHCM</TabsTrigger>
                                <TabsTrigger value="4">BĐS Hà Nội</TabsTrigger>
                            </TabsList>
                            </div>
                            <div className="flex justify-items-end text-[#E23C31]">
                                <p className="mt-[10px]">Xem Thêm</p>
                                <p className="mt-[15px]"><AiOutlineArrowRight/></p>
                            </div>
                        </div>
                        <div>
                            <TabsContent value="1"><div className="flex mt-[20px]">
                            <div className="">
                                <img className="max-w-[457px] mr-[30px]" src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/can-ho-chung-cu.jpg" alt="" />
                                <p className="pt-[20px] text-[20px] font-semibold">Sàn Môi Giới Bất Động Sản Chi Bạo Để Tuyển Quân</p>
                                <div className="flex"><p className="mt-[3px]"><BiTimeFive /></p><p className="ml-[5px]">2 ngày trước</p></div>

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
                            </TabsContent>
                            <TabsContent value="2">
                                <div className="flex mt-[20px]">
                                    <div className="">
                                        <img className="max-w-[457px] mr-[30px]" src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/giao-dien.webp" alt="" />
                                        <p className="pt-[20px] text-[20px] font-semibold">Next Home - Công Ty Cung Cấp Giải Pháp & Thiết Bị Nhà Thông Minh KNX</p>
                                        <div className="flex"><p className="mt-[3px]"><BiTimeFive /></p><p className="ml-[5px]">4 ngày trước</p></div>

                                    </div>

                                    <div>
                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px] border-b border-b-[#EEEEEE]">Thị Xã Phú Mỹ Rà Soát, Thu Hồi Nhiều Dự Án Chậm Triển Khai</p>

                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE] ">Thị Trường BĐS Năm 2023, Thời Điểm Khó Khăn Nhất Đã Qua?</p>

                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]">Nhà Riêng Vùng Ven Hà Nội Khó "Giữ Chân" Người Ở Vì Xa Trung Tâm</p>

                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]" >4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</p>

                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]">Cách Chụp Ảnh, Quay Video Nhà Đẹp - Bí Quyết Cho Thuê Nhà Nhanh Có Thể Bạn Chưa Biết</p>

                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]">Next Home - Công Ty Cung Cấp Giải Pháp & Thiết Bị Nhà Thông Minh KNX Lớn Nhất Việt Nam</p>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="3"><div className="flex mt-[20px]">
                                <div className="">
                                    <img className="max-w-[457px] mr-[30px]" src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/nha-nguyen-can-2.jpg" alt="" />
                                    <p className="pt-[20px] text-[20px] font-semibold">Sàn Môi Giới Bất Động Sản Chi Bạo Để Tuyển Quân</p>
                                    <div className="flex"><p className="mt-[3px]"><BiTimeFive /></p><p className="ml-[5px]">2 ngày trước</p></div>

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
                            </TabsContent>
                            <TabsContent value="4">
                                <div className="flex mt-[20px]">
                                    <div className="">
                                        <img className="max-w-[457px] mr-[30px]" src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/10/giao-dien.webp" alt="" />
                                        <p className="pt-[20px] text-[20px] font-semibold">Next Home - Công Ty Cung Cấp Giải Pháp & Thiết Bị Nhà Thông Minh KNX</p>
                                        <div className="flex"><p className="mt-[3px]"><BiTimeFive /></p><p className="ml-[5px]">4 ngày trước</p></div>

                                    </div>

                                    <div>
                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px] border-b border-b-[#EEEEEE]">Thị Xã Phú Mỹ Rà Soát, Thu Hồi Nhiều Dự Án Chậm Triển Khai</p>

                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE] ">Thị Trường BĐS Năm 2023, Thời Điểm Khó Khăn Nhất Đã Qua?</p>

                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]">Nhà Riêng Vùng Ven Hà Nội Khó Giữ Chân Người Ở Vì Xa Trung Tâm</p>

                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]" >4 Bước Đăng Tin Cho Thuê Nhà Hiệu Quả Trên Batdongsan.com.vn</p>

                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]">Cách Chụp Ảnh, Quay Video Nhà Đẹp - Bí Quyết Cho Thuê Nhà Nhanh Có Thể Bạn Chưa Biết</p>

                                        <p className=" text-[#2C2C2C] my-[10px] pb-[10px]  border-b border-b-[#EEEEEE]">Next Home - Công Ty Cung Cấp Giải Pháp & Thiết Bị Nhà Thông Minh KNX Lớn Nhất Việt Nam</p>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>

                    </Tabs>
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