import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const data = [
    {
        img: AVTR1,
        name: 'Erenrst Wing',
        review: 'amet consectetur adipisicing elit. Odit maiores, facilis corporis officiis adipisicing elit. Odit maiores, facilis corporis officiis.adipisicing elit. Odit '
    },
    {
        img: AVTR2,
        name: 'Hilray Wing',
        review: 'amet consectetur adipisicing elit. Odit maiores, facilis corporis officiis.adipisicing elit. Odit maiores, facilis corporis officiis corporis officiis'
    },
    {
        img: AVTR3,
        name: 'Erenrst Double',
        review: 'amet consectetur adipisicing elit. Odit maiores, facilis corporis officiis adipisicing elit. Odit maiores, facilis corporis officiis.adipisicing elit. Odit '
    },
    {
        img: AVTR4,
        name: 'Dribnksd Rring',
        review: 'amet consectetur adipisicing elit. Odit maiores,adipisicing elit. Odit maiores, facilis corporis officiis facilis corporis officiis corporis officiis'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonial'>
                <h5>Review from clients</h5>
                <h2>Testimonials</h2>
                <Swiper className="container testimonials__container" pagination={{clickable: true}} modules={[Pagination]}>
                    {data.map((dat, index)=>{
                        return (
                            <SwiperSlide className='testimonial' key={index}>
                                <div className="client__avatar">
                                    <img src={dat.img} alt='avatar' />
                                    </div>

                                    <h5 className='clients__name'>{dat.name}</h5>
                                    <small className='clients__review'>{dat.review}</small>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
        </section>
    );
};

export default Testimonials;