import React, {useState,useEffect} from 'react'
import docimgtrans from '../../assets/docimgtrans.png'
import doc2 from '../../assets/doc2.png'
import doc3 from '../../assets/doc3.png'
import Select from 'react-select';
import { AiOutlineLeft ,AiOutlineRight  } from "react-icons/ai";
import './book.css'
import { motion } from 'framer-motion'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookAnAppointment = () => {
  
  const statesInNaija = [
     {
      state: "Abuja",
      cities: ["Abuja", "Kwali", "Bwari", "Gwagwalada", "Kuje"]
    },
    {
      state: 'Abia',
      cities: ['Aba', 'Umuahia', 'Ohafia', 'Arochukwu', 'Bende', 'Afikpo'],
    },
    {
      state: 'Adamawa',
      cities: [
        'Yola',
        'Jimeta',
        'Mubi',
        'Numan',
        'Ganye',
        'Guyuk',
        'Song',
        'Fufore',
      ],
    },
    {
      state: 'Akwa Ibom',
      cities: [
        'Uyo',
        'Eket',
        'Ikot Ekpene',
        'Oron',
        'Oron',
        'Ikot Abasi',
        'Ikono',
      ],
    },
    {
      state: 'Anambra',
      cities: [
        'Onitsha',
        'Awka',
        'Nnewi',
        'Oyi',
        'Ozubulu',
        'Obosi',
        'Aguata',
        'Aguleri',
      ],
    },
    {
      state: 'Bauchi',
      cities: [
        'Bauchi',
        'Azare',
        'Misau',
        'Ganjuwa',
        'Giade',
        'Jamaare',
        'Katagum',
        'Tafawa Balewa',
      ],
    },
    {
      state: 'Bayelsa',
      cities: [
        'Yenagoa',
        'Brass',
        'Nembe',
        'Ogbia',
        'Sagbama',
        'Southern Ijaw',
      ],
    },
    {
      state: 'Benue',
      cities: [
        'Makurdi',
        'Gboko',
        'Otukpo',
        'Vandeikya',
        'Katsina Ala',
        'Adikpo',
      ],
    },
    {
      state: 'Borno',
      cities: [
        'Maiduguri',
        'Biu',
        'Bama',
        'Dikwa',
        'Gwoza',
        'Kaga',
        'Konduga',
        'Chibok',
      ],
    },
    {
      state: 'Cross River',
      cities: [
        'Calabar',
        'Ugep',
        'Ikom',
        'Obudu',
        'Ogoja',
        'Akamkpa',
        'Boki',
      ],
    },
    {
      state: 'Delta',
      cities: [
        'Asaba',
        'Warri',
        'Sapele',
        'Agbor',
        'Abraka',
        'Ughelli',
        'Oleh',
        'Ozoro',
      ],
    },
    {
      state: 'Ebonyi',
      cities: [
        'Abakaliki',
        'Afikpo',
        'Onueke',
        'Ezza',
        'Ohaozara',
        'Ishielu',
        'Ivo',
      ],
    },
   
    {    state: "Ekiti",    cities: ["Ado-Ekiti", "Ikere", "Efon", "Ijero", "Oye"]
  },
  {
    state: "Enugu",
    cities: ["Enugu", "Nsukka", "Agbani", "Awgu", "Oji River"]
  },
  {
    state: "Edo",
    cities: ["Benin City", "Auchi", "Igarra", "Ekpoma", "Uromi"]
  },

  {
    state: "Gombe",
    cities: ["Gombe", "Bajoga", "Billiri", "Dukku", "Kaltungo"]
  },
  {
    state: "Imo",
    cities: ["Owerri", "Okigwe", "Orlu", "Mbaise", "Ngor Okpala"]
  },
  {
    state: "Jigawa",
    cities: ["Dutse", "Gumel", "Birnin Kudu", "Kazaure", "Gwaram"]
  },
  {
    state: "Kaduna",
    cities: ["Kaduna", "Zaria", "Kafanchan", "Soba", "Makarfi"]
  },
  {
    state: "Kano",
    cities: ["Kano", "Wudil", "Kibiya", "Takai", "Danbatta"]
  },
  {
    state: "Katsina",
    cities: ["Katsina", "Daura", "Kankia", "Funtua", "Charanchi"]
  },
  {
    state: "Kebbi",
    cities: ["Birnin Kebbi", "Jega", "Yauri", "Zuru", "Argungu"]
  },
  {
    state: "Kogi",
    cities: ["Lokoja", "Idah", "Okene", "Ajaokuta", "Kabba"]
  },
  {
    state: "Kwara",
    cities: ["Ilorin", "Offa", "Omu-Aran", "Pategi", "Lafiagi"]
  },
  {
    state: "Lagos",
    cities: ["Lagos Island", "Ikeja", "Badagry", "Epe", "Ikorodu"]
  },
  {
    state: "Nasarawa",
    cities: ["Lafia", "Keffi", "Akwanga", "Nasarawa", "Wamba"]
  },
  {
    state: "Niger",
    cities: ["Minna", "Bida", "Suleja", "Kontagora", "New Bussa"]
  },
  {
    state: "Ogun",
    cities: ["Abeokuta", "Ijebu Ode", "Shagamu", "Ifo", "Sango-Ota"]
  },
  {
    state: "Ondo",
    cities: ["Akure", "Ondo", "Owo", "Igbara-Oke", "Ikare"]
  },
  {
    state: 'Osun',
    cities: ['Osogbo', 'Ile-Ife', 'Ila Orangun', 'Ikire', 'Ede']
  },
  {
    state: 'Oyo',
    cities: ['oyo', 'Oyo', 'Ogbomoso', 'Iseyin', 'Saki']
  },
 
  {
    state: 'Plateau',
    cities: ['Barkin Ladi', 'Bokkos', 'Jos', 'Langtang', 'Mangu', 'Pankshin', 'Shendam'],
  },
  {
    state: 'Rivers',
    cities: ['Abua', 'Ahoada', 'Akuku Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Emohua', 'Eleme', 'Etche', 'Gokana', 'Ikwerre', 'Khana', 'Obio-Akpor', 'Ogba-Egbema-Ndoni', 'Ogu–Bolo', 'Okrika', 'Omuma', 'Opobo–Nkoro', 'Oyigbo', 'rivers', 'Tai'],
  },
  {
    state: 'Sokoto',
    cities: ['Binji', 'Bodinga', 'Dange Shuni', 'Gada', 'Goronyo', 'Gudu', 'Gwadabawa', 'Illela', 'Isa', 'Kebbe', 'Kware', 'Rabah', 'Sabon Birni', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tangaza', 'Tureta', 'Wamako', 'Wurno', 'Yabo'],
  },
  {
    state: 'Taraba',
    cities: ['Ardo-Kola', 'Bali', 'Donga', 'Gashaka', 'Gassol', 'Ibi', 'Jalingo', 'Karim Lamido', 'Kumi', 'Lau', 'Sardauna', 'Takum', 'Ussa', 'Wukari', 'Yorro', 'Zing'],
  },
  {
    state: 'Yobe',
    cities: ['Bade', 'Bursari', 'Damaturu', 'Fika', 'Fune', 'Geidam', 'Gujba', 'Gulani', 'Jakusko', 'Karasuwa', 'Machina', 'Nangere', 'Nguru', 'Potiskum', 'Tarmuwa', 'Yunusari', 'Yusufari'],
  },
  {
    state: 'Zamfara',
    cities: ['Anka', 'Bakura', 'Birnin Magaji-Kiyaw', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura-Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Talata-Mafara', 'Zurmi'],
  },
  ]
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
{
  id:6,
  name:"lagos Kuipid Adegoke",
  speciality:"charm",
  desc:"Well known doctor in the aspect of pathology",
  available:true,
  img:doc3,
  location:'lagos',
},
{
  id:7,
  name:"lagos Kuipid Adegoke",
  speciality:"charm",
  desc:"Well known doctor in the aspect of pathology",
  available:true,
  img:docimgtrans,
  location:'lagos',
},
{
  id:8,
  name:"lagos Kuipid Adegoke",
  speciality:"charm",
  desc:"Well known doctor in the aspect of pathology",
  available:true,
  img:doc2,
  location:'lagos',
},
]
const hospitals = [
  { name: "ABC Hospital", location: "Abuja" },
  { name: "XYZ Hospital", location: "Lagos" },
  { name: "Sunrise Hospital", location: "Kano" },
  { name: "Grace Hospital", location: "Benin" },
  { name: "LifeCare Hospital", location: "rivers" },
  { name: "Hope Hospital", location: "oyo" },
  { name: "Eko Hospital", location: "Lagos" },
  { name: "Trinity Hospital", location: "Enugu" },
  { name: "Aso Hospital", location: "Abuja" },
  { name: "Peace Hospital", location: "Jos" },
  { name: "Bridge Hospital", location: "Calabar" },
  { name: "Heritage Hospital", location: "Kaduna" },
  { name: "Mediwell Hospital", location: "Lagos" },
  { name: "Noble Hospital", location: "Benin" },
  { name: "Globe Hospital", location: "Kano" },
  { name: "Prime Hospital", location: "Abuja" },
  { name: "Mediplus Hospital", location: "Lagos" },
  { name: "Greenwood Hospital", location: "rivers" },
  { name: "Divine Hospital", location: "oyo" },
  { name: "Mercy Hospital", location: "Lagos" },
  { name: "Healthplus Hospital", location: "Enugu" },
  { name: "Redeemed Hospital", location: "Abuja" },
  { name: "Evergreen Hospital", location: "Lagos" },
  { name: "Holy Hospital", location: "Benin" },
  { name: "Alpha Hospital", location: "Kano" },
  { name: "Samaritan Hospital", location: "oyo" },
  { name: "Elite Hospital", location: "rivers" },
  { name: "Trust Hospital", location: "Lagos" },
  { name: "Crest Hospital", location: "Enugu" },
  { name: "Herbal Hospital", location: "Abuja" },
  { name: "Royal Hospital", location: "Kaduna" },
  { name: "Newlife Hospital", location: "Lagos" },
  { name: "Global Hospital", location: "Benin" },
  { name: "Excel Hospital", location: "Kano" },
  { name: "Rapha Hospital", location: "oyo" },
  { name: "King's Hospital", location: "rivers" },
  { name: "Golden Hospital", location: "Lagos" },
  { name: "Adeoyo Hospital", location: "oyo" },
  { name: "Union Hospital", location: "Enugu" },
  { name: "Fortune Hospital", location: "Lagos" },
  { name: "Optima Hospital", location: "Abuja" },
  { name: "Emmanuel Hospital", location: "Kaduna" },
  { name: "Mayflower Hospital", location: "Lagos" },
  { name: "Sovereign Hospital", location: "Benin" },
  { name: "Goodwill Hospital", location: "Kano" },
  { name: "Savannah Hospital", location: "plateau"},
]
  const [displayedDoc, setDispalayedDoc] = useState('');

  const [finalAppointMentForm, setFinalAppointMentForm] = useState([])
   // Create an initial state for appointments
  

    const today = new Date();
  const maxDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    const [doctorNum, setDoctorNum] = useState(0)
    console.log(doctorNum)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
 
    const [mail, setMail] = useState('');
   
    const [addMessage, setAddMessage] = useState('');
    const [department, setDepartment] = useState('');
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedHospital, setSelectedHospital] = useState("");
    const filteredDocs = doctors.filter((loc)=> loc.location===`${selectedState.toLowerCase()}`
    )

    function handleStateChange(e) {
      setSelectedState(e.target.value);
      setSelectedCity('');

    }
    function handleAgeChange(e) {
      setAge(e.target.value);
     

    }
    function handleHeightChange(e) {
      setHeight(e.target.value);
     

    }
    function handleAdditionMsgChange(e) {
      setAddMessage(e.target.value);
     

    }
    function handleBloodChange(e) {
      setBloodGroup(e.target.value);
     

    }
    const handleCityChange = (e) => {
      setSelectedCity(e.target.value);
    };
  const handleDepartment = (e)=>{
    setDepartment(e.target.value)
  }
  const handleFirstname = (e)=>{
    setFirstName(e.target.value)
  }
  const handleLastName = (e)=>{
    setLastName(e.target.value)
  }
  const handleMail = (e)=>{
    setMail(e.target.value)
  }
    const handleHospitalChange = (e) => {
      setSelectedHospital(e.target.value);
    };
  
    const citiesInSelectedState = statesInNaija.find(
      (state) => state.state === selectedState
    )?.cities;
    const hospitalsInSelectedState = hospitals.filter(
      (state) => state.location.toLowerCase() === selectedState.toLowerCase()
    );
  
   console.log(hospitalsInSelectedState)
  
    
    const handleClickLeft = () => {
        setDoctorNum(prev => prev===0 ? filteredDocs.length-1 : prev-1)
      
    }
    const handleClickRight = () => {
        setDoctorNum(prev => prev===filteredDocs.length-1 ? 0 : prev+1)

    }


    const [error, setError] = useState('')
    const [healthFormDisplay, setHealthFormDisplay] = useState(false)
 
    const [appointments, setAppointments] = useState([]);

  const handleActivityClick = (event) => {
    event.preventDefault()
if (!firstName || !lastName) {
  setError('You Must Input Your Name')
  return  toast.warning(error)
}
if (!mail ) {
  setError('You Must Input Your Mail')
  return toast.warning(error)
}
if (!selectedState ) {
  setError('You Must Input Your State')
  return toast.warning(error)
}
if (!selectedCity ) {
  setError('You Must Choose Your City')
  return toast.warning(error)
}
if (!filteredDocs[doctorNum]) {
  setError('You Must Choose A Doctor')
 return toast.warning(error)
}


 
 


    // Get the selected date and time from the form
    const selectedDate = event.target.elements.date.value;
    
    const selectedTime = event.target.elements.time.value;
if (!selectedDate || !selectedTime ) {
  toast.warning('You Must Input Appointement Date and Time ')
}
    // Check if there are already 4 appointments booked in the selected hour
    const appointmentsInSelectedHour = appointments.filter((appointment) => {
      return appointment.date === selectedDate && appointment.time === selectedTime;
    });

    // Check if there is an appointment within the 15-minute time range of the selected time
    const fifteenMinutes = 15 * 60 * 1000;
    const isWithinFifteenMinutes = appointments.some((appointment) => {
      const appointmentTime = new Date(`${appointment.date}T${appointment.time}`);
      const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
      return Math.abs(selectedDateTime - appointmentTime) < fifteenMinutes;
    });

    if (appointmentsInSelectedHour.length >= 4) {
      toast.warning('Sorry, all appointments in this hour are already booked.');
      return;
    }

    if (isWithinFifteenMinutes) {
      toast.warning('Sorry, you cannot make another appointment within 15 minutes of your previous appointment.');
      return;
    }

    // Create a new appointment object and add it to the appointments state
    const newAppointment = { date: selectedDate, time: selectedTime };
    setAppointments([...appointments, newAppointment]);
  
    const finalForm = {
      details:{
        nameOfPatient: firstName + ' ' + lastName,
        doctorSelected: filteredDocs[doctorNum],
        patientMail: mail,
      },
      location:{
        state : selectedState,
        city: selectedCity,
        hospital : selectedHospital || null,
      },
      appointmentTime:{
        time:selectedTime,
        date: selectedDate,
      }
    }
    setFinalAppointMentForm([... finalAppointMentForm , finalForm])
    toast.success("Appointment Booked")
  
  }
    console.log(finalAppointMentForm)

    
  // Handle form submission to book an appointment

   
  return (
    <>
  
      <ToastContainer className='z-50' />
  <motion.div initial={{
           
           translateY:40,
         }}
         whileInView={{
          
           translateY:0,
         }}
        
         transition={{
           damping:80,
           duration:.8,
         }}  className='bookappointmentContainer h-fit overflow-hidden  relative px-10 md:px-32  '>
  <div className='absolute w-fit rounded-full  left-3 md:right-0 top-0.5 md:top-4 text-white p-2 bg-green-500'>
      <small className='font-bold text-sm flex'> <span className=' hidden md:flex'> Appointments:  </span>  {appointments.length }</small>
    </div>
 <div className=' w-full h-fit md:h-screen justify-center items-center flex top-0 mt-2 left-0 relative md:sticky'>
 <motion.div 
      className=" leftContAppoint  relative w-fit h-fit shadow-2xl justify-center items-center flex rounded-lg  p-8">
      
{
  
    filteredDocs.length!==0 ?  <div onClick={handleClickLeft} className="absolute  bottom-[190px]  left-[-37px] flex justify-center z-0 md:-left-10  items-center p-5 bg-green-600 hover:bg-green-400 transition duration-300 ease-in-out  rounded-full cursor-pointer ">
    <AiOutlineLeft  className=' cursor-pointer text-white'/>
</div> : null 
}
       
{
  
  filteredDocs.length!==0 ?  <div onClick={handleClickRight} className="absolute bottom-[190px]  z-30 right-[-30px]   p-5 bg-green-600  rounded-full cursor-pointer hover:bg-green-400 transition duration-300 ease-in-out ">
  <AiOutlineRight  className=' cursor-pointer text-white'/>
</div> : null 
}  
         
         {
          filteredDocs.length!==0 ?   <motion.div
          
           className="flex  w-full h-fit p-2 md:h-[500px]  justify-start rounded-3xl z-0  items-center flex-col mr-4">
            <h3 className=' font-bold text-green-400  mb-4  capitalize'>Available Doctors Close to {  selectedState} </h3>
      
          <div className="w-[100%] pl-2 h-[250px] z-0 flex justify-center items-center rounded-3xl bg-green-600 " >
          <motion.img initial={{
           
            translateZ:-100,
          }}
          whileInView={{
           
            translateZ:0,
          }}
         
          transition={{
            damping:80,
            duration:.5,
          }}  src={filteredDocs[doctorNum] ?  filteredDocs[doctorNum]?.img : filteredDocs[0]?.img} className=' w-[200px] object-contain h-full' alt="doc" />
          </div>
          <div className="w-full flex text-justify justify-start flex-col  mt-3 pl-4">
          <h1 className=' font-bold text-base  mb-1'>{  filteredDocs[doctorNum] ?   filteredDocs[doctorNum]?.name : filteredDocs[0]?.name }</h1>
          <p className='font-light text-gray-800 text-xl'>{filteredDocs[doctorNum] ? filteredDocs[doctorNum]?.speciality : filteredDocs[0]?.speciality}</p>
         <p className=' text-gray-800 text-sm  text-ellipsis font-bold'>{filteredDocs[doctorNum] ? filteredDocs[doctorNum]?.desc : filteredDocs[0]?.desc}</p>

          </div>
           </motion.div> : 
           <motion.div initial={{
            opacity: 0.1,
            translateX:-100,
          }}
          animate={{
            opacity: 1,
            translateX:0,
          }}
         
          transition={{
            damping:80,
            duration:.6,
          }} className=" relative w-full bg-red-100 justify-center rounded-3xl h-[300px] items-center flex mr-4">
          <span className=' p-1 rounded-xl bg-green-100 absolute pr-2 pl-2 left-16 top-2 text-gray-500 text-sm' >Select a state to see doctors close by </span>
          
          <div className="w-fit p-4 h-fit flex text-justify justify-start flex-col  mt-3 pl-4">
          <h1 className='  text-sm font-medium text-gray-800  mb-1'>No Doctor Available close to your Location (Choose From Any State with a doctor for an over the internet appointment)</h1>
          

          </div>
           </motion.div>
         }
      
    </motion.div>
 </div>
 
    
    {
      !healthFormDisplay ? 
    <div className="right w-full  md:w-[50%]  mt-8">
        <h1 className='mb-4 text-2xl font-light text-gray-500'>Appointment Form</h1>
        <motion.form initial={{
           
           translateX:100,
         }}
         whileInView={{
          
           translateX:0,
         }}
        
         transition={{
           damping:80,
           duration:.5,
         }} onSubmit={handleActivityClick} className='w-full  p-2 md:p-1 flex flex-col  gap-8' >
            <div className=' md:flex flex-col justify-between' >
                <div className='flex flex-col'>
                    <label className='font-medium capitalize mb-1 text-base' htmlFor="firstname">firstname</label>
                    <input onChange={handleFirstname} value={firstName} className='bg-green-100  p-3 outline-zinc-300 rounded' type="text" placeholder='Stephen' />
                </div>
                <div className='flex flex-col'>
                    <label  className='font-medium capitalize mb-1 text-base' htmlFor="lastname">lastname</label>
                    <input onChange={handleLastName} value={lastName} className='bg-green-100  outline-zinc-300  p-3 rounded' type="text" placeholder='Adegoke' />
                </div>
            </div>

            <div className="flex flex-col gap-8">
            <label className='font-medium capitalize mb-1 text-base' htmlFor="Dept">Choose Department</label>
                   
              <select  className='bg-green-100  outline-zinc-300  p-3 rounded' name="department" id="department" onChange={handleDepartment}>
            {["Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", "Hematology", "Neurology", "Oncology", "Orthopedics", "Pediatrics", "Psychiatry", "Pulmonology", "Radiology", "Surgery"].map((dept) => (
              <option value={dept}>{dept}</option>
            ))            }  
              </select>
           </div>
             <div className=' flex justify-between gap-8' >
                <div className='flex gap:8 h-fit w-full gap-8'>
                  <div className='flex flex-col'>
                  <label className='font-medium  capitalize mb-1 text-base' htmlFor="state"> States</label>
                   
                   <select onChange={handleStateChange} required  className=' w-full bg-green-100  outline-zinc-300  p-3 rounded'>
                   <option value=''>Select State</option>
 {statesInNaija.map((state) => (
    <option key={state.state} value={state.state}>
    {state.state}
  </option>
 ))}
</select>
                  </div>
                     </div>
                   
                    
            </div>
            <div >
            {selectedState && (
        <select
        
        className='bg-green-100 h-[50px] w-full mt-4 outline-zinc-300  p-3 rounded'
          // value={selectedCity}
          required
          onChange={handleCityChange}
        >
          <option value=''>Select City</option>
          {citiesInSelectedState &&
            citiesInSelectedState.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      )}
           
            </div>
           <div className='flex flex-col'>
                     <label className='font-medium  capitalize mb-1 text-base' htmlFor="state"> Hospitals Close To You</label>

                {selectedState && (
        <select
        className='bg-green-100 mt-4 outline-zinc-300  p-3 rounded'
          // value={selectedHospital}
          onChange={handleHospitalChange}
        >
          <option value=''>Select Hospital</option>
          {hospitalsInSelectedState &&
            hospitalsInSelectedState.map((hospital) => (
              <option key={hospital.name} value={hospital.name}>
                {hospital.name}
              </option>
            ))}
        </select>
      )}
                     </div>
            <div className='flex flex-col'>
                 <label  className='font-medium capitalize mb-1 text-base' htmlFor="email">email</label>
                    <input onChange={handleMail} value={mail} className='bg-green-100  outline-zinc-300  p-3 rounded' type="email" placeholder='kuipid@mail.com' />
            </div>
          
            <div className='flex flex-col'>
                    <label className='font-medium capitalize mb-1 text-base' htmlFor="date">Select a date:</label>
                    <input className='bg-green-100  p-3 rounded outline-zinc-300 ' type="date" id="date" name="date" required/>
                </div>
                   <div className='flex flex-col'>
                    <label className='font-medium capitalize mb-1 text-base' htmlFor="time">Select a time:</label>
                    <input className='bg-green-100  p-3 rounded outline-zinc-300 'type="time" id="time" name="time" required/>
                </div>
            <button type='submit' className='mb-8 bg-green-600  mr-auto ml-auto mt-0  text-center cursor-pointer rounded-lg w-[150px] text-white h-[50px]'>Confirm</button>
        </motion.form>
    </div> : null
    }
     </motion.div>

    
     </>
  )
}

export default BookAnAppointment