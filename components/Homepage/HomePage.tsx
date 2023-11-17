"use client"
import React from 'react'
import RealEstate from './RealEstate'
import RealEstateByLocation from './RealEstateByLocation'
import RealEstateNews from './RealEstateNews'
import Introduce from './Introduce'
import OutstandingRealEstate from './OutstandingRealEstate'
import Search from './Search'
import News from './News'
import { DialogDemo } from '../modal/ModalSearch'

const HomePage = React.memo(() => {
    return (
        <div className='md:mx-10'>
            <Search />
            <News />
            <RealEstate />
            <OutstandingRealEstate />
            <RealEstateByLocation />
            <RealEstateNews />
            <Introduce />
        </div>
    )
});

export default HomePage