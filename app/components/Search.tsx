import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BiSearch } from "react-icons/bi"
import { FiRefreshCcw } from "react-icons/fi"

const Search = () => {
    return (
        <div className="max-w-full ">
            <div>
                <img src="" alt="" />
            </div>
            <div className=" m-auto max-w-[70%] p-[30px]">
                <Tabs defaultValue="account" className="">
                    <div >
                        <TabsList className="" >
                            <TabsTrigger value="1">Nhà đất bán</TabsTrigger>
                            <TabsTrigger value="2">Nhà đất cho thuê</TabsTrigger>
                            <TabsTrigger value="3">Dự án</TabsTrigger>
                        </TabsList>
                    </div>
                    <div >
                        <form action=""><TabsContent value="1" className=" w-[100%] p-[20px] bg-[#5E5E5E] " >
                            <div className="rounded-lg   flex ">
                                <div>
                                    <select name="" id="" className="rounded-l-lg pl-[10px] h-[45px] outline-none border-2 border-r-[#EBEBEB]">
                                        <option value="">Loại nhà đất</option>
                                        <option value="">Tất cả dự án</option>
                                        <option value="">Căn hộ chung cư</option>
                                        <option value="">Cao ốc văn phòng</option>
                                        <option value="">Trung tâm thương mại</option>
                                        <option value="">Khu đô thị mới</option>
                                        <option value="">Khu phức hợp</option>
                                    </select>
                                </div>
                                <div className="h-[45px] rounded-r-lg flex w-full  bg-white " >
                                    <input className="outline-none w-[100%] h-full ml-[20px]" type="text" placeholder=" Hà Nội" />
                                    <div className=" bg-[#E03C31] rounded-md flex w-[20%] mr-[10px]  my-auto h-[30px] text-white"> <p className="my-auto ml-[10px] mr-[5px]"><BiSearch /></p> <p className="my-auto  ">Tìm Kiếm</p></div>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-[20px]">
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Hà Nội</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Mức Giá</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Diện Tích</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Lọc Thêm</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <div className="m-auto text-white">
                                    <FiRefreshCcw />
                                </div>
                            </div>
                        </TabsContent></form>
                        <form action=""><TabsContent value="2" className=" w-[100%] p-[20px] bg-[#5E5E5E] " >
                            <div className="rounded-lg   flex ">
                                <div>
                                    <select name="" id="" className="rounded-l-lg pl-[10px] h-[45px] outline-none  border-2 border-r-[#EBEBEB]">
                                        <option value="" className="text-[#303030]">Loại nhà đất</option>
                                        <option value="" className="text-[#303030]">Tất cả dự án</option>
                                        <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                        <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                        <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                        <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                        <option value="" className="text-[#303030]">Khu phức hợp</option>
                                    </select>
                                </div>
                                <div className="h-[45px] rounded-r-lg flex w-full  bg-white " >
                                    <input className="outline-none w-[100%] h-full ml-[20px]" type="text" placeholder=" Hà Nội" />
                                    <div className=" bg-[#E03C31] rounded-md flex w-[20%] mr-[10px]  my-auto h-[30px] text-white"> <p className="my-auto ml-[10px] mr-[5px]"><BiSearch /></p> <p className="my-auto  ">Tìm Kiếm</p></div>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-[20px]">
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Hà Nội</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Mức Giá</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Diện Tích</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[23%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Lọc Thêm</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <div className="m-auto text-white">
                                    <FiRefreshCcw />
                                </div>
                            </div>
                        </TabsContent></form>
                        <form action=""><TabsContent value="3" className=" w-[100%] p-[20px] bg-[#5E5E5E] " >
                            <div className="rounded-lg   flex ">
                                <div>
                                    <select name="" id="" className="rounded-l-lg pl-[10px] h-[45px] outline-none border-2 border-r-[#EBEBEB]">
                                        <option value="" className="text-[#303030]">Loại nhà đất</option>
                                        <option value="" className="text-[#303030]">Tất cả dự án</option>
                                        <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                        <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                        <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                        <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                        <option value="" className="text-[#303030]">Khu phức hợp</option>
                                    </select>
                                </div>
                                <div className="h-[45px] rounded-r-lg flex w-full  bg-white " >
                                    <input className="outline-none w-[100%] h-full ml-[20px]" type="text" placeholder=" Hà Nội" />
                                    <div className=" bg-[#E03C31] rounded-md flex w-[20%] mr-[10px]  my-auto h-[30px] text-white"> <p className="my-auto ml-[10px] mr-[5px]"><BiSearch /></p> <p className="my-auto  ">Tìm Kiếm</p></div>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-[20px]">
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[30%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Hà Nội</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[30%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Mức Giá</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit w-[30%] h-[30px] outline-none border-2 border-r-[#EBEBEB]">
                                    <option value="" className="text-[#303030]">Diện Tích</option>
                                    <option value="" className="text-[#303030]">Tất cả dự án</option>
                                    <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                                    <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                                    <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                                    <option value="" className="text-[#303030]">Khu đô thị mới</option>
                                    <option value="" className="text-[#303030]">Khu phức hợp</option>
                                </select>
                                <div className="m-auto text-white">
                                    <FiRefreshCcw />
                                </div>
                            </div>
                        </TabsContent></form>

                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default Search