import { Trash, Check } from 'phosphor-react';
import styles from './TaskItem.module.css'
export function TaskItem() {
  return (
    <div className={styles.taskList}>
      <div>
        <label htmlFor="task">
          <input type="checkbox" id='task' />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <span className={styles.taskCheckbox}></span>
        </label>
      </div>
      <span className={styles.deleteIcon}>
        <Trash size={16} />
      </span>
    </div>
  )
}