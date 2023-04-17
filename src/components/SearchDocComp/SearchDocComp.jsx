import React from 'react'
import { docFetcher } from '../../utils/docFetcher'
import { useQuery } from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify'


function SearchDocComp({searchTerm}) {

    // Fetch Doctors

    const {data, isLoading, isError} = useQuery({
        queryKey:['doc-fetch'],
        queryFn: docFetcher,

    })

    // Toast settings

    // toast.promise(
    //     data, 
    //     {
    //         pending: "Chill", 
    //         success: "Search!!",
    //         error:"You no get good network"
    //     }
    // )

    if(isLoading){
        return(
            <div>Loading..</div>
        )
    }

    if (isError) {
        return(
            <div>Error Fetching Doc data</div>
        )
    }

    console.log(data.data)


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-6'>
        {data.data.map((item) => {
            return(
                <div 
                key={item.id}
                className='border flex flex-col rounded-t-xl'
                >   
                    <img 
                    src={item.imgLink} 
                    alt="" 
                    className='w-full h-60 bg-slate-50 rounded-t-xl'
                    />
                <div className='p-3 text-white bg-gradient-to-br from-green-600 to-green-800 flex flex-col gap-2 rounded-b-xl'>
                        <h1>{item.attributes.name}</h1>
                        <p>Specialty: {item.attributes.specialty}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default SearchDocComp