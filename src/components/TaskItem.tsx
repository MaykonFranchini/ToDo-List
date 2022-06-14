import { Trash } from 'phosphor-react';
import styles from './TaskItem.module.css'
import { Task } from '../App'

interface TaskProps extends Task {
  onCheckTask: (task:string, completed:boolean)=> void;
  deleteTask: (task:string)=> void;
}

export function TaskItem({content, completed, onCheckTask, deleteTask}:TaskProps) {

  function updatetask() {
    onCheckTask(content, completed)
  }
  function handleDeleteTask() {
    deleteTask(content)
  }
  
  return (
    <div className={styles.taskList}>
      <div>
        <label htmlFor={content}>
          <input type="checkbox" id={content} onChange={updatetask} checked={completed} />
          <p>{content}</p>
          <span className={styles.taskCheckbox}></span>
        </label>
      </div>
      <button className={styles.deleteIcon} onClick={handleDeleteTask}><Trash size={16} /></button>
    </div>
  )
}