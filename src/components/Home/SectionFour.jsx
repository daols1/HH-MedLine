import React from 'react'
import Doctor1 from '../../assets/doctors/doctor1.png'
import Doctor2 from '../../assets/doctors/doctor2.png'
import Doctor3 from '../../assets/doctors/doctor3.png'
import Doctor4 from '../../assets/doctors/doctor4.png'

// import Swiper core and required modules
import {Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const styles = {
    gridCont: `grid w-full md:grid-cols-2 gap-2 md:gap-0 md:px-20 py-10 md:py-0`,
    gradientText: `text-center font-bold text-2xl md:text-3xl bg-gradient-to-r from-green-800 via-green-400 to-green-800 inline-block text-transparent bg-clip-text py-3`,
    buttonCont: `bg-gradient-to-r from-green-900 via-green-600 to-green-900 block rounded-3xl my-6 text-center w-full mx-auto grid justify-center hover:shadow-xl`,
    button: `text-white py-3 px-4 grid justify-center`,
    card: `bg-green-500 rounded-l-xl rounded-br-xl p-4 w-full  text-white`,
    imagePagination: `grid place-items-center w-10/12 aspect-square pb-4 h-9/12`,
    girdImage: `bg-green-300 rounded-l-[50%] border-[1rem] border-white shadow-md shadow-green-500 overflow-hidden aspect-square `,
}

const SectionFour = () => {
  return (
    <section className='my-[8rem] md:h-screen'>
        <article className={styles.gridCont}>
            {/* ==== TEXT ==== */}
            <div className='w-[18rem] aspect-square'>
                <h4 className='text-slate-900 font-bold text-xl py-3'>Our Doctors</h4>
                <h2 className={styles.gradientText}>Qualified Doctors</h2>
                <p className='text-gray-400 whitespace-pre-wrap py-5 '> Handles directly by general doctors and professional and experienced specialists doctors.</p>
                {/* ==== CARD ==== */}
                <div className={styles.card}>
                    {/* <img src={Doctor1} alt="Doctor" /> */}
                    <p className='font-thin text-md py-2 italic'>Orthpedy</p>
                    <h4 className='text-white font-semibold text-2xl md:w-2/3 whitespace-pre-wrap '>Dr. James Wellington</h4>
                    <small className='py-3'>Read More</small>
                </div>
                {/* ===BUTTON === */}
                <div className={styles.buttonCont}>
                    <button className={styles.button}>View All Doctors</button>
                </div>
            </div>
            {/* === IMAGE ===  */}
            <div className='w-[18rem] sm:w-[36rem] border-0'>
            <Swiper className={styles.imagePagination} 
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            >
                {/* ===CHECK DOCTOR ==== */}
                <SwiperSlide className={styles.girdImage}>
                    <img className='w-full h-full text-3xl -mt-5 grid place-items-center ml-7' src={Doctor1} alt="Doctor" />
                </SwiperSlide>
                <SwiperSlide className={styles.girdImage}>
                    <img className='w-full h-full text-3xl -mt-5 grid place-items-center ml-7' src={Doctor2} alt="Doctor" />
                </SwiperSlide>
                <SwiperSlide className={styles.girdImage}>
                    <img className='w-full h-full text-3xl -mt-5 grid place-items-center ml-7' src={Doctor3} alt="Doctor" />
                </SwiperSlide>
                <SwiperSlide className={styles.girdImage}>
                    <img className='w-full h-full text-3xl -mt-5 grid place-items-center ml-7' src={Doctor4} alt="Doctor" />
                </SwiperSlide>
            </Swiper>
            </div>
        </article>
    </section>
  )
}

export default SectionFour