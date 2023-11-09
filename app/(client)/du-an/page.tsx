import { BsArrowRight } from "react-icons/bs";
import SearchPrj from "./components/searchprj";
import Proj from "./components/project";
const Project = () => {
  return (
    <div className="container max-w-7xl mx-auto m-20">
      <SearchPrj />
      <div className="grid md:grid-cols-[60%,40%] gap-6 ">
        <div>
          <div className="flex flex-wrap  ">
            <a href="#" className="text-gray-400">
              Dự án
            </a>
            <span className="mx-1">/</span>
            <a href="#" className="hover:text-gray-400">
              Dự án BĐS Toàn Quốc
            </a>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Dự án toàn quốc
            </h1>
          </div>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-between">
            <div className="mb-2 md:mb-0">Hiện đang có 5.470 dự án</div>
            <div className="border border-solid rounded-md w-full md:w-auto">
              <select className="px-2 md:px-4 py-1 md:py-2 rounded-lg border-gray-300 text-gray-700 text-sm hidden md:block">
                <option value="" className="text-amber-800">
                  Mới nhất
                </option>
                <option value="">Mới cập nhật</option>
                <option value="">Giá cao nhất</option>
                <option value="">Giá thấp nhất</option>
              </select>
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row border shadow-lg p-2 mt-4 md:mt-8">
            <div className="w-full md:w-2/3 h-auto md:mr-4 rounded-md">
              <img
                src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
                alt=""
                className="w-full h-auto"
              />
              <div className="flex gap-1 mt-1 w-auto h-28">
                <img
                  src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
                  alt=""
                  className="w-1/2"
                />
                <img
                  src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
                  alt=""
                  className="w-1/2"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center px-2 md:ml-5 ">
              <div className="bg-green-100 text-green-700 rounded-md w-32 p-1 font-bold text-sm text-center">
                Đang mở bán
              </div>
              <h3 className="font-bold text-lg md:text-2xl mt-2 md:mt-4">
                Việt Trì Spring City
              </h3>
              <div className="mt-1 md:mt-2">
                <span>3,32ha</span>
              </div>
              <div className="mt-1 md:mt-2 ">
                Đường Trường Chinh, Phường Vân Phú, Thành phố Việt Trì, Phú Thọ
              </div>
              <div className="mt-2 md:mt-4">
                <p className="text-detail">
                  Dự án Việt Trì Spring City là khu nhà ở thấp tầng tại trung
                  tâm TP. Việt Trì, tỉnh Phú Thọ. Dự án có quy mô hơn 3,3ha, gồm
                  125 lô shophouse, nhà phố liền kề và biệt thự theo phong cách
                  Tân cổ điển.
                </p>
              </div>
              <div className="font-bold mt-2 md:mt-4 ">
                Công ty TNHH Thương mại và Dịch vụ Lân Huế
              </div>
            </div>
          </div> */}
          <Proj />
          <Proj />
          <Proj />
        </div>

        <div className="hidden md:block">
          <div className="flex justify-between gap-8">
            <h2>Đánh giá dự án</h2>
            <a href="" className="flex gap-2 text-red-600  items-center">
              Xem tất cả <BsArrowRight />
            </a>
          </div>
          <div>
            <img
              src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
              alt=""
              className="w-full mt-2"
            />
          </div>
          <div className="mt-6">
            <div className="flex justify-between gap-8">
              <h2>Tin tức</h2>
              <a href="" className="flex gap-2 text-red-600 items-center">
                Xem tất cả <BsArrowRight />
              </a>
            </div>
            <div>
              <div className="flex gap-4">
                <img
                  src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
                  alt=""
                  className="w-1/3 mt-2"
                />
                <div className="grid items-end">
                  <div className="font-bold">
                    Loạt Thách Thức Khiến Nhà Ở Xã Hội Khó Cán Mốc 1 Triệu Căn
                    Năm 2030
                  </div>
                  <span className="text-gray-400">Hôm nay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
