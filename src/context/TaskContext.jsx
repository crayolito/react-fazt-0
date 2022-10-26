import React,{createContext,useState,useEffect} from 'react';
import {tasks as data} from '../tasks';

export const TaskContext = createContext()

export function TaskContextProvider(props)  {
  const [Tasks, setTasks] = useState([]);

  function createTask(task){
    setTasks([...Tasks,{
      title: task.Title,
      id: Tasks.length,
      description: task.Description
    }])
  } 
  
  function deleteTask(TasksId){
    console.log(Tasks);
    console.log(TasksId);
    setTasks(Tasks.filter(task => task.id !== TasksId))
  }
  
  useEffect(()=>{
    setTasks(data)
  },[])

  return (
    <TaskContext.Provider value={{
      Tasks,
      createTask,
      deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
    )
}

