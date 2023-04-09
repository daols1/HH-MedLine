import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

const styles = {
  home: `w-full bg-green-700`,
  honeContainer: `max-[1000px] flex flex-col w-[95%] h-full p-4 mx-auto text-green-100`,

}

function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.honeContainer}>
          <SectionOne/>
          <SectionTwo/>
        </div>
    </div>
  )
}

export default Home