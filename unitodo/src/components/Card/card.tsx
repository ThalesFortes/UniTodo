import styles from './card.module.css';
import { ITodo } from "../../interface";

interface CardProps {
  todos: ITodo[];
}

export function Card({ todos }: CardProps) {
  let countTodas = todos.length;
  let concluidas = todos.filter((todo) => todo.isDone).length;
  return (
    <section className={styles.card}>
      <div className={styles.head}>
        <div>
          <p>Tarefas Criadas</p>
          <span>{countTodas}</span>
        </div>

        <div>
          <p id={styles["completed"]}>Concluídas</p>
          <span>{concluidas} de {countTodas} </span>
        </div>
      </div>
    </section>
  );
}
