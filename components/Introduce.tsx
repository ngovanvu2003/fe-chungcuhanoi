import React from 'react'
import { Card } from './ui/card'
import Link from 'next/link'

const Introduce = () => {
    return (
        <Card className='border-none grid grid-cols-4 gap-10 text-center my-10'>
            <div>
                <Link href={''}>
                    <img className='mx-auto' src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg" alt="" />
                </Link>
                <h5 className='font-semibold mx-auto text-lg my-3'>Bất động sản bán</h5>
                <p className='font-sans text-sm'>Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn thông qua lượng tin rao lớn, uy tín về các loại hình <Link href={''} className='text-red-500'>bất động sản bán </Link>bất động sản bán
                    tại Việt Nam, bao gồm bán nhà riêng,
                    <Link href={''} className='text-red-500'>  bán nhà mặt tiền </Link>
                    bán nhà mặt tiền, bán căn hộ chung cư, bán biệt thự, bán đất,
                    <Link href={''} className='text-red-500'> bán shophouse </Link>
                    bán shophouse và các loại hình BĐS khác.</p>
            </div>
            <div>
                <Link href={''}>
                    <img className='mx-auto' src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForRent.svg" alt="" />
                </Link>
                <h5 className='font-semibold mx-auto text-lg my-3'>Bất động sản cho thuê    </h5>
                <p className='font-sans text-sm'>Cập nhật thường xuyên và đầy đủ các loại hình
                    <Link href={''} className='text-red-500'> bất động sản cho thuê  </Link>

                    như: thuê phòng trọ, nhà riêng,
                    <Link href={''} className='text-red-500'>thuê biệt thự </Link>
                    , văn phòng, kho xưởng hay
                    <Link href={''} className='text-red-500'>  thuê mặt bằng </Link>
                    kinh doanh giúp bạn nhanh chóng tìm được bất động sản ưng ý.</p>
            </div>
            <div>
                <Link href={''}>
                    <img className='mx-auto' src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Projects.svg" alt="" />
                </Link>
                <h5 className='font-semibold mx-auto text-lg my-3'>Đánh giá dự án</h5>
                <p className='font-sans text-sm'>Các
                    <Link href={''} className='text-red-500'> video đánh giá </Link>
                    tổng quan dự án cung cấp góc nhìn khách quan của các chuyên gia về những dự án nổi bật tại Việt Nam, giúp bạn đưa ra quyết định đúng đắn cho nơi an cư lý tưởng hoặc cơ hội đầu tư sinh lời.</p>
            </div>
            <div>
                <Link href={''}>
                    <img className='mx-auto' src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Wiki.svg" alt="" />
                </Link>
                <h5 className='font-semibold mx-auto text-lg my-3'>Wiki BĐS</h5>
                <p className='font-sans text-sm'>Ngoài cập nhật những biến động thị trường, chúng tôi còn cung cấp kiến ​​thức, kinh nghiệm về mua bán, cho thuê, đầu tư, vay mua nhà,
                    <Link href={''} className='text-red-500'> phong thủy </Link>
                    , thiết kế nhà, mọi thông tin cần thiết để dẫn lối người tìm nhà tìm thấy căn nhà mơ ước..</p>
            </div>
        </Card>
    )
}

export default Introduce