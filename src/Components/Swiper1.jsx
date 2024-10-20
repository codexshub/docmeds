import React, { useEffect, useState } from 'react'
import data from '../DATA/banner.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const Swiper1 = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(data)
    }, []);
    return (
        <>
            <section className='swiperSection'>
                <div className="container">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    >
                        {product.map(item => (
                            <SwiperSlide key={item.id}>
                               <NavLink to="/shop">
                               <div className="swiperImg">
                               <img src={require(`../Image/Card/${item.image}`)} alt={item.name} />
                               </div>
                               </NavLink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Swiper1
