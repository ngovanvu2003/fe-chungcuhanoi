"use client"

import Lienhe from "@/components/lienhe/Lienhe"
import Product from "@/components/project-detail/Product"


const Index = () => {
    return (

        <div className=" mt-20 grid grid-cols-1 px-1 lg:grid-cols-4 lg:gap-[15px] lg:px-[10%] lg:pt-[50px] md:pt-[50px] ">
            <div className="lg:col-span-3">
                <div id='1' className='w-full '>
                    <Product />
                </div>
            </div>
            <div className=' w-full'>
                <div id='2'>
                    <Lienhe />
                </div>
            </div>
        </div>
    )
}

export default Index
