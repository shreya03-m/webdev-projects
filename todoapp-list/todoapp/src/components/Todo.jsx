import React, { useEffect, useRef, useState } from 'react'
import { LuListTodo } from "react-icons/lu";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Todoitems from './Todoitems';

const Todo = () => {

  const [todoList, setTodoList]= useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")):[]);
  
      const inputRef =useRef();

      const add=()=>{
        const inputText=inputRef.current.value.trim();
        if(inputText=== ""){
          return null;
        }
        const newTodo={
          id: Date.now(),
          text : inputText,
          isComplete: false,
        }

        setTodoList((prev)=>[...prev, newTodo]);
        inputRef.current.value="";
      }

      
  const deleteTodo=(id)=>{
    setTodoList((prevTodo)=>{
     return prevTodo.filter((todo)=> todo.id!==id)
    })
  }

  const toggle=(id)=>{
    setTodoList((preTodo)=>{
      return preTodo.map((todo)=>{
        if(todo.id === id){
          return {...todo, isComplete:!todo.isComplete}
        }
        return todo;
      })
    })
  }

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todoList))
},[todoList])

  return (
     
    <div className='bg-white place-self-center w-3xl max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      
      {/* ------title------- */}

      <div  className='flex items-center mt-5 gap-2'>
        <LuListTodo className='w-8 h-8 '/>
        <h1 className='text-2xl font-medium'>To-do List</h1>
      </div>

      {/* ------inputbox------ */}

      <div  className='flex justify-evenly items-center my-7 rounded-b-sm  '>
        <input ref={inputRef} className='bg-gray-100  flex-1 h-8 pl-6 pr-2 pt-0.5 pb-0.5 border-none rounded-3xl placeholder:text-slate-900' type="text" placeholder='Add your new task'/>
        <button onClick={add} className='border-1 font-mono rounded-sm  bg-emerald-600 w-16 h-8 text-white ml-2'>Add+</button>
      </div>


      {/* -----todolist------- */}

      <div>
        {todoList.map((item, index)=>{
          return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
        })}
      </div>


    </div>
  )
}

export default Todo
