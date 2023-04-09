import React from 'react'
import chatDoctor from '../../assets/doctorServices/chatDoctor.png'
import healthStore from '../../assets/doctorServices/healthStore.png'
import hospital from '../../assets/doctorServices/hospital.jpg'

const styles = {
    heading: `text-3xl font-bold grid justify-center`,
    gradientText: `text-center font-bold text-3xl bg-gradient-to-r from-green-500 via-green-100 to-green-300 inline-block text-transparent bg-clip-text`,
    grid: `my-6 mx-auto w-full gap-5 md:w-[95%] lg:w-[80%] grid md:grid-cols-3 md:gap-3`,
    cardBg: `bg-green-800 py-4 px-3 rounded-xl`,
    cardTwoBg: `bg-green-100 text-green-800 py-4 px-3 rounded-xl`,
    cardH3: `text-xl font-bold my-5 grid justify-center md:justify-start`,
    cardImgDiv: `w-1/2 mt-4 grid justify-center mx-auto rounded-full border border-green-100`,
    cardImg: `rounded-full place-center`
}

const SectionTwo = () => {
  return (
    <section className='my-[2rem]'>
        <div className={styles.heading}>
            <h1>Our <span className={styles.gradientText}>Main Services</span></h1>
            <h2 className='text-center'>Categories</h2>
        </div>
        <article className={styles.grid}>
            {/* CARD ONE  */}
            <div className={styles.cardBg}>
                {/* IMAGE  */}
                <div className={styles.cardImgDiv}>
                    <img className={styles.cardImg} src={chatDoctor} alt="Chat with Doctor" />
                </div>
                {/* TEXT  */}
                <h3 className={styles.cardH3}>Chat with doctor</h3>
                <p className='my-5'>You can connect directly, quickly ands easily, and there is no need to doubt the quality of the consultation and treatment offered.</p>
            </div>

             {/* CARD TWO  */}
            <div className={styles.cardTwoBg}>
                {/* IMAGE  */}
                <div className={styles.cardImgDiv}>
                    <img className={styles.cardImg}  src={healthStore} alt="Our Health Store" />
                </div>
                {/* TEXT  */}
                <h3 className={styles.cardH3}>Health Store</h3>
                <p className='my-5'>Talk about the health complaints you are expeiencing and don't hesitate to ask about the proper treatment.</p>
            </div>

             {/* CARD THREE  */}
            <div className={styles.cardBg}>
                {/* IMAGE  */}
                <div className={styles.cardImgDiv}>
                    <img className={styles.cardImg}  src={hospital} alt="Hospital" />
                </div>
                {/* TEXT  */}
                <h3 className={styles.cardH3}>Visit Hospitals</h3>
                <p>Get priority services in hospitals with Haidoc, which allows you to go to the hospital more practically and save time.</p>
            </div>
        </article>
    </section>
  )
}

export default SectionTwo