import { useState, ChangeEvent, FormEvent } from 'react'

import { PlusCircle } from 'phosphor-react'
import { Task } from '../App';

import styles from './Input.module.css';

interface InputProps {
  addTask: (task:Task) => void;
}

export function Input({addTask}:InputProps) {

  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
   setNewTaskText(event.target.value);
   console.log(newTaskText);
  }

  function handlecreateNewTask(event: FormEvent) {
    event.preventDefault()

    addTask({
      content: newTaskText,
      completed: false
    })

    setNewTaskText('')
  }


  return (
    <div className={styles.wrapper}>
      <form onSubmit={handlecreateNewTask}>
        <input onChange={handleNewTask} value={newTaskText} className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">Criar<PlusCircle /></button>
      </form>
    </div>
  )
}