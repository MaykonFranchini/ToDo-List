import styles from './TaskBox.module.css';
import { ClipboardText } from 'phosphor-react'

export function TaskBox() {
  return (
    <div className={styles.taskbox}>
      <header>
        <p className={styles.totalTasks}>Tarefas criadas <span>0</span></p>
        <p className={styles.doneTasks}>Concluidas <span>0</span></p>
      </header>

      <div className={styles.emptyTasksBox}>
        <ClipboardText size={52} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}