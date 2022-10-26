import React, { useState,useContext ,useEffect } from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskForm() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext)

  const handleSubmit =(e) => {
    e.preventDefault()
    createTask({
      Title,
      Description
    })
  setTitle('')
  setDescription('')
  }
  


  return (
    <div className='maw-w-md mx-auto'>
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
          <h1 className='text-2xl font-bold text-white mb-3'>Creat tu Tarea</h1>
            <input 
            className='bg-slate-300 p-3 w-full mb-2'
            placeholder='Escrite tu tarea'
            onChange={(e)=> setTitle(e.target.value)}
            value={Title}
            />
            <textarea 
            className='bg-slate-300 p-3 w-full mb-2'
            placeholder='Escribe la descripction de la tarea'
            onChange={(e) => setDescription(e.target.value)}
            value={Description}
            ></textarea>
            <button className='bg-indigo-500 px-3 py-1 text-white '>Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm