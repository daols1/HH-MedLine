import React from 'react'
import Doc1 from '../../assets/doctors/doctor1.png'

const styles = {
  home: `w-full bg-[#F4FEFF]`,
  honeContainer: `max-[1000px] mx-auto flex flex-col w-[95%] h-full p-4 mx-auto`,
  gridCont: `w-full grid md:grid-cols-2 gap-3 mt-[2rem]`,
  gridText: `text-green-500  font-bold text-3xl md:text-4xl lg:text-5xl mx-auto`,
  gradientText: `text-center font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-500 via-green-300 to-green-900 inline-block text-transparent bg-clip-text`,
  smallCont: `my-5 mx-auto`,
  small: `text-gray-300 whitespace-pre-wrap text-xl`,
  wealth: `text-3xl font-bold bg-gradient-to-r from-green-900 via-green-500 to-green-200 text-transparent bg-clip-text my-3`,
  buttonCont: `bg-gradient-to-r from-green-300 via-green-500 to-green-900 block md:inline-block rounded-3xl my-3 text-center`,
  button: `text-white py-3 px-4`,
  projects: `flex gap-4 justify-center`,
  number: `flex flex-col`,
  numberNum : `flex`,
  numPro: `text-md font-light text-gray-300 whitespace-wrap`,
  // Image 
  girdImage: `bg-green-100 rounded-tl-[40%]`,
  // imgCont: `w-[80%] mx-auto`
  img: `cover w-[80%] h-full mx-auto border-[0.5rem] border-white rounded-t-[50%] bg-green-800 mt-4`

}

function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.honeContainer}>
          <section className={styles.gridCont}>
            <div>
              <div className={styles.gridText}>
                 <p>We Are Ready to</p>
                <span className={styles.gradientText}>Help Your Health</span>
                <p>Problems</p>
              </div>
              {/* SMALL  */}
              <div className={styles.smallCont}>
                <small className={styles.small}>
                  In times like today, your health is very important. 
                  We are here to help you with your health consultation.
                  <h5 className={styles.wealth}>Health is Wealth!</h5>
                </small>
              </div>
              {/* BUTTON  */}
              <div className={styles.buttonCont}>
                <button className={styles.button}>
                  Try Free Consultation
                </button>
              </div>
              {/* PROJECTS  */}
              <div className={styles.projects}>
                {/* Number 1 */}
                <div className={styles.number}>
                  <div className={styles.numberNum}>
                    <h2 className='text-2xl text-green-900 font-bold'>200</h2>
                    <p className='text-2xl text-green-400 font-bold'>+</p>
                  </div>
                  {/* Small Text  */}
                  <div>
                    <small className={styles.numPro}>
                      Active
                      Doctors
                    </small>
                  </div>
                </div>

                  {/* Number 2*/}
                <div className={styles.number}>
                  <div className={styles.numberNum}>
                    <h2 className='text-2xl text-green-900 font-bold'>15K</h2>
                    <p className='text-2xl text-green-400 font-bold'>+</p>
                  </div>
                  {/* Small Text  */}
                  <div>
                    <small className={styles.numPro}>
                      Active User
                    </small>
                  </div>
                </div>

                  {/* Number 3 */}
                <div className={styles.number}>
                  <div className={styles.numberNum}>
                    <h2 className='text-2xl text-green-900 font-bold'>50</h2>
                    <p className='text-2xl text-green-400 font-bold'>+</p>
                  </div>
                  {/* Small Text  */}
                  <div>
                    <small className={styles.numPro}>
                      Active Pharmacy
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.girdImage}>
              <img className={styles.img} src={Doc1} alt="Doctor" />
            </div>
          </section>
        </div>
    </div>
  )
}

export default Home