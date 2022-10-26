import TasCard from "./TasCard"
import {TaskContext} from '../context/TaskContext'
import React,{useContext} from 'react';


function TaskList() {
    const {Tasks} =useContext(TaskContext)
    
    if(Tasks.length === 0){
        return  <h1 className="text-white text-4xl font-bold text-center">No Hay Tareas Aun</h1>
    }

    return (
    <div className="grid grid-cols-4 gap-2 ">
        {Tasks.map((task)=>(
           <TasCard key={task.id} task={task} />
        ))}
    </div>
  )
}

export default TaskList