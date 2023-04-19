import React from 'react'

const styles = {
  gradientText: `text-start w-fullmd:text-center font-bold text-xl md:text-3xl lg:text-4xl bg-gradient-to-r from-green-800 via-green-400 to-green-800 inline md:inline-block text-transparent bg-clip-text py-3 whitespace-nowrap`,
  button: `bg-gradient-to-r from-green-900 via-green-600 to-green-900 block w-full md:w-1/4 mx-auto rounded-3xl my-7 text-center py-3 px-4 grid justify-center text-white shadow-xl`
}

const SectionFive = () => {
  return (
    <section className=' my-[4rem] '>
        <div className='bg-green-50 w-full py-[2rem] px-3 md:py-[3rem] md:px-[4rem] rounded-xl'>
            <h2 className=' w-full text-center text-xl lg:text-4xl md:3xl font-bold py-5'>Get <span className={styles.gradientText}>started with HaiDoc</span></h2>
            <p className='text-md md:text-lg w-full'>We care about your health. Even the all-powerful Pointing has no control about the blind  texts.</p>
            <button className={styles.button}>Let's Get Started</button>
        </div>
    </section>
  )
}

export default SectionFive