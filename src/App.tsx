import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { TaskBox } from './components/TaskBox'
import  './global.css'

export interface Task {
  content: string;
  completed: boolean;
  
}

function App() {
  
  const [tasksList, setTasksList] = useState<Task[]>([]);

  function handleCreateTask(newTask:Task) {
    setTasksList([...tasksList, newTask])
  }
  function handleDeleteTask(taskToDelete:string) {
    const newTaskArray = tasksList.filter( taskItem => taskItem.content !== taskToDelete)
    setTasksList([...newTaskArray])
  }

  function updateTaskStatus(task:string, completed:boolean) {
    const newTaskArray = tasksList.filter( taskItem => taskItem.content !== task)    
    setTasksList([...newTaskArray, {content: task, completed:!completed}])
  }

  return (
    <>
      <Header />
      <Input addTask={handleCreateTask}/>
      <TaskBox tasks={tasksList} updateTask={updateTaskStatus} onDeleteTask={handleDeleteTask}/>
    </>
  )
}

export default App
