import React from 'react'
import Search from './Search'
import RealEstate from './RealEstate'
import RealEstateByLocation from './RealEstateByLocation'
import RealEstateNews from './RealEstateNews'
import Introduce from './Introduce'

const HomePage = () => {
    return (
        <div className='mx-10'>
            <Search />
            <RealEstate />
            <RealEstateByLocation />
            <RealEstateNews />
            <Introduce />
        </div>
    )
}

export default HomePage