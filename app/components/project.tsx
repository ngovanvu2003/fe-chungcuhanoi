import React from "react";
import { BsViewList } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
import { LuBed } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";
import { PiPhoneCallLight } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

import { CiImageOn } from "react-icons/ci";
const Project = () => {
  return (
    <div className="container max-w-5xl mx-auto">
      <div className="flex">
        <div>
          <div className="">
            <a href="" className="text-gray-400 hover:text-black">
              Bán
            </a>
            <span className="mx-2">/</span>
            <a href="">Tất cả BĐS trên toàn quốc</a>
          </div>
          <div className="font-bold text-2xl">
            Mua bán nhà đất trên toàn quốc
          </div>
          <div className="flex mt-4 justify-between">
            <span className="">Hiện có 145.425 bất động sản</span>
            <div className="flex gap-3 ">
              <div className="flex items-center cursor-pointer  ml-8">
                <a
                  href=""
                  className="mr-2 rounded-md hover:bg-gray-400 border border-solid"
                >
                  <BsViewList />
                </a>
                <a
                  href=""
                  className=" rounded-md hover:bg-gray-400 border border-solid"
                >
                  <BsMap />
                </a>
              </div>
              <div className="">
                <div className="border border-solid rounded-md">
                  <select className="mt-1.5 w-full px-8 rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                    <option value="" className="hover:bg-slate-50">
                      Thông thường
                    </option>
                    <option value="" className="hover:bg-slate-50">
                      Tin xác thực xếp trước
                    </option>
                    <option value="" className="hover:bg-slate-50">
                      Tin mới nhất
                    </option>
                    <option value="" className="hover:bg-slate-50">
                      Giá thấp đến cao
                    </option>
                    <option value="" className="hover:bg-slate-50">
                      Giá cao đến thấp
                    </option>
                    <option value="" className="hover:bg-slate-50">
                      Giá trên m² thấp đến cao
                    </option>
                    <option value="" className="hover:bg-slate-50">
                      Giá trên m² cao đến thấp
                    </option>
                    <option value="" className="hover:bg-slate-50">
                      Diện tích bé đến lớn
                    </option>
                    <option value="" className="hover:bg-slate-50">
                      Diện tích lớn đến bé
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xl">
            <div className="grid grid-cols-2 mt-4 cursor-pointer hover:shadow-xl ">
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
                BÁN CĂN STUDIO, 2 VÀ 3 PHÒNG NGỦ ĐẦY ĐỦ NỘI THẤT GIÁ TỐT NHẤT
                TẠI VINHOMES TRẦN DUY HƯNG
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
                Bảng giá căn hộ update tháng 9/2023. - Căn studio (38m²) full
                nội thất giá 1,8 tỷ. - Căn 2PN 1WC (51m²) full nội thất giá 2.4
                tỷ. - Căn 2PN 1WC (61m²) full nội thất giá 2.6 tỷ. - Căn 2PN 2WC
                (72m²) full nội thất giá 4.3 tỷ - Căn 2PN 2WC (85m²) full nội
                thất giá 4.8 tỷ. - Căn 3PN (95m²) full nội thất giá từ 5.95 tỷ.
                - Căn 3PN (112m²) full nội thất giá từ 6.6 tỷ - Đặc biệt, căn
                rộng nhất dự án (122m²) full nội thất giá từ 7,8 tỷTham khảo
                thêm các c...
              </div>
            </div>
            <div className="grid grid-cols-2 border-2">
              <div className=" flex  ">
                <img
                  src="https://file4.batdongsan.com.vn/resize/200x200/2023/05/30/20230530095659-a050.jpg"
                  alt=""
                  className="w-[30px] h-auto rounded-full m-4"
                />
                <div className=" text-sm grid items-center">
                  <div className="pt-2 font-bold">Người Đăng</div>
                  <span className="pb-2 text-gray-400">Đăng hôm nay</span>
                </div>
              </div>
              <div className="">
                <div className="bg-teal-600 hover:bg-teal-500 flex items-center text-white m-4 p-2 rounded-lg">
                  <span className="mx-2">
                    <PiPhoneCallLight />
                  </span>
                  <span className="flex mx-2">043211234</span>
                  <span>· Sao chép</span>
                  <span className="ml-4">
                    <AiOutlineHeart />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xl mt-2">
            <div className="grid grid-cols-2 mt-4 cursor-pointer hover:shadow-xl ">
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
                BÁN CĂN STUDIO, 2 VÀ 3 PHÒNG NGỦ ĐẦY ĐỦ NỘI THẤT GIÁ TỐT NHẤT
                TẠI VINHOMES TRẦN DUY HƯNG
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
                Bảng giá căn hộ update tháng 9/2023. - Căn studio (38m²) full
                nội thất giá 1,8 tỷ. - Căn 2PN 1WC (51m²) full nội thất giá 2.4
                tỷ. - Căn 2PN 1WC (61m²) full nội thất giá 2.6 tỷ. - Căn 2PN 2WC
                (72m²) full nội thất giá 4.3 tỷ - Căn 2PN 2WC (85m²) full nội
                thất giá 4.8 tỷ. - Căn 3PN (95m²) full nội thất giá từ 5.95 tỷ.
                - Căn 3PN (112m²) full nội thất giá từ 6.6 tỷ - Đặc biệt, căn
                rộng nhất dự án (122m²) full nội thất giá từ 7,8 tỷTham khảo
                thêm các c...
              </div>
            </div>
            <div className="grid grid-cols-2 border-2">
              <div className=" flex  ">
                <img
                  src="https://file4.batdongsan.com.vn/resize/200x200/2023/05/30/20230530095659-a050.jpg"
                  alt=""
                  className="w-[30px] h-auto rounded-full m-4"
                />
                <div className=" text-sm grid items-center">
                  <div className="pt-2 font-bold">Người Đăng</div>
                  <span className="pb-2 text-gray-400">Đăng hôm nay</span>
                </div>
              </div>
              <div className="">
                <div className="bg-teal-600 hover:bg-teal-500 flex items-center text-white m-4 p-2 rounded-lg">
                  <span className="mx-2">
                    <PiPhoneCallLight />
                  </span>
                  <span className="flex mx-2">043211234</span>
                  <span>· Sao chép</span>
                  <span className="ml-4">
                    <AiOutlineHeart />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xl mt-2">
            <div className="grid grid-cols-2 mt-4 cursor-pointer hover:shadow-xl ">
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
                BÁN CĂN STUDIO, 2 VÀ 3 PHÒNG NGỦ ĐẦY ĐỦ NỘI THẤT GIÁ TỐT NHẤT
                TẠI VINHOMES TRẦN DUY HƯNG
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
                Bảng giá căn hộ update tháng 9/2023. - Căn studio (38m²) full
                nội thất giá 1,8 tỷ. - Căn 2PN 1WC (51m²) full nội thất giá 2.4
                tỷ. - Căn 2PN 1WC (61m²) full nội thất giá 2.6 tỷ. - Căn 2PN 2WC
                (72m²) full nội thất giá 4.3 tỷ - Căn 2PN 2WC (85m²) full nội
                thất giá 4.8 tỷ. - Căn 3PN (95m²) full nội thất giá từ 5.95 tỷ.
                - Căn 3PN (112m²) full nội thất giá từ 6.6 tỷ - Đặc biệt, căn
                rộng nhất dự án (122m²) full nội thất giá từ 7,8 tỷTham khảo
                thêm các c...
              </div>
            </div>
            <div className="grid grid-cols-2 border-2">
              <div className=" flex  ">
                <img
                  src="https://file4.batdongsan.com.vn/resize/200x200/2023/05/30/20230530095659-a050.jpg"
                  alt=""
                  className="w-[30px] h-auto rounded-full m-4"
                />
                <div className=" text-sm grid items-center">
                  <div className="pt-2 font-bold">Người Đăng</div>
                  <span className="pb-2 text-gray-400">Đăng hôm nay</span>
                </div>
              </div>
              <div className="">
                <div className="bg-teal-600 hover:bg-teal-500 flex items-center text-white m-4 p-2 rounded-lg">
                  <span className="mx-2">
                    <PiPhoneCallLight />
                  </span>
                  <span className="flex mx-2">043211234</span>
                  <span>· Sao chép</span>
                  <span className="ml-4">
                    <AiOutlineHeart />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xl mt-2">
            <div className="grid grid-cols-2 mt-4 cursor-pointer hover:shadow-xl ">
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
                BÁN CĂN STUDIO, 2 VÀ 3 PHÒNG NGỦ ĐẦY ĐỦ NỘI THẤT GIÁ TỐT NHẤT
                TẠI VINHOMES TRẦN DUY HƯNG
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
                Bảng giá căn hộ update tháng 9/2023. - Căn studio (38m²) full
                nội thất giá 1,8 tỷ. - Căn 2PN 1WC (51m²) full nội thất giá 2.4
                tỷ. - Căn 2PN 1WC (61m²) full nội thất giá 2.6 tỷ. - Căn 2PN 2WC
                (72m²) full nội thất giá 4.3 tỷ - Căn 2PN 2WC (85m²) full nội
                thất giá 4.8 tỷ. - Căn 3PN (95m²) full nội thất giá từ 5.95 tỷ.
                - Căn 3PN (112m²) full nội thất giá từ 6.6 tỷ - Đặc biệt, căn
                rộng nhất dự án (122m²) full nội thất giá từ 7,8 tỷTham khảo
                thêm các c...
              </div>
            </div>
            <div className="grid grid-cols-2 border-2">
              <div className=" flex  ">
                <img
                  src="https://file4.batdongsan.com.vn/resize/200x200/2023/05/30/20230530095659-a050.jpg"
                  alt=""
                  className="w-[30px] h-auto rounded-full m-4"
                />
                <div className=" text-sm grid items-center">
                  <div className="pt-2 font-bold">Người Đăng</div>
                  <span className="pb-2 text-gray-400">Đăng hôm nay</span>
                </div>
              </div>
              <div className="">
                <div className="bg-teal-600 hover:bg-teal-500 flex items-center text-white m-4 p-2 rounded-lg">
                  <span className="mx-2">
                    <PiPhoneCallLight />
                  </span>
                  <span className="flex mx-2">043211234</span>
                  <span>· Sao chép</span>
                  <span className="ml-4">
                    <AiOutlineHeart />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-solid px-8 mx-4 bg-[#F2F2F2] rounded-lg">
            <h2 className="font-bold text-sm mt-2">Mua bán nhà đất</h2>
            <div className="my-4 grid gap-3 ">
              <h3 className="hover:text-gray-400 cursor-pointer">Quận 1</h3>
              <h3 className="hover:text-gray-400 cursor-pointer">Quận 1</h3>
              <h3 className="hover:text-gray-400 cursor-pointer">Quận 1</h3>
              <h3 className="hover:text-gray-400 cursor-pointer">Quận 1</h3>
              <h3 className="hover:text-gray-400 cursor-pointer">Quận 1</h3>
              <h3 className="hover:text-gray-400 cursor-pointer">Quận 1</h3>
              <h3 className="hover:text-gray-400 cursor-pointer">Quận 1</h3>
              <h3 className="hover:text-gray-400 cursor-pointer">Quận 1</h3>
              <h3 className="hover:text-gray-400 cursor-pointer">Quận 1</h3>
            </div>
          </div>
          <div className="border border-solid px-8 mx-4 mt-4 bg-[#F2F2F2] rounded-lg">
            <h2 className="font-bold text-sm mt-2">Hỗ trợ tiện ích</h2>
            <div className="my-4 grid gap-3 ">
              <h3 className="hover:text-gray-400 cursor-pointer">
                Tư vấn phong thủy
              </h3>
              <h3 className="hover:text-gray-400 cursor-pointer">
                Dự tính chi phí làm nhà
              </h3>
              <h3 className="hover:text-gray-400 cursor-pointer">
                Tính lãi suất
              </h3>
              <h3 className="hover:text-gray-400 cursor-pointer">
                Quy trình xây nhà
              </h3>
              <h3 className="hover:text-gray-400 cursor-pointer">
                Xem tuổi xây nhà
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ol className="flex justify-center gap-1 text-xs font-medium mt-4 ">
          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border-black bg-black text-center leading-8 text-white"
            >
              1
            </a>
          </li>

          <li className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
            2
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
      <div>
        <div>
          <h2 className="font-bold text-xl mt-4">Tìm kiếm theo từ khóa</h2>
        </div>
        <div className="grid max-w-xl ">
          <h3 className=" mt-2 ">
            <a
              href=""
              className="border border-solid bg-slate-50 rounded-2xl text-sm  hover:text-gray-400"
            >
              Bán nhà ngõ Quỳnh
            </a>
          </h3>
          <h3 className=" mt-2">
            <a
              href=""
              className="border border-solid bg-slate-50 rounded-2xl text-sm  hover:text-gray-400"
            >
              Bán đất gần làng đại học Thủ Đức
            </a>
          </h3>
          <h3 className="mt-2 ">
            <a
              href=""
              className="border border-solid bg-slate-50 rounded-2xl  text-sm hover:text-gray-400"
            >
              Bán nhà HẺM HUỲNH VĂN BÁNH
            </a>
          </h3>
        </div>
      </div>
      <div className="">Xem thêm</div>
    </div>
  );
};

export default Project;
