import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { BiRectangle } from "react-icons/bi";

const Todoitems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 '>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center gap-3 cursor-pointer '>{isComplete ?
        <TiTickOutline  className='w-5 h-5 bg-emerald-600 text-cyan-50 rounded' /> : <BiRectangle className='w-5 h-5 text-50 rounded'/>}
        <p className={`font-sans text-md font-500 ${isComplete ? "text-gray-400":"" }`}>{text}</p>
        </div>
        <MdDeleteOutline onClick={()=>{deleteTodo(id)}} className='w-6 h-6'/>
    </div>
  )
}

export default Todoitems
