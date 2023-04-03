import React, {useState} from 'react'
import docimgtrans from '../assets/docimgtrans.png'
import doc2 from '../assets/doc2.png'
import doc3 from '../assets/doc3.png'

import { AiOutlineLeft ,AiOutlineRight  } from "react-icons/ai";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const BookAppointment = () => {
    const apointmentdetails = [
    {
        state:"abuja",
        
        area:['gwa', 'gwalada','kubwa','zuba'],
        hospitals:[
            {
                name:"jeruhotel",
                areaIn:'gwa'
            },
             {
                name:"madhotel",
                areaIn:'gwa'
            },
            {
                name:"comotbody",
                areaIn:'gwa'
            },
        ],
        doctors : [
            {
                id:1,
                name:"Kuipid Adegoke",
                speciality:"Dentistry",
                desc:"Well known doctor in the aspect of pathology",
                available:false,
                img:docimgtrans,
            },
            {
                id:2,
                name:"Kuipid Adegoke",
                speciality:"charm",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:doc2,
            },
            {
                id:3,
                name:"Kuipid Adegoke",
                speciality:"Babalawwo",
                desc:"Well known doctor in the aspect of pathology",
                available:false,
                img:doc3,
            },
            {
                id:4,
                name:"Kuipid Adegoke",
                speciality:"Puberty",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:docimgtrans,
            },
            {
                id:5,
                name:"Kuipid Adegoke",
                speciality:"Test",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:doc2,
            },
        ]
    },
     {
        state:"lagos",
        area:['ikorodu', 'ikeja','lekki','berger'],
        hospitals:[
            {
                name:"jeruhotel",
                areaIn:'gwa'
            },
             {
                name:"madhotel",
                areaIn:'gwa'
            },
            {
                name:"comotbody",
                areaIn:'gwa'
            },
        ],
        doctors : [
            {
                id:1,
                name:"Kuipid Adegoke",
                speciality:"Dentistry",
                desc:"Well known doctor in the aspect of pathology",
                available:false,
                img:docimgtrans,
            },
            {
                id:2,
                name:"Kuipid Adegoke",
                speciality:"charm",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:doc2,
            },
            {
                id:3,
                name:"Kuipid Adegoke",
                speciality:"Babalawwo",
                desc:"Well known doctor in the aspect of pathology",
                available:false,
                img:doc3,
            },
            {
                id:4,
                name:"Kuipid Adegoke",
                speciality:"Puberty",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:docimgtrans,
            },
            {
                id:5,
                name:"Kuipid Adegoke",
                speciality:"Test",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:doc2,
            },
        ]
    },
     {
        state:"portharcourt",
        area:['gwa', 'gwalada','kubwa','zuba'],
        hospitals:[
            {
                name:"jeruhotel",
                areaIn:'gwa'
            },
             {
                name:"madhotel",
                areaIn:'gwa'
            },
            {
                name:"comotbody",
                areaIn:'gwa'
            },
        ],
        doctors : [
            {
                id:1,
                name:"Kuipid Adegoke",
                speciality:"Dentistry",
                desc:"Well known doctor in the aspect of pathology",
                available:false,
                img:docimgtrans,
            },
            {
                id:2,
                name:"Kuipid Adegoke",
                speciality:"charm",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:doc2,
            },
            {
                id:3,
                name:"Kuipid Adegoke",
                speciality:"Babalawwo",
                desc:"Well known doctor in the aspect of pathology",
                available:false,
                img:doc3,
            },
            {
                id:4,
                name:"Kuipid Adegoke",
                speciality:"Puberty",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:docimgtrans,
            },
            {
                id:5,
                name:"Kuipid Adegoke",
                speciality:"Test",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:doc2,
            },
        ]
    },
     {
        state:"jos",
        area:['gwa', 'gwalada','kubwa','zuba'],
        hospitals:[
            {
                name:"jeruhotel",
                areaIn:'gwa'
            },
             {
                name:"madhotel",
                areaIn:'gwa'
            },
            {
                name:"comotbody",
                areaIn:'gwa'
            },
        ],
        doctors : [
            {
                id:1,
                name:"Kuipid Adegoke",
                speciality:"Dentistry",
                desc:"Well known doctor in the aspect of pathology",
                available:false,
                img:docimgtrans,
            },
            {
                id:2,
                name:"Kuipid Adegoke",
                speciality:"charm",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:doc2,
            },
            {
                id:3,
                name:"Kuipid Adegoke",
                speciality:"Babalawwo",
                desc:"Well known doctor in the aspect of pathology",
                available:false,
                img:doc3,
            },
            {
                id:4,
                name:"Kuipid Adegoke",
                speciality:"Puberty",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:docimgtrans,
            },
            {
                id:5,
                name:"Kuipid Adegoke",
                speciality:"Test",
                desc:"Well known doctor in the aspect of pathology",
                available:true,
                img:doc2,
            },
        ]
    }
    ]
 
    const today = new Date();
  const maxDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    const [doctor, setDoctor] = useState(0)
    const [state, setState] = useState(0)
    const [selectedDate, setSelectedDate] = useState(null);
    console.log(apointmentdetails[state].state)
    const handleClickLeft = () => {
        setDoctor(prev => prev===0 ? apointmentdetails[0].doctors.length-1 : prev-1)
        console.log(doctor)
    }
    const handleClickRight = () => {
        setDoctor(prev => prev===apointmentdetails[0].doctors.length-1 ? 0 : prev+1)

    }
    const [date, setDate] = useState("");

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
    const [lastActivityTime, setLastActivityTime] = useState(null);
  const [activityCount, setActivityCount] = useState(0);
  const handleActivityClick = (e) => {
    e.preventDefault()
        console.log('clicked')
    const currentTime = Date.now();

    // Check if the activity was performed within the last 15 minutes
    if (lastActivityTime && (currentTime - lastActivityTime) < 15 * 60 * 1000) {
      console.log("You can only perform this activity once every 15 minutes.");
      return;
    }

    // Check if the maximum number of allowed activities has been reached
    if (activityCount >= 4) {
      console.log("You have reached the maximum number of allowed activities.");
      return;
    }
// Perform the activity and update the state
    setLastActivityTime(currentTime);
    setActivityCount(activityCount + 1);}
const handleState = (appoint) => (   console.log('choi')
)
  return (
    <div  className=' w-full h-fit flex items-center bg-[#d7ebf65a] justify-center mt-8'>
     <div className="container flex h-[100vh] gap-4 items-center justify-center  ">
    <div className="left w-1/2 shadow-2xl justify-center items-center flex relative p-4">
        <div onClick={handleClickLeft} className="absolute z-30 bottom-4  left-4 flex justify-center items-center p-5 bg-orange-500 rounded-full cursor-pointer ">
            <AiOutlineLeft  className=' cursor-pointer text-white'/>
        </div>
         <div onClick={handleClickRight}  className="absolute bottom-4  z-30 right-4 p-5 bg-orange-500 rounded-full cursor-pointer">
            <AiOutlineRight className=' cursor-pointer text-white'/>
         </div>
        <div className="flex relative w-full  justify-start rounded-3xl z-10  items-center flex-col mr-4">
            <span className=' p-1 rounded-xl bg-green-100 absolute pr-2 pl-2 left-16 top-2 text-gray-500 text-sm' > {apointmentdetails[0].doctors[doctor].available ? 'available' : 'unavailable'} </span>
            <div className="w-[80%] h-[250px] flex justify-center items-center rounded-3xl bg-orange-400" >
            <img src={apointmentdetails[0].doctors[doctor].img} className=' w-[200px] object-contain h-full' alt="doc" />
            </div>
            <div className="w-[80%] flex text-justify justify-start flex-col  mt-3 pl-4">
            <h1 className=' font-bold text-base  mb-1'>{apointmentdetails[0].doctors[doctor].name}</h1>
            <p className='font-light text-gray-800 text-xl'>{apointmentdetails[0].doctors[doctor]?.speciality}</p>
           <p className=' text-gray-800 text-ellipsis font-light'>{apointmentdetails[0].doctors[doctor]?.desc}</p>

            </div>
             </div>
    </div>
    <div className="right w-1/2  h-full">
        <h1 className='mb-4 text-2xl font-bold'>Appointment Form</h1>
        <form className='w-[500px] flex flex-col  gap-8' >
            <div className=' flex justify-between' >
                <div className='flex flex-col'>
                    <label className='font-medium capitalize mb-1 text-base' htmlFor="firstname">firstname</label>
                    <input className='bg-red-100 p-3 outline-zinc-300 rounded' type="text" placeholder='Stephen' />
                </div>
                <div className='flex flex-col'>
                    <label  className='font-medium capitalize mb-1 text-base' htmlFor="lastname">lastname</label>
                    <input className='bg-red-100 outline-zinc-300  p-3 rounded' type="text" placeholder='Adegoke' />
                </div>
            </div>
             <div className=' flex justify-between gap-8' >
                <div className='flex flex-col w-1/2'>
                    <label className='font-medium capitalize mb-1 text-base' htmlFor="state">state</label>
                    <select className='bg-red-100 outline-zinc-300  p-3 rounded'  onSelect={handleState}  name="state" id="state">
                       {
                        apointmentdetails.map((appoint) =>(<option className='bg-red-100 outline-zinc-300  p-3 rounded' value="abuju">  {appoint.state}</option>)
                        )
                       }
                        {/* <option  className='bg-red-100 outline-zinc-300  p-3 rounded' value="abuju">Lagos</option>
                        <option  className='bg-red-100 outline-zinc-300  p-3 rounded' value="kd">Kaduna</option>
                        <option  className='bg-red-100 outline-zinc-300  p-3 rounded' value="benue">Benue</option>
                        <option  className='bg-red-100 outline-zinc-300  p-3 rounded' value="kogi">Kogi</option> */}
                    </select>
                     </div>
                     <div className='flex flex-col w-1/2'>
                    <label className='font-medium capitalize mb-1 text-base' htmlFor="area">state</label>
                    <select  className='bg-red-100 outline-zinc-300  p-3 rounded' name="area" id="area">
                    {
                        apointmentdetails[state].area.map((appoint) => <option  className='bg-red-100 outline-zinc-300  p-3 rounded' value="abuju">{appoint}</option>
                        )
                       }
                    
                    </select>
                     </div>
            </div>
            <div className='flex flex-col'>
                 <label  className='font-medium capitalize mb-1 text-base' htmlFor="email">email</label>
                    <input className='bg-red-100 outline-zinc-300  p-3 rounded' type="email" placeholder='kuipid@mail.com' />
            </div>
            <div className='calendaar'>
                <div className='flex flex-col'>
                <label  className='font-medium capitalize mb-1 text-base' htmlFor="date">Select a date:(within 30 days)</label>
                <input className='bg-red-100 p-3 rounded'
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
                    <input className='bg-red-100 p-3 rounded outline-zinc-300 ' type="text" placeholder='Short description of appointment reason....' />
                </div>
            <button onClick={handleActivityClick} className='bg-orange-500 mr-auto ml-auto mt-0 mb-0 text-center cursor-pointer rounded-lg w-[150px] text-white h-[50px]'>Confirm</button>
        </form>
    </div>
     </div>
    </div>
  )
}

export default BookAppointment