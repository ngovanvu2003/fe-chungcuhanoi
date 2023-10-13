"use client"
import { BiTimeFive } from "react-icons/bi"
import { AiOutlineArrowRight } from "react-icons/ai"


const News = () => {
    function openPage(pageName: string, elmnt: HTMLElement) {
        let i: number, tabcontent: HTMLCollectionOf<Element>;
        tabcontent = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<Element>;

        for (i = 0; i < tabcontent.length; i++) {
            (tabcontent[i] as HTMLElement).style.display = "none";
        }
        const pageElement = document.getElementById(pageName);

        if (pageElement) {
            pageElement.style.display = "block";
        }
    }
    (document.getElementById("defaultOpen") as HTMLElement | null)?.click();

    return (
        <div className="max-w-full  ">
            <div className="mt-40">
                <div className="w-[70%]">
                    <div >
                        <div className="flex justify-between">
                            <div className="flex gap-5 text-2xl font-semibold ">
                                <button className="tablink hover:underline" id="defaultOpen" onClick={() => openPage('tinnoibat', this as any)}>Tin nổi bật</button>
                                <button className="tablink hover:underline" onClick={() => openPage('tintuc', this as any)} >Tin tức</button>
                                <button className="tablink hover:underline" onClick={() => openPage('bdsMyDinh', this as any)} >BĐS TPHCM</button>
                                <button className="tablink hover:underline" onClick={() => openPage('bdsHaNoi', this as any)}>BĐS Hà Nội</button>
                            </div>
                            <div className="flex justify-items-end text-[#E23C31]">
                                <p className="mt-[10px]">Xem Thêm</p>
                                <p className="mt-[15px]"><AiOutlineArrowRight /></p>
                            </div>
                        </div>
                        <div>
                            <div id="tinnoibat" className="tabcontent">
                                <div className="flex mt-[20px]" >
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
                            </div>
                            <div id="tintuc" className="tabcontent">
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
                            </div>
                            <div id="bdsMyDinh" className="tabcontent">
                                <div className="flex mt-[20px]">
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
                            </div>
                            <div id="bdsHaNoi" className="tabcontent">
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
                            </div>
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

export default News