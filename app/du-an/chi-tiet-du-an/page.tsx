"use client"
import React from 'react'
import Product from '../../../components/project-detail/Product'
import Lienhe from '../../../components/lienhe/Lienhe'

const Index = () => {
    return (

        <div className=" pt-[100px] grid grid-cols-1 lg:grid-cols-4 lg:gap-[15px] lg:px-[10%] lg:pt-[50px] md:pt-[50px] sm:pt-[200px]">
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
