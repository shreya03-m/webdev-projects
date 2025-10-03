import React from 'react'
import { WiCloudy } from "react-icons/wi";
import "./Hourlyforecast.css"
import { FaChevronLeft } from "react-icons/fa"; 
import { FaChevronRight } from "react-icons/fa"; 
import { useRef } from 'react'; 
    
function Hourlyforecast ({hourlyData}) {

const scrollRef=useRef(null)

 //scroll functions
 const scrollLeft =()=>{
    scrollRef.current.scrollBy({left:-300, behavior:'smooth'})
 }

  const scrollRight =()=>{
    scrollRef.current.scrollBy({left:300, behavior:'smooth'})
 }
  return (
    <div className='relative mt-6'>
        <div  ref={scrollRef} className='flex gap-4 mx-10 py-2 overflow-x-auto scrollbar-hide' style={{scrollBehavior:'smooth'}}> 
      {
        hourlyData.map((hour, index) => (
          <div 
            key={index}  // ✅ always add a key
            className='flex flex-col items-center shadow-lg bg-blue-300 py-2 rounded px-4'
          >
            <p>{new Date(hour.time).getHours()}:00</p>
            <img 
              src={hour.condition.icon}
              alt="weather icon"
              className='w-10 mx-auto'
            />
            <p>{hour.temp_c}°C</p>
          </div>
        ))
      }

       
        </div>
        {/* Buttons */}
        <button onClick={scrollLeft}><FaChevronLeft className='absolute left-0 top-1/3 w-6 h-6 p-0.5 bg-blue-400 text-amber-50  transform -translate-y-0.5 rounded-full flex items-center justify-center '/></button>

        <button onClick={scrollRight}><FaChevronRight className='absolute right-0 top-1/3 w-6 h-6 p-0.5 bg-blue-400 text-amber-50 transform -translate-y-0.5 rounded-full flex items-center justify-center'/></button>
    
    </div>
  )
}

export default Hourlyforecast
