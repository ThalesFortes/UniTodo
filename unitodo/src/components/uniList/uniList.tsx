import { TbTrash } from "react-icons/tb";
import { Todo } from "../../interface";
import styles from "./uniList.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface TodoListProps {
  todos: Todo[];
  setTodos: any;
  toggleTodo: (selectedTodo: Todo) => void;
  deleteTodo: (DeleteTodoById: string) => void;
}

export function UniList({
  todos,
  toggleTodo,
  deleteTodo,
  setTodos,
}: TodoListProps) {
  const updateTodo = (event:any, todoID:string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == todoID) {
        return {
          ...todo,
          description: event.target.value,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className={styles.list}>
      {todos.map((todo, index) => {
        return (
          <div className={styles.div} key={index}>
            <button
              className={styles.checkContainer}
              onClick={() => toggleTodo(todo)}
            >
              {todo.isDone ? <BsFillCheckCircleFill /> : <div />}
            </button>

           
              <input
                className={todo.isDone ? styles.textCompleted : ""}
                type="text"
                value={todo.description}
                onChange={(e) => updateTodo(e, todo.id)}
              />
         

            <button
              className={styles.deleteButton}
              onClick={() => deleteTodo(todo.id)}
            >
              <TbTrash size={20} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
