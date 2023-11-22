import Link from "next/link";

const Proj = (dataProject: any) => {
  const listInfoProject = dataProject?.dataProject;
  return (
    <div className="grid grid-cols-1 md:grid-cols-[30%,70%] gap-1 md:flex-row border shadow-lg lg:p-2 mt-4 md:mt-8">
      <div className="w-full h-auto md:mr-4 rounded-md">
        <img
          src={listInfoProject?.project_image[0]?.image_url}
          alt=""
          className="w-full h-full md:h-auto  md:w-60"
        />
        <div className="flex  gap-1 mt-1 md:w-40 h-28">
          <img
            src={listInfoProject?.project_image[1]?.image_url}
            alt=""
            className="w-[105px] h-full hidden md:block"
          />
          <img
            src={listInfoProject?.project_image[2]?.image_url}
            alt=""
            className="w-[105px] hidden md:block"
          />
        </div>
      </div>
      <div className="flex flex-col  justify-center px-2 md:ml-5 ">
        <div className="bg-green-100 text-green-700 rounded-md w-32 p-1 font-bold text-sm text-center">
          Đang mở bán
        </div>
        <Link href={`/du-an/chi-tiet-du-an/${listInfoProject?._id}`} className="font-bold text-lg md:text-2xl mt-2 md:mt-4">
          {listInfoProject?.project_name}
        </Link>
        <div className="mt-1 md:mt-2">
          <span className="text-red-500">{listInfoProject?.project_acreage} m²</span>
        </div>
        <div className="mt-1 md:mt-2 ">
          {listInfoProject?.project_district} - {listInfoProject?.project_location
          }
        </div>
        <div className="mt-2 md:mt-4">
          <p className="text-detail text-gray-500">
            {listInfoProject?.project_content}
          </p>
        </div>

      </div>
    </div>
  );
};
export default Proj;
