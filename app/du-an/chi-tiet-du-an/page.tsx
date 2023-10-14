"use client"
import React from 'react'
import Product from '../../../components/project-detail/Product'
import Lienhe from '../../../components/lienhe/Lienhe'

const Index = () => {
    return (
        <div className='mt-10 px-10 grid grid-cols-[80%,20%]'>
            <div className='w-full px-3  lg:pl-5 lg:pr-5 '>
                <div id='1' className='w-full '>
                    <Product />
                </div>
            </div>
            <div className='hidden lg:block w-full'>
                <div id='2'>
                    <Lienhe />
                </div>
            </div>

        </div>
    )
}

export default Index
