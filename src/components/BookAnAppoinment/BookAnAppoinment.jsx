import React, {useState,useEffect} from 'react'
import docimgtrans from '../../assets/docimgtrans.png'
import doc2 from '../../assets/doc2.png'
import doc3 from '../../assets/doc3.png'
import Select from 'react-select';
import { AiOutlineLeft ,AiOutlineRight  } from "react-icons/ai";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const BookAnAppointment = () => {
  const doctors = [
    {
        id:1,
        name:"Abuja Kuipid Adegoke",
        speciality:"Dentistry",
        desc:"Well known doctor in the aspect of pathology",
        available:false,
        img:docimgtrans,
        location:'abuja',
    },
    {
        id:2,
        name:"lagos Kuipid Adegoke",
        speciality:"charm",
        desc:"Well known doctor in the aspect of pathology",
        available:true,
        img:doc2,
        location:'lagos',
    },
    {
        id:3,
        name:"abuja 2Kuipid Adegoke",
        speciality:"Babalawwo",
        desc:"Well known doctor in the aspect of pathology",
        available:false,
        img:doc3,
        location:'abuja',
    },
    {
        id:4,
        name:"kaduna Kuipid Adegoke",
        speciality:"Puberty",
        desc:"Well known doctor in the aspect of pathology",
        available:true,
        img:docimgtrans,
        location:'kaduna',
    },
    {
        id:5,
        name:"niger Kuipid Adegoke",
        speciality:"Test",
        desc:"Well known doctor in the aspect of pathology",
        available:true,
        img:doc2,
        location:'niger',
    },
    {
      id:5,
      name:"kwara Kuipid Adegoke",
      speciality:"Test",
      desc:"Well known doctor in the aspect of pathology",
      available:true,
      img:doc2,
      location:'kwara',
  },
  {
    id:5,
    name:"calabar Kuipid Adegoke",
    speciality:"Test",
    desc:"Well known doctor in the aspect of pathology",
    available:true,
    img:doc2,
    location:'calabar',
},
]
  const [displayedDoc, setDispalayedDoc] = useState('abuja');

  
    const filteredDocs = doctors.filter((loc)=> loc.location===`${displayedDoc}`
    )
    const [selectedState, setSelectedState] = useState(null);
  const [selectedLGA, setSelectedLGA] = useState(null);

  const [states, setStates] = useState([
    { value: 'lagos', label: 'Lagos' },
    { value: 'abuja', label: 'Abuja' },
    { value: 'calabar', label: 'Calabar' },
    { value: 'kaduna', label: 'Kaduna' },
  ]);
  const [lgas, setLGAs] = useState([]);

  useEffect(() => {
    if (selectedState) {
      // create dummy LGAs based on the selected state
      
      if (selectedState.value==='lagos') {
        console.log(true)
       const  dummyLGAs=[
          { value: `Ikorodu`, label: `ikorodu` },
          { value: `lekki`, label: `lekki` },
          { value: `surulere`, label: `surulere` },
        ]
        setLGAs(dummyLGAs);
      }
      if (selectedState.value==='abuja') {
        const  dummyLGAs=[
           { value: `Zuba`, label: `Zuba` },
           { value: `Asokoro`, label: `Asokoro` },
           { value: `Maitama`, label: `Maitama` },
         ]
         setLGAs(dummyLGAs);
      }
      if (selectedState.value==='calabar') {
        const  dummyLGAs=[
           { value: `calabar1`, label: `calabar1` },
           { value: `calabar2`, label: `calabar2` },
           { value: `calabar3`, label: `calabar3` },
         ]
         setLGAs(dummyLGAs);
       }
       if (selectedState.value==='kaduna') {
        const  dummyLGAs=[
           { value: `barnawa`, label: `barnawa` },
           { value: `riyom`, label: `riyom` },
           { value: `kdwest`, label: `kdwest` },
         ]
         setLGAs(dummyLGAs);
       }
      // const dummyLGAs = [
      //   { value: `${selectedState.value}-lga1`, label: `${selectedState.label} LGA 1` },
      //   { value: `${selectedState.value}-lga2`, label: `${selectedState.label} LGA 2` },
      //   { value: `${selectedState.value}-lga3`, label: `${selectedState.label} LGA 3` },
      // ];
     
    } else {
      setLGAs([]);
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedState) {
    setDispalayedDoc(selectedState.value)
   
    }
  }, [selectedState]);
  function handleStateChange(selectedOption) {
    setSelectedState(selectedOption);
    setSelectedLGA(null);
  }
 

  function handleLGAChange(selectedOption) {
    setSelectedLGA(selectedOption);
  }
    const today = new Date();
  const maxDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    const [doctorNum, setDoctorNum] = useState(0)
    console.log(doctorNum)
    const [state, setState] = useState(0)
    const [selectedDate, setSelectedDate] = useState(null);

    const handleClickLeft = () => {
        setDoctorNum(prev => prev===0 ? filteredDocs.length-1 : prev-1)
      
    }
    const handleClickRight = () => {
        setDoctorNum(prev => prev===filteredDocs.length-1 ? 0 : prev+1)

    }
    const [date, setDate] = useState("");

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
    const [lastActivityTime, setLastActivityTime] = useState(null);
  const [activityCount, setActivityCount] = useState(0);
  const handleActivityClick = (e) => {
    setHealthFormDisplay(true)
    e.preventDefault()
        
    const currentTime = Date.now();
    console.log((currentTime - lastActivityTime))
    // Check if the activity was performed within the last 15 minutes
    if (lastActivityTime && (currentTime - lastActivityTime) < 15 * 60 * 1000) {
      console.log("You can only perform this activity once every 15 minutes.");
    
      return;
    }

    // Check if the maximum number of allowed activities has been reached
    if (activityCount >= 4  && (currentTime - lastActivityTime) < 60 * 60 * 1000) {
      console.log("You have reached the maximum number of allowed activities. in less than 1 hour");
      return;
    }
// Perform the activity and update the state
    setLastActivityTime(currentTime);
    setActivityCount(activityCount + 1);
  }
  const [healthFormDisplay, setHealthFormDisplay] = useState(false)



  return (
    <>
    <div  className=' w-full  h-full flex items-center bg-[#d7ebf65a] justify-center p-8'>
     <div className="container flex h-fit gap-8 items-center justify-center  ">
  
    <div className="left w-1/2 shadow-2xl justify-center items-center flex relative p-4">
      
        <div onClick={handleClickLeft} className="absolute z-30 bottom-4  left-4 flex justify-center items-center p-5 bg-green-600  rounded-full cursor-pointer ">
            <AiOutlineLeft  className=' cursor-pointer text-white'/>
        </div>
         <div onClick={handleClickRight}  className="absolute bottom-4  z-30 right-4 p-5 bg-green-600  rounded-full cursor-pointer">
            <AiOutlineRight className=' cursor-pointer text-white'/>
         </div>
         {
          filteredDocs.length!==0 ?   <div className="flex relative w-full  justify-start rounded-3xl z-10  items-center flex-col mr-4">
          <span className=' p-1 rounded-xl bg-green-100 absolute pr-2 pl-2 left-16 top-2 text-gray-500 text-sm' ></span>
          <div className="w-[80%] h-[250px] flex justify-center items-center rounded-3xl bg-green-600 " >
          <img src={filteredDocs[doctorNum] ?  filteredDocs[doctorNum]?.img : filteredDocs[0]?.img} className=' w-[200px] object-contain h-full' alt="doc" />
          </div>
          <div className="w-[80%] flex text-justify justify-start flex-col  mt-3 pl-4">
          <h1 className=' font-bold text-base  mb-1'>{  filteredDocs[doctorNum] ?   filteredDocs[doctorNum]?.name : filteredDocs[0]?.name }</h1>
          <p className='font-light text-gray-800 text-xl'>{filteredDocs[doctorNum] ? filteredDocs[doctorNum]?.speciality : filteredDocs[0]?.speciality}</p>
         <p className=' text-gray-800 text-ellipsis font-light'>{filteredDocs[doctorNum] ? filteredDocs[doctorNum]?.desc : filteredDocs[0]?.desc}</p>

          </div>
           </div> : <div className="flex relative w-full  justify-start rounded-3xl z-10  items-center flex-col mr-4">
          <span className=' p-1 rounded-xl bg-green-100 absolute pr-2 pl-2 left-16 top-2 text-gray-500 text-sm' ></span>
          
          <div className="w-[80%] flex text-justify justify-start flex-col  mt-3 pl-4">
          <h1 className=' font-bold text-base  mb-1'>No Doctor Available close to your Location , Do you want an online appointment</h1>
          

          </div>
           </div>
         }
      
    </div>
    <div className="right w-1/2  h-full">
        <h1 className='mb-4 text-2xl font-bold'>Appointment Form</h1>
        <form className='w-[500px] flex flex-col  gap-8' >
            <div className=' flex justify-between' >
                <div className='flex flex-col'>
                    <label className='font-medium capitalize mb-1 text-base' htmlFor="firstname">firstname</label>
                    <input className='bg-green-100  p-3 outline-zinc-300 rounded' type="text" placeholder='Stephen' />
                </div>
                <div className='flex flex-col'>
                    <label  className='font-medium capitalize mb-1 text-base' htmlFor="lastname">lastname</label>
                    <input className='bg-green-100  outline-zinc-300  p-3 rounded' type="text" placeholder='Adegoke' />
                </div>
            </div>
             <div className=' flex justify-between gap-8' >
                <div className='flexx gap:8 w-full'>
                    <label className='font-medium  capitalize mb-1 text-base' htmlFor="state">Available State</label>
                   
                        <Select  className='bg-green-100  outline-zinc-300  p-3 rounded'
        value={selectedState}
        onChange={handleStateChange}
        options={states}
        placeholder="Select State"
      />
      {selectedState && (
        <Select  className='bg-green-100  outline-zinc-300  p-3 rounded'
          value={selectedLGA}
          onChange={handleLGAChange}
          options={lgas}
          placeholder="Select Area"
        />
      )}
                       
                     </div>
                    
            </div>
            <div className='flex flex-col'>
                 <label  className='font-medium capitalize mb-1 text-base' htmlFor="email">email</label>
                    <input className='bg-green-100  outline-zinc-300  p-3 rounded' type="email" placeholder='kuipid@mail.com' />
            </div>
            <div className='calendaar'>
                <div className='flex flex-col'>
                <label  className='font-medium capitalize mb-1 text-base' htmlFor="date">Select a date:(within 30 days)</label>
                <input className='bg-green-100  p-3 rounded'
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}
        min={today.toISOString().split("T")[0]}
        max={maxDate}
      />

    </div>
                <div></div>
            </div>
            <div className='flex flex-col'>
                    <label className='font-medium capitalize mb-1 text-base' htmlFor="msg">Additional Message</label>
                    <input className='bg-green-100  p-3 rounded outline-zinc-300 ' type="text" placeholder='Short description of appointment reason....' />
                </div>
            <button onClick={handleActivityClick} className='bg-green-600  mr-auto ml-auto mt-0 mb-0 text-center cursor-pointer rounded-lg w-[150px] text-white h-[50px]'>Confirm</button>
        </form>
    </div>
     </div>
    
    </div>
     {
      healthFormDisplay ? <div className='w-full opacity-90 overflow-hidden flex-col absolute h-full top-0 right-0 flex justify-center items-center z-50 bg-red-50' >

<h1 className='mb-4 text-base font-light text-gray-700'>Additional details to fully give doctor idea of your physiology ...</h1>
      <form className='w-fit p-4 relative flex flex-col  gap-8' >
        <span className='absolute right-2 top-0 text-red-500' onClick={()=>setHealthFormDisplay(false)}>close</span>
                <div className=' flex justify-between gap-8' >
                    <div className='flex flex-col'>
                        <label className='font-medium capitalize mb-1 text-base' htmlFor="height">height</label>
                        <input className='bg-green-100  p-3 outline-zinc-300 rounded' type="text" placeholder='5ft' />
                    </div>
                    <div className='flex flex-col'>
                        <label  className='font-medium capitalize mb-1 text-base' htmlFor="age">age</label>
                        <input className='bg-green-100  outline-zinc-300  p-3 rounded' type="text" placeholder='12' />
                    </div>
                </div>
                
                <div className='flex flex-col'>
                     <label  className='font-medium capitalize mb-1 text-base' htmlFor="blood group">blood group</label>
                        <input className='bg-green-100  outline-zinc-300  p-3 rounded' type="text" placeholder='0+' />
                </div>
               
                <div className='flex flex-col'>
                        <label className='font-medium capitalize mb-1 text-base' htmlFor="msg">Additional Message</label>
                        <input className='bg-green-100  p-3 rounded outline-zinc-300 ' type="text" placeholder='Short description of any health challenge ....' />
                    </div>
                <button className='bg-green-600  mr-auto ml-auto mt-0 mb-0 text-center cursor-pointer rounded-lg w-[150px] text-white h-[50px]'>Confirm</button>
            </form>
            </div> : null
     }
     </>
  )
}

export default BookAnAppointment