import React from 'react'
import DoctorImg from '../../assets/doctors/doctor6.png'
import Covid from '../../assets/specialServices/covid.png'
import Herbal from '../../assets/specialServices/herbal.png'
import Lab from '../../assets/specialServices/lab.png'
import Calendar from '../../assets/specialServices/calendar.png'

const styles = {
    gridCont: `grid md:grid-cols-2 gap-[3rem]`,
    gridImg: `order-2 md:order-first`,
    ImgDiv: `w-[70%]  mx-auto bg-green-300 rounded-t-[50%] border-[1rem] border-white p-3 shadow-2xl md:h-[33.2rem] shadow-green-500 relative z-0 h-screen md:mt-[4rem]`,
    Img: ` md:h-1/2  w-full relative z-1`,
    gridText: `text-slate-800`,
    gridHeading: 'font-bold text-3xl text-center md:text-4xl tracking-wider md:text-start my-3',
    gridP: `text-gray-300 text-md justify-start w-full md:text-md tracking-wide whitespace-prewrap md:w-[90%]  grid md:justify-center font-semibold`,
    gradient: `bg-gradient-to-r from-green-800 via-green-400 to-green-800 inline-block text-transparent bg-clip-text`,
    cardCont: ` grid md:grid-cols-2 gap-8 my-3`,
    cardImgCont: `w-[50px] h-[50px] bg-gradient-to-b from-green-300 via-green-400 to-green-800 rounded-lg flex justify-center items-center`,
    cardImg: `w-1/2 h-1/2 mx-auto text-green-300`,
    card: `grid justify-start md:justify-center items-center w-[80%]`,
    cardHeading: `font-bold text-2xl`,
    cardP: `text-slate-600 text-xs font-normal`
    
}

const SectionThree = () => {
  return (
    <section className='my-[8rem] md:h-screen'>
        <article className={styles.gridCont}>
            {/* =====IMAGE ====  */}
            <div className={styles.gridImg}>
                <div className={styles.ImgDiv}>
                    <div className={styles.Img}>
                        <img className='w-full bg-contain h-screen -mt-10 md:-mt-[6.8rem] absolute z-10 md:block'  src={DoctorImg} alt="Doctor" />
                    </div>
                </div>
            </div>
            {/* ==== TEXT ==== */}
            <div className={styles.gridText}>
                <h2 className={styles.gridHeading}>Our <span className={styles.gradient}>Special Services</span></h2>
                <p className={styles.gridP}>In times like today, your health is very important, especially since the number of COVID-19 cases is increasing day by day so we are readdy to help you with your health consultation</p>
                
                {/* ==== CARDS ===== */}
                <div className={styles.cardCont}>
                    {/* CARD ONE  */}
                    <div className={styles.card}>
                        <div className={styles.cardImgCont}>
                            <img className={styles.cardImg} src={Covid} alt="Covid Test" />
                        </div>
                        <h4 className={styles.cardHeading}>Covid-19 Test</h4>
                        <p className={styles.cardP}>The Covid test is a standard procedure in the diagnosis of viruses.
                            
                        </p>
                    </div>
                    {/* CARD TWO  */}
                    <div className={styles.card}>
                        <div className={styles.cardImgCont}>
                            <img className={styles.cardImg} src={Herbal} alt="Herbal Supplement" />
                        </div>
                        <h4 className={styles.cardHeading}>Herbal Supplement</h4>
                        <p className={styles.cardP}>Herbal Supplements are products derived from plants and/or their oils, roots, seeds, berries or flowers.
                        </p>
                    </div>
                    {/* CARD THREE  */}
                    <div className={styles.card}>
                        <div className={styles.cardImgCont}>
                            <img className={styles.cardImg} src={Lab} alt="Laboratory Test" />
                        </div>
                        <h4 className={styles.cardHeading}>Laboratorium Test</h4>
                        <p className={styles.cardP}> We offer different types of tests such as Urine test, Blood tests and Tumor markers
                        </p>
                    </div>
                    {/* CARD FOUR  */}
                    <div className={styles.card}>
                        <div className={styles.cardImgCont}>
                            <img className={styles.cardImg} src={Calendar} alt="Menstruation Calendar" />
                        </div>
                        <h4 className={styles.cardHeading}>Menstruation Calender</h4>
                        <p className={styles.cardP}>Learn and be enlightened to know when your period comes and goes
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default SectionThree