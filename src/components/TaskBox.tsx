import { useState } from 'react';

import styles from './TaskBox.module.css';
import { ClipboardText } from 'phosphor-react'
import { TaskItem } from './TaskItem';
import { Task } from '../App'

interface TasksProps {
  tasks: Task[];
  updateTask: (task:string, completed:boolean) => void;
  onDeleteTask: (task:string) => void;
}

export function TaskBox({tasks, updateTask, onDeleteTask}:TasksProps) {


  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter( task => task.completed === true).length

  return (
    <div className={styles.taskbox}>
      <header>
        <p className={styles.totalTasks}>Tarefas criadas <span className={styles.taskCount}>{totalTasks}</span></p>
        <p className={styles.doneTasks}>Concluidas <span className={styles.taskCount}>{totalCompletedTasks} de {totalTasks}</span></p>
      </header>


      {tasks.length <= 0 && <div className={styles.emptyTasksBox}>
        <ClipboardText size={52} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      }


      {tasks?.map(element => {
            return (
              <TaskItem
              key={element.content} 
              content={element.content} 
              completed={element.completed}
              onCheckTask={updateTask}
              deleteTask={onDeleteTask}
            />
            )
          } 
        )
      }
      
    </div>
  )
}