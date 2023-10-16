import React from "react";
import { PiList } from "react-icons/pi";
import { BsMap } from "react-icons/bs";
import { LuBed } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";
import { PiPhoneCallLight } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

const Project = () => {
  return (
    <div className="container max-w-5xl mx-auto ">
      <div className="md:flex flex-col md:flex-row">
        <div>
          <div className="mb-4 md:mb-0">
            <a href="" className="text-gray-400 hover:text-black">
              Bán
            </a>
            <span className="mx-2">/</span>
            <a href="">Tất cả BĐS trên toàn quốc</a>
          </div>
          <div className="font-bold text-2xl">
            Mua bán nhà đất trên toàn quốc
          </div>
          <div className="flex flex-col md:flex-row mt-4 items-center">
            <span className="mb-2 md:mb-0">Hiện có 145.425 bất động sản</span>
            <div className="flex gap-3 ">
              <div className="flex items-center cursor-pointer">
                <div className="flex border-2 p-1 border-solid  ">
                  <a href="" className="bg-gray-400 border-r-2">
                    <PiList />
                  </a>
                  <a href="" className=" rounded-md hover:bg-gray-400 ">
                    <BsMap />
                  </a>
                </div>
              </div>
              <div className="md:ml-4">
                <div className="border border-solid rounded-md">
                  <select className="px-2 md:px-4 py-1 md:py-2 rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                    <option value="">Thông thường</option>
                    <option value="">Tin xác thực xếp trước</option>
                    <option value="">Tin mới nhất</option>
                    <option value="">Giá thấp đến cao</option>
                    <option value="">Giá cao đến thấp</option>
                    <option value="">Giá trên m² thấp đến cao</option>
                    <option value="">Giá trên m² cao đến thấp</option>
                    <option value="">Diện tích bé đến lớn</option>
                    <option value="">Diện tích lớn đến bé</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 border-2 ">
              <img
                src="https://file4.batdongsan.com.vn/crop/562x284/2023/09/28/20230928101136-0965_wm.jpg"
                alt=""
                className="w-full h-auto sm:h-full"
              />
              <div className="w-auto scroll-px-0.5 ml-1">
                <div>
                  <img
                    src="https://file4.batdongsan.com.vn/crop/283x141/2023/09/28/20230928101136-ddd4_wm.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="flex pt-0.5">
                  <img
                    src="https://file4.batdongsan.com.vn/crop/140x140/2023/08/02/20230802142309-7dec_wm.jpg"
                    alt=""
                    className="w-full"
                  />
                  <img
                    src="https://file4.batdongsan.com.vn/crop/140x140/2023/09/28/20230928101136-14c8_wm.jpg"
                    alt=""
                    className="pl-1"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto border-1 p-4 shadow-inner">
              <span className="font-bold text-xl">
                BÁN CĂN STUDIO, 2 VÀ 3 PHÒNG NGỦ ĐẦY ĐỦ NỘI THẤT GIÁ TỐT NHẤT
                TẠI VINHOMES TRẦN DUY HƯNG
              </span>
              <div className="flex grid-cols-6 gap-6">
                <span className="text-red-500 font-bold">4,3 tỷ</span>
                <span className="text-red-500 font-bold">· 76 m²</span>
                <span>· 56,58 tr/m²</span>
                <span className="flex">
                  · 2
                  <span className="mt-1 mx-2">
                    <LuBed />
                  </span>
                </span>
                <span className="flex">
                  · 2
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
                rộng nhất dự án (122m²) full nội thất giá từ 7.8 tỷ Tham khảo
                thêm các c...
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 border-2">
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
          <div className="lg:max-w-xl mt-2">
            <div className="grid grid-cols-2 mt-4 cursor-pointer hover:shadow-xl ">
              <img
                src="https://file4.batdongsan.com.vn/crop/562x284/2023/09/28/20230928101136-0965_wm.jpg"
                alt=""
                className="w-full h-auto sm:h-full"
              />
              <div className="w-auto scroll-px-0.5 ml-1">
                <div>
                  <img
                    src="https://file4.batdongsan.com.vn/crop/283x141/2023/09/28/20230928101136-ddd4_wm.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="flex pt-0.5">
                  <img
                    src="https://file4.batdongsan.com.vn/crop/140x140/2023/08/02/20230802142309-7dec_wm.jpg"
                    alt=""
                    className="w-full"
                  />
                  <img
                    src="https://file4.batdongsan.com.vn/crop/140x140/2023/09/28/20230928101136-14c8_wm.jpg"
                    alt=""
                    className="pl-1 w-full"
                  />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 border-2">
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
          <div className="lg:max-w-xl mt-2">
            <div className="grid grid-cols-2 mt-4 cursor-pointer hover:shadow-xl ">
              <img
                src="https://file4.batdongsan.com.vn/crop/562x284/2023/09/28/20230928101136-0965_wm.jpg"
                alt=""
                className="w-full h-auto sm:h-full"
              />
              <div className="w-auto scroll-px-0.5 ml-1">
                <div>
                  <img
                    src="https://file4.batdongsan.com.vn/crop/283x141/2023/09/28/20230928101136-ddd4_wm.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="flex pt-0.5">
                  <img
                    src="https://file4.batdongsan.com.vn/crop/140x140/2023/08/02/20230802142309-7dec_wm.jpg"
                    alt=""
                    className="w-full"
                  />
                  <img
                    src="https://file4.batdongsan.com.vn/crop/140x140/2023/09/28/20230928101136-14c8_wm.jpg"
                    alt=""
                    className="pl-1 w-full"
                  />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 border-2">
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
          <div className="lg:max-w-xl mt-2">
            <div className="grid grid-cols-2 mt-4 cursor-pointer hover:shadow-xl ">
              <img
                src="https://file4.batdongsan.com.vn/crop/562x284/2023/09/28/20230928101136-0965_wm.jpg"
                alt=""
                className="w-full h-auto sm:h-full"
              />
              <div className="w-auto scroll-px-0.5 ml-1">
                <div>
                  <img
                    src="https://file4.batdongsan.com.vn/crop/283x141/2023/09/28/20230928101136-ddd4_wm.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="flex pt-0.5">
                  <img
                    src="https://file4.batdongsan.com.vn/crop/140x140/2023/08/02/20230802142309-7dec_wm.jpg"
                    alt=""
                    className="w-full"
                  />
                  <img
                    src="https://file4.batdongsan.com.vn/crop/140x140/2023/09/28/20230928101136-14c8_wm.jpg"
                    alt=""
                    className="pl-1 w-full"
                  />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 border-2">
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
        <div className="mr-1">
          <div className="hidden lg:block border border-solid md:px-8  mx-4 bg-[#F2F2F2] rounded-lg">
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
          <div className="hidden lg:block  border border-solid px-8 mx-4 mt-4 bg-[#F2F2F2] rounded-lg">
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
        <div className="flex flex-row mt-4 ">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h3 className=" mt-2 ">
              <a
                href=""
                className="border border-solid p-1 bg-slate-50 rounded-2xl text-sm hover:text-gray-400"
              >
                Bán nhà ngõ Quỳnh
              </a>
            </h3>
            <h3 className=" mt-2">
              <a
                href=""
                className="border border-solid p-1 bg-slate-50 rounded-2xl text-sm  hover:text-gray-400"
              >
                Bán đất gần làng đại học Thủ Đức
              </a>
            </h3>
            <h3 className="mt-2 ">
              <a
                href=""
                className="border border-solid p-1 bg-slate-50 rounded-2xl  text-sm hover:text-gray-400"
              >
                Bán nhà HẺM HUỲNH VĂN BÁNH
              </a>
            </h3>
          </div>
          <div className="ml-4 w-full md:w-1/2 lg:w-1/3">
            <h3 className=" mt-2 ">
              <a
                href=""
                className="border border-solid p-1 bg-slate-50 rounded-2xl text-sm  hover:text-gray-400"
              >
                Bán nhà ngõ Quỳnh
              </a>
            </h3>
            <h3 className=" mt-2">
              <a
                href=""
                className="border border-solid p-1 bg-slate-50 rounded-2xl text-sm  hover:text-gray-400"
              >
                Bán đất gần làng đại học Thủ Đức
              </a>
            </h3>
            <h3 className="mt-2 ">
              <a
                href=""
                className="border border-solid p-1 bg-slate-50 rounded-2xl  text-sm hover:text-gray-400"
              >
                Bán nhà HẺM HUỲNH VĂN BÁNH
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-9 max-w-xl">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
          Mua Bán Nhà Đất Củ Chi Giá Rẻ Tháng 10/2023
        </h2>
        <p className="text-sm sm:text-base">
          Thị trường mua{" "}
          <strong className="cursor-pointer">bán nhà Củ Chi</strong> thu hút
          người có nhu cầu ở thực và cả nhà đầu tư vì mức giá cạnh tranh khi mà
          quỹ đất cũng như giá cả nhà đất tại trung tâm ngày càng đắt đỏ.
        </p>
      </div>
      <div className="mt-4 text-center">
        <img
          src="https://img.iproperty.com.my/angel-legacy-bds/750x1000-fit/2022/04/22/PHJN6Zw0/20220422113523-d4ca.jpg"
          alt=""
          className="max-w-xl"
        />
        <div className=" max-w-xl flex justify-center bg-white">
          <div className="">
            <ul className="space-y-1">
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center  rounded-lg outline-none text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="shrink-0 transition duration-300 group-open:-rotate-90">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-medium"> Xem thêm </span>
                  </summary>

                  <ul className="grid grid-cols-1  mt-2 mx-auto space-y-1 gap-4">
                    <li>
                      <div className="grid">
                        <h2 className="font-bold">Tổng quan huyện Củ Chi</h2>
                        <p>
                          Nếu như cách đây khoảng 10 năm, Củ Chi vẫn còn là một
                          khu vực hẻo lánh, dân cư thưa thớt và kinh tế kém phát
                          triển. Tuy nhiên trong vài năm trở lại đây, Củ Chi đã
                          “thay da đổi thịt”, có nhiều khởi sắc, thu hút được sự
                          quan tâm của nhiều nhà đầu tư. Hiện nay tại Củ Chi tập
                          trung rất nhiều khu công nghiệp, có không ít dân cư,
                          người lao động tập trung về đây sinh sống và làm việc.
                          Diện tích đất nông nghiệp ở Củ Chi đã giảm xuống và
                          thay vào đó là diện tích đất dành cho khu công nghiệp.
                        </p>
                      </div>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
