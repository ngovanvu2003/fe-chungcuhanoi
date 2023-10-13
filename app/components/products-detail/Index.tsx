"use client"
import React from 'react'
import Product from './product/Product'
import Lienhe from './lienhe/Lienhe'

const Index = () => {
    return (
        <div className='mt-4 lg:px-[10%]'>
            <div className='w-full px-3 lg:w-9/12 lg:pl-5 lg:pr-5 lg:float-left'>
                <div id='1' className='w-full '>
                    <Product />
                </div>
            </div>
            <div className='hidden lg:block w-1/4 lg:float-right'>
                <div id='2'>
                    <Lienhe />
                </div>
            </div>
        </div>
    )
}

export default Index
