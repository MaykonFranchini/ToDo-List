import { PlusCircle } from 'phosphor-react'

import styles from './Input.module.css';

export function Input() {
  return (
    <div className={styles.wrapper}>
      <form>
        <input className={styles.input} type="text" />
        <button type="submit">Criar<PlusCircle /></button>
      </form>
    </div>
  )
}