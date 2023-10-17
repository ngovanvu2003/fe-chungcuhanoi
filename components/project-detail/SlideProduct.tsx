"use client"
import Image from 'next/image';
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideProduct = () => {
    const images = [
        "https://wisteria.vn/wp-content/uploads/2022/07/slide-1.webp",
        "https://wisteria.vn/wp-content/uploads/2023/08/slide-2.webp",
        "https://wisteria.vn/wp-content/uploads/2022/07/slide-1.webp",
        "https://wisteria.vn/wp-content/uploads/2023/08/slide-2.webp",
    ];


    return (
        <div>
            <Zoom indicators={index => <div className="indicator"></div>} >
                {images.map((image, index) => (
                    <div key={index} className="each-slide-effect lg:h-[400px] md:h-[400px] sm:h-[200px]">
                        <div style={{
                            height: "200px",
                            border: "1%",
                            backgroundImage: "cover",
                        }}>
                            <Image fill objectFit='cover' src={image} alt={''} />
                        </div>
                    </div>
                ))}
            </Zoom>
        </div>
    );
};

export default SlideProduct;

