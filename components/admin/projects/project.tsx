const Proj = () => {
  return (
    <div className="flex flex-col md:flex-row border shadow-lg p-2 mt-4 md:mt-8">
      <div className="w-full md:w-2/3 h-auto md:mr-4 rounded-md">
        <img
          src="https://file4.batdongsan.com.vn/crop/240x180/2023/11/08/20231108083903-2324_wm.jpg"
          alt=""
          className="w-full h-auto md:h-44 md:w-60"
        />
        <div className="flex gap-1 mt-1 md:w-40 h-28">
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
            Dự án Việt Trì Spring City là khu nhà ở thấp tầng tại trung tâm TP.
            Việt Trì, tỉnh Phú Thọ. Dự án có quy mô hơn 3,3ha, gồm 125 lô
            shophouse, nhà phố liền kề và biệt thự theo phong cách Tân cổ điển.
          </p>
        </div>
        <div className="font-bold mt-2 md:mt-4 ">
          Công ty TNHH Thương mại và Dịch vụ Lân Huế
        </div>
      </div>
    </div>
  );
};
export default Proj;
