import styles from './empty.module.css'
import list from '../../assets/list.png'


export function EmptyList() {
  return (
    <div className={styles.empty_list}>
      <img src={list} alt="Imagem de uma Lista" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}