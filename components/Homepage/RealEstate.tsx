"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Card } from '../ui/card';
import useSWR from 'swr';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';
import { IProject } from '@/interfaces/project';


const RealEstate = () => {
    const fetcher = (args: string) => fetch(args).then(res => res.json());
    const { data, error, isLoading } = useSWR<IProject[], Error, string>(`${process.env.NEXT_PUBLIC_BDS_API_PROJECT}`, fetcher)
    console.log(data);
    const listData=data?.response?.data;
    console.log(listData);
    
    
    const [visibleProduct, setVisibleProduct] = useState(8);
    const hanleLoadMore = () => {
        setVisibleProduct(prevCount => prevCount + 8)
    }
    const productToShow = listData?.slice(0, visibleProduct);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (isLoading) return <Skeleton />
    if (error) return <div>error</div>

    return (
        <Card className='border-none shadow-none rounded-none px-1 '>
            <div className='flex justify-between items-center my-3 md:my-8'>
                <h3 className='font-semibold text-2xl'>Bất động sản dành cho bạn</h3>
                <a href="" className='hover:text-gray-500 text-sm hidden md:block'>Tin nhà đất bán mới nhất </a>
            </div>
            <Link href={'/du-an'} className='md:grid md:grid-cols-4 gap-7 md:max-w-screen-2xl mx-auto'>
                {productToShow?.map((item: IProject) => {
                    return (
                        <div key={item?._id} className=' md:grid gap-2 max-md:p-2 md:flex-none my-1  shadow rounded-md relative'>
                            <p className='text-title mb-2  text-base font-semibold md:hidden '>{item?.project_name}</p>
                            <div className='grid grid-cols-[40%,60%] md:grid-cols-none' >
                                <Image
                                    alt='Anh hihi'
                                    src={item?.project_image[0]}
                                    className='md:w-full rounded md:rounded-t-md'
                                    width={200}
                                    height={200}
                                    objectFit='contain'
                                    loading="lazy"
                                    layout="responsive"
                                    quality={100}
                                />
                                <div className='px-4 pt-2 text-title max-md:absolute  top-6 left-36'>
                                    <div className='hidden md:block'>
                                        <p className='text-title  text-base font-semibold '>{item?.project_name}</p>
                                    </div>
                                    <p className=' text-red-500 font-semibold text-xl my-2'>{item?.project_acreage} m2</p>
                                    <p className='flex items-center gap-1 font-sans text-sm'>
                                        <i><CiLocationOn /></i>
                                        <span>{item?.project_district}</span>
                                    </p>
                                    <p className='text-xs text-gray-500 my-2 md:my-5'>  Đăng hôm nay</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Link>
            {visibleProduct < (listData as any).length && (
                <button className='mx-auto flex items-center gap-2 border px-5 py-1 mt-4 md:my-10 md:px-10 rounded-lg border-gray-500 border-solid md:py-3' onClick={hanleLoadMore}>
                    <span>
                        Mở rộng
                    </span>
                    <MdOutlineKeyboardArrowDown />
                </button>
            )}

        </Card>
    )
}

export default RealEstate