import React from 'react'

const styles = {
    gridCont: `grid grid-cols-[2fr_1fr] gap-[2rem]`,
    gradientText: `text-center font-bold text-2xl md:text-3xl bg-gradient-to-r from-green-800 via-green-400 to-green-800 inline-block text-transparent bg-clip-text`,
    buttonCont: `bg-gradient-to-r from-green-900 via-green-600 to-green-900 block md:inline-block rounded-3xl my-3 text-center`,
    button: `text-white py-3 px-4`,
    girdImage: `bg-green-300 rounded-l-[50%] border-[2rem] border-slate-900`
}

const SectionFour = () => {
  return (
    <section className='my-[2rem] md:h-screen'>
        <article className={styles.gridCont}>
            {/* ==== TEXT ==== */}
            <div>
                <h4 className='text-slate-900 font-bold'>Our Doctors</h4>
                <h2 className={styles.gradientText}>Qualified Doctors</h2>
                <p className='text-gray-400 whitespace-pre-wrap w-2/3'> Handles directly by general doctors and professional and experienced specialists doctors.</p>
                {/* ==== CARD ==== */}
                <div>
                    {/* ===img background doctor kit === */}
                    <p>Orthpedy</p>
                    <h4>Dr. James Wellington</h4>
                    <small>Read More</small>
                </div>
                {/* ===BUTTON === */}
                <div className={styles.buttonCont}>
                    <button className={styles.button}>View All Doctors</button>
                </div>
            </div>
            {/* === IMAGE ===  */}
            <div className={styles.girdImage}>
                <img src="\" alt="" />
                <img src="\" alt="" />
                <img src="\" alt="" />
                <img src="\" alt="" />
                <img src="\" alt="" />
            </div>
        </article>
    </section>
  )
}

export default SectionFour