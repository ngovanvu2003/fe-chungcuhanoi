"use client"
import React from 'react'
import Search from './Search'
import RealEstate from './RealEstate'
import RealEstateByLocation from './RealEstateByLocation'
import RealEstateNews from './RealEstateNews'
import Introduce from './Introduce'
import OutstandingRealEstate from './OutstandingRealEstate'

const HomePage = () => {
    return (
        <div className='md:mx-10'>
            <Search />
            <RealEstate />
            <OutstandingRealEstate />
            <RealEstateByLocation />
            <RealEstateNews />
            <Introduce />
        </div>
    )
}

export default HomePage