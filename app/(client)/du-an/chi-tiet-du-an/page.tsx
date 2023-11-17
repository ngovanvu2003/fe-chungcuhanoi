"use client";
import React from "react";
import { BsShare } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../../../../components/ui/card";

const Index = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="mx-2 max-w-5xl lg:mx-auto mt-20  text-sm">
      <div>
        <div className="my-2">
          <a href="" className="text-[#999] font-[14px] line-[20px]">
            Dự án
          </a>
          <span className="text-[#999]"> / </span>
          <a href="" className="text-[#999]">
            Đồng Nai
          </a>
          <span className="text-[#999]"> / </span>
          <a href="" className="text-[#999]">
            Nhơn Trạch
          </a>
          <span className="text-[#999]"> / </span>
          <a href="">Khu đô thị mới khu dân cư Phú Thịnh 1</a>
        </div>

        <div className="flex justify-between">
          <h1 className="font-medium text-xl mb-4">Khu dân cư Phú Thịnh 1</h1>
          <div className="hidden md:block"> <div className="flex  flex-row   items-center px-3 hover:bg-slate-50 border rounded-lg ">
            <div className="mr-2 ">
              <BsShare />
            </div>

            <button> Chia sẻ </button>
          </div></div>
         
        </div>
        <div className=" mb-5">
          Xã Phú Thạnh, Huyện Nhơn Trạch, Đồng Nai.
          <a href="" className="text-[#74150F] font-medium">
            Xem bản đồ
          </a>
        </div>
        <div className="grid sm md:grid-cols-2 gap-1 border rounded-lg">
          <div className="relative">
            <img
              className="w-[100%] rounded-l-lg"
              src="https://file4.batdongsan.com.vn/crop/609x360/2023/11/08/20231108082311-2e50_wm.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 bg-slate-50 py-1 px-2 border rounded-md m-2 text-[#999] font-serif">
              <label htmlFor="">Đang cập nhật</label>
            </div>
          </div>
          <div className="grid grid-cols-[70%,29%] gap-1">
            <div>
              <img
                className="w-[100%] h-[100%]"
                src="https://file4.batdongsan.com.vn/crop/609x360/2023/11/08/20231108082308-0117_wm.jpg"
                alt=""
              />
            </div>
            <div className="grid grid-rows-2  gap-1 ">
              <div>
                <img
                  className="w-[100%] h-[100%] rounded-tr-lg"
                  src="https://file4.batdongsan.com.vn/crop/609x360/2023/11/08/20231108082305-75b7_wm.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-[100%] h-[100%] rounded-br-lg"
                  src="https://file4.batdongsan.com.vn/crop/609x360/2023/11/08/20231108082308-0117_wm.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-3 md:block hidden">
          <ul className="flex gap-10">
            <li>
              <a href="">
                <div className="flex-col">
                  <h4 className="font-medium">Tổng quan</h4>
                  <span>Giới thiệu về dự án</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex-col">
                  <h4 className="font-medium">Mặt bằng dự án</h4>
                  <span>Tổng thể hạ tầng</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex-col">
                  <h4 className="font-medium">Vị trí</h4>
                  <span>Bản đồ dự án</span>
                </div>
              </a>
            </li>

            <li>
              <a href="">
                <div className="flex-col">
                  <h4 className="font-medium">Dự án liên quan</h4>
                  <span>Dự án xung quanh</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="grid sm:grid-flow-col-1 md:grid-cols-[60%,35%] gap-2 md:gap-[5%] lg:gap-[5%] mt-[40px]">
        <div>
          <h2 className="font-medium text-lg">
            Tổng quan Khu dân cư Phú Thịnh 1
          </h2>
          <div className="my-[13px] text-sm">
            <div className="flex gap-5">
              <label>
                <h4>Diện tích</h4>
              </label>
              <span>20 ha</span>
            </div>
          </div>

          <div className="text-sm">
            <p className="mb-[16px]">
              <strong className="font-medium">
                Dự án Khu dân cư Phú Thịnh 1{" "}
              </strong>
              tại Nhơn Trạch, Đồng Nai là dự án khởi đầu của tổng thể khu đô thị
              Đông Sài Gòn (942ha) do Tập đoàn Tín Nghĩa làm chủ đầu tư. Dự án
              có quy mô 20ha, gồm các sản phẩm đất nền nhà phố, biệt thự, dinh
              thự.
            </p>
          </div>

          <figure className="text-center text-[#999] ">
            <img
              src="https://file4.batdongsan.com.vn/2023/10/24/20231024170136-ae7c_wm.jpg"
              alt=""
              className="sm:w-[390px] sm:h-[200px] md:w-[100%] md:h-[400px]"
            />
            <figcaption className="mt-3 mb-5">
              <i>
                Phối cảnh tổng thể dự án Khu dân cư Phú Thịnh 1 tại Nhơn Trạch,
                Đồng Nai
              </i>
            </figcaption>
          </figure>

          <h3 className="font-medium text-lg">Vị trí</h3>

          <div className="flex  flex-col justify-between mt-5 text-sm">
            <ul className="">
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer justify-center   rounded-lg outline-none text-red-500 hover:bg-rgba(0,0,0,0) hover:text-red-400">
                    <span className="text-sm font-medium pr-1"> Xem thêm </span>
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
                  </summary>

                  <ul className=" mt-2 mx-auto space-y-1 marker:text-sky-400">
                    <p>
                      Dự án khu dân cư Phú Thịnh 1 nằm tại xã Phú Thạnh, huyện
                      Nhơn Trạch, tỉnh Đồng Nai. Dự án sở hữu vị trí đắc địa khi
                      nằm giữa đại đô thị Đông Sài Gòn với quy mô gần 1000ha,
                      với các mặt tiếp giáp như sau:
                    </p>

                    <ul
                      role="list"
                      className="marker:text-black list-disc pl-5 space-y-3 text-black"
                    >
                      <li>
                        Phía Bắc giáp công viên 4 mùa rộng 4,5ha, trục đường N4
                        và KĐT Swan Park giai đoạn
                      </li>
                      <li>
                        Phía Nam tgiáp Trục tài chính, TTTM trung tâm,đường 25B
                        và tuyến Metro nhẹ Thủ Thiêm – Long Thành
                      </li>
                      <li>
                        Phía Đông giáp với Trục chính D7 rộng 60m và công viên
                        hồ thiên nga 29ha
                      </li>
                      <li>
                        Phía Tây giáp với trục đường D6 rộng 40m và khu nhà phố
                        liền kề
                      </li>
                    </ul>

                    <figure className="text-center text-[#999] ">
                      <img
                        src="https://file4.batdongsan.com.vn/2023/10/24/20231024170136-ae7c_wm.jpg"
                        alt=""
                      />
                      <figcaption className="mt-3 mb-3">
                        <i>
                          Khu dân cư Phú Thịnh 1 là một phần của dự án KĐT Đông
                          Sài Gòn 942ha
                        </i>
                      </figcaption>
                    </figure>

                    <figure className="text-center text-[#999] ">
                      <img
                        src="https://file4.batdongsan.com.vn/2023/10/24/20231024170136-ae7c_wm.jpg"
                        alt=""
                      />
                      <figcaption className="mt-3 mb-5">
                        <i>
                          Vị trí dự án khu dân cư Phú Thịnh 1 trong tổng thể KĐT
                          Đông Sài Gòn
                        </i>
                      </figcaption>
                    </figure>

                    <p className="font-medium">
                      Giao thông đường bộ từ khu đô thị Đông Sài Gòn:
                    </p>

                    <ul
                      role="list"
                      className="marker:text-black list-disc pl-5 space-y-3 text-black"
                    >
                      <li>
                        6km đến Cao tốc TP.HCM – Long Thành – Dầu Giây ở phía
                        Bắc
                      </li>
                      <li>
                        12km đến Cao tốc Biên Hòa – Bà Rịa Vũng Tàu ở phía Đông
                      </li>
                      <li>
                        4km đến Cao tốc Bến Lức – TP.HCM – Nhơn Trạch ở phía Nam
                      </li>
                      <li>
                        Đường cầu Quận 9 rộng 120m TP.HCM – Nhơn Trạch, ranh
                        phía Tây của KĐT Đông Sài Gòn
                      </li>
                      <li>
                        Đường 25B rộng 80m nối đường cầu Quận 9 đi quốc lộ 51
                        ngang qua trung tâm dự án
                      </li>
                      <li>
                        Đường 25C rộng 100m nối đường cầu Quận 9 đi sân bay quốc
                        tế Long Thành, giáp phía Nam dự án
                      </li>
                      <li>
                        Tuyến tàu điện trên không đường 25B từ TP.HCM đi sân bay
                        Long Thành
                      </li>
                    </ul>

                    <p className="font-medium">Giao thông đường sông:</p>

                    <ul
                      role="list"
                      className="marker:text-black list-disc pl-5 space-y-3 text-black"
                    >
                      <li>9km đến Cảng Cát Lái – sông Đồng Nai ở phía Tây</li>
                      <li>
                        16km đến Cảng Phước An – sông Thị Vải ở phía Đông Nam
                      </li>
                    </ul>

                    <p className="font-medium">Giao thông đường hàng không:</p>

                    <ul
                      role="list"
                      className="marker:text-black list-disc pl-5 space-y-3 text-black"
                    >
                      <li>15km đến sân bay quốc tế Long Thành ở phía Đông</li>
                    </ul>

                    <h3 className="font-semibold">Tiện ích</h3>
                    <p className="">
                      Một số tiện ích được quy hoạch tại dự án khu dân cư Phú
                      Thịnh 1:
                    </p>

                    <ul
                      role="list"
                      className="marker:text-black list-disc pl-5 space-y-3 text-black"
                    >
                      <li>
                        Trường tiểu học được bố trí ở góc Đông Nam của Phú Thịnh
                        1
                      </li>
                      <li>
                        Khu thể dục thể thaogồm 1 sân bóng đá, 2 sân tennis và 2
                        sân bóng rổ được bố trí ở khoảng giữa trường tiểu học
                        với khu phố có kinh doanh
                      </li>
                      <li>
                        Khu công viên kênh nước cảnh quan được bố trí ở phía Bắc
                        của Phú Thịnh 1, với hai lối tiếp cận phía Đông và phía
                        Tây
                      </li>
                    </ul>

                    <h3 className="font-semibold">Mặt bằng - Thiết kế</h3>
                    <p className="">
                      Với quy mô 20ha, dự án khu dân cư Phú Thịnh 1 gồm các sản
                      phẩm sau:
                    </p>

                    <ul
                      role="list"
                      className="marker:text-black list-disc pl-5 space-y-3 text-black"
                    >
                      <li>
                        58 lô nhà phố liền kề diện tích 175m2 (7m x 25m). Các
                        căn góc có diện tích: 194m2 – 196m2 – 200m2.
                      </li>
                      <li>
                        76 lô biệt thự đơn lập 300m2 (15m x 20m). Các căn góc có
                        diện tích: 320m2 – 336m2 – 340m2 – 355m2 – 360m2.
                      </li>
                      <li>
                        9 lô dinh thự mặt công viên 600m2 (30m x 20m). Căn góc
                        diện tích: 660m2 (33m x 20m).
                      </li>
                      <img
                        src="https://file4.batdongsan.com.vn/2023/10/24/20231024170239-8b97_wm.jpg"
                        alt=""
                      />
                    </ul>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between  bg-white mb-6">
            <div className="">
              <ul className="mt-6 space-y-1">
                <li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 border ">
                      <span className="text-sm font-medium">
                        {" "}
                        Thông tin chi tiết{" "}
                      </span>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
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
                    </summary>
                    <div className="mt-2 space-y-1 px-4">
                      <div>
                        <div className="flex gap-5">
                          <div>
                            <h4>Diện tích</h4>
                          </div>
                          <span>20 ha</span>
                        </div>
                      </div>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="font-medium text-lg mb-4">Mặt bằng dự án</h2>
          <div className="border border-solid rounded-lg">
            <img
              src="https://file4.batdongsan.com.vn/2023/10/24/20231024170245-04c2_wm.jpg"
              alt=""
              className="w-[100%] h-[400px]"
            />
          </div>

          <h2 className="font-semibold mt-6">
            {" "}
            Vị trí dự án Khu dân cư Phú Thịnh 1
          </h2>
          <div className="mt-4 border border-solid rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.530475101017!2d105.59684152232977!3d21.091407092712373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134578f23c93a2b%3A0x8ca735f22ac7af97!2zUGjDuiBUaOG7i25oLCBOZ-G7jWMgVOG6o28sIFBow7pjIFRo4buNLCBIYW5vaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1699432334673!5m2!1sen!2s"
              allowFullScreen=""
              className=" rounded-t-lg w-[100%] h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center bg-gray-100 p-8  border-1 rounded ">
            <div className="text-black font-semibold text-center">
              Liên hệ tư vẫn miễn phí
            </div>
            <p className="my-3 text-center">
              {" "}
              Hãy để lại thông tin của bạn để nhận tư vấn và các cập nhật mới
              nhất của dự án này
            </p>
            <div className="flex flex-row items-center bg-[#009BA1]  border rounded py-2 px-10">
              <div className="text-white mr-2 md:block hidden ">
                <GoMail />
              </div>
              <button className="text-white">Liên hệ lại với tôi</button>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-6" />

      <div className="my-8">
        <h3 className="font-semibold text-lg mb-4">Dự án liên quan</h3>
        <Slider {...settings}>
          <Card className="border-none">
            <div className="border border-solid rounded-lg">
              <a href="">
                <div>
                  <img
                    src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                    className="rounded-t-lg"
                    alt=""
                  />
                </div>
                <div>
                  <div className="mt-2 mb-3 ml-3">
                    <div className="">
                      <label
                        htmlFor=""
                        className="text-[#999] bg-gray-100 border rounded px-2"
                      >
                        Đang cập nhật
                      </label>
                    </div>
                    <div className="font-semibold mt-1">DIC Wisteria City</div>
                    <div>
                      <div>
                        <div>
                          <span className="font-semibold my-1">332 ha</span>
                          <span>.</span>
                        </div>
                        <div>Nhơn Trạch, Đồng Nai</div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Card>
          <div className="border border-solid rounded-lg">
            <a href="">
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                  className="rounded-t-lg"
                  alt=""
                />
              </div>
              <div>
                <div className="mt-2 mb-3 ml-3">
                  <div className="">
                    <label
                      htmlFor=""
                      className="text-[#999] bg-gray-100 border rounded px-2"
                    >
                      Đang cập nhật
                    </label>
                  </div>
                  <div className="font-semibold mt-1">DIC Wisteria City</div>
                  <div>
                    <div>
                      <div>
                        <span className="font-semibold my-1">332 ha</span>
                        <span>.</span>
                      </div>
                      <div>Nhơn Trạch, Đồng Nai</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="border border-solid rounded-lg">
            <a href="">
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                  className="rounded-t-lg"
                  alt=""
                />
              </div>
              <div>
                <div className="mt-2 mb-3 ml-3">
                  <div className="">
                    <label
                      htmlFor=""
                      className="text-[#999] bg-gray-100 border rounded px-2"
                    >
                      Đang cập nhật
                    </label>
                  </div>
                  <div className="font-semibold mt-1">DIC Wisteria City</div>
                  <div>
                    <div>
                      <div>
                        <span className="font-semibold my-1">332 ha</span>
                        <span>.</span>
                      </div>
                      <div>Nhơn Trạch, Đồng Nai</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="border border-solid rounded-lg">
            <a href="">
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                  className="rounded-t-lg"
                  alt=""
                />
              </div>
              <div>
                <div className="mt-2 mb-3 ml-3">
                  <div className="">
                    <label
                      htmlFor=""
                      className="text-[#999] bg-gray-100 border rounded px-2"
                    >
                      Đang cập nhật
                    </label>
                  </div>
                  <div className="font-semibold mt-1">DIC Wisteria City</div>
                  <div>
                    <div>
                      <div>
                        <span className="font-semibold my-1">332 ha</span>
                        <span>.</span>
                      </div>
                      <div>Nhơn Trạch, Đồng Nai</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="border border-solid rounded-lg">
            <a href="">
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                  className="rounded-t-lg"
                  alt=""
                />
              </div>
              <div>
                <div className="mt-2 mb-3 ml-3">
                  <div className="">
                    <label
                      htmlFor=""
                      className="text-[#999] bg-gray-100 border rounded px-2"
                    >
                      Đang cập nhật
                    </label>
                  </div>
                  <div className="font-semibold mt-1">DIC Wisteria City</div>
                  <div>
                    <div>
                      <div>
                        <span className="font-semibold my-1">332 ha</span>
                        <span>.</span>
                      </div>
                      <div>Nhơn Trạch, Đồng Nai</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="border border-solid rounded-lg">
            <a href="">
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/21/20220921160527-c6e1_wm.jpg"
                  className="rounded-t-lg"
                  alt=""
                />
              </div>
              <div>
                <div className="mt-2 mb-3 ml-3">
                  <div className="">
                    <label
                      htmlFor=""
                      className="text-[#999] bg-gray-100 border rounded px-2"
                    >
                      Đang cập nhật
                    </label>
                  </div>
                  <div className="font-semibold mt-1">DIC Wisteria City</div>
                  <div>
                    <div>
                      <div>
                        <span className="font-semibold my-1">332 ha</span>
                        <span>.</span>
                      </div>
                      <div>Nhơn Trạch, Đồng Nai</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Index;
