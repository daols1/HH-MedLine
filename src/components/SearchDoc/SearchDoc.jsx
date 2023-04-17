import React, { useState } from 'react'
import {BiSlider} from "react-icons/bi"
import SearchDocComp from '../SearchDocComp/SearchDocComp'

function SearchDoc() {

    // Search state management

    const [search, setSearch] = useState ('')

    // Submit Handler 

    const handleSubmit = (e) => {
        // Prevent Default
        e.preventDefault()
        // Perform Search from the backend

        // Clear the search box
        setSearch('')
    }

  return (
    <>
        <div className=''>
            <div className='px-10 md:px-32 py-6 bg-slate-200'>
                <h2 className='font-bold text-lg md:text-xl pb-3'>Search a doc</h2>
                <form 
                className='flex flex-row gap-1'
                onSubmit={handleSubmit}
                >
                    <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    className='p-2 border-green-400 rounded-xl w-2/3'
                    onChange={(e)=> setSearch(e.target.value)}
                    value={search} 
                    
                    />
                    <BiSlider size={40} color='#fff' className='bg-green-600 hover:bg-green-800 rounded-md p-1 ' />
                    <button className='p-2 bg-green-600 hover:bg-green-800 text-white rounded-xl w-1/3' name='submit' id='submit'>Submit</button>
                </form>
                
            </div>
            <div className='bg-white px-10 md:px-32'>
                <SearchDocComp searchTerm={search} />
            </div>
        </div>
    </>
  )
}

export default SearchDoc