import "../Card/styles.css";
import { ITodo } from "../../interface";
import { useEffect } from "react";

interface CardProps {
  todos: ITodo[];
}

export function Card({ todos }: CardProps) {
  let countTodas = todos.length;
  let concluidas = todos.filter((todo) => todo.isDone).length;
  return (
    <section className="card">
      <div className="head">
        <div>
          <p>Tarefas Criadas</p>
          <span>{countTodas}</span>
        </div>

        <div>
          <p id="completed">Concluídas</p>
          <span>{concluidas}</span>
        </div>
      </div>
      <div className="lists"></div>
    </section>
  );
}
