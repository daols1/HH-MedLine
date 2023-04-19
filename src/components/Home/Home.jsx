import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'

const styles = {
  home: `w-full bg-white px-10 md:px-32`, //bg-green-100
  honeContainer: ` flex flex-col w-full h-full p-4 mx-auto text-slate-800`,

}
// a random comment
function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.honeContainer}>
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <SectionFive/>
        </div>
    </div>
  )
}

export default Home