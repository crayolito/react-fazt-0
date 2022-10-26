
import {useContext} from 'react'
import React from 'react'
import {TaskContext} from '../context/TaskContext'

function TasCard({task}) {

  const {deleteTask} = useContext(TaskContext)

  const {title,description,id} = task

  return (
    
    <div className='bg-gray-800 text-white p-4 rounded-md'>
                <h1 className='text-xl font-bold capitalize'>{title}</h1>
                <p className='text-gray-500  text-sm'>{description}</p>
                <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(id)}>
                  Eliminar Tarea
                </button>
     </div>
    
  )
}

export default TasCard
