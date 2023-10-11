import React from "react";
import { BsViewList } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
import { LuBed } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";
import { CiImageOn } from "react-icons/ci";
const Project = () => {
  return (
    <div className="container max-w-5xl mx-auto">
      <div className="">
        <a href="" className="text-gray-400 hover:text-black">
          Bán
        </a>
        <span className="mx-2">/</span>
        <a href="">Tất cả BĐS trên toàn quốc</a>
      </div>
      <div className="font-bold text-2xl">Mua bán nhà đất trên toàn quốc</div>
      <div className="grid grid-cols-3 mt-4">
        <span className="">Hiện có 145.425 bất động sản</span>
        <div className="flex cursor-pointer">
          <a href="" className="mr-2">
            <BsViewList />
          </a>
          <a href="">
            <BsMap />
          </a>
          <div></div>
        </div>
      </div>
      <div className=" ">
        <div className="grid grid-cols-2 mt-4 cursor-pointer">
          <img
            src="https://file4.batdongsan.com.vn/crop/562x284/2023/09/28/20230928101136-0965_wm.jpg"
            alt=""
            className="w-full h-full"
          />
          <div className="w-auto scroll-px-0.5 ml-1">
            <div>
              <img
                src="https://file4.batdongsan.com.vn/crop/283x141/2023/09/28/20230928101136-ddd4_wm.jpg"
                alt=""
                className=""
              />
            </div>
            <div className="flex pt-0.5">
              <img
                src="https://file4.batdongsan.com.vn/crop/140x140/2023/08/02/20230802142309-7dec_wm.jpg"
                alt=""
                className=""
              />
              <img
                src="https://file4.batdongsan.com.vn/crop/140x140/2023/09/28/20230928101136-14c8_wm.jpg"
                alt=""
                className="pl-1"
              />
              {/* <div className="flex relative">
                23 <CiImageOn />
              </div> */}
            </div>
          </div>
        </div>
        <div className="mx-auto border-1 p-4 shadow-inner ">
          <span className="font-bold text-xl ">
            BÁN CĂN STUDIO, 2 VÀ 3 PHÒNG NGỦ ĐẦY ĐỦ NỘI THẤT GIÁ TỐT NHẤT TẠI
            VINHOMES TRẦN DUY HƯNG
          </span>
          <div className="flex flex-cols-6 gap-6">
            <span className="text-red-500 font-bold">4,3 tỷ</span>
            <span className="text-red-500 font-bold">·76 m²</span>
            <span>·56,58 tr/m²</span>
            <span className="flex ">
              ·2
              <span className="mt-1 mx-2">
                <LuBed />
              </span>
            </span>
            <span className="flex ">
              ·2
              <span className="mt-1 mx-2">
                <LiaBathSolid />
              </span>
            </span>
            <span>Cầu Giấy, Hà Nội</span>
          </div>
          <div className="text-detail">
            Bảng giá căn hộ update tháng 9/2023. - Căn studio (38m²) full nội
            thất giá 1,8 tỷ. - Căn 2PN 1WC (51m²) full nội thất giá 2.4 tỷ. -
            Căn 2PN 1WC (61m²) full nội thất giá 2.6 tỷ. - Căn 2PN 2WC (72m²)
            full nội thất giá 4.3 tỷ - Căn 2PN 2WC (85m²) full nội thất giá 4.8
            tỷ. - Căn 3PN (95m²) full nội thất giá từ 5.95 tỷ. - Căn 3PN (112m²)
            full nội thất giá từ 6.6 tỷ - Đặc biệt, căn rộng nhất dự án (122m²)
            full nội thất giá từ 7,8 tỷTham khảo thêm các c...
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Project;
