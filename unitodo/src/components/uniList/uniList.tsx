import {TbTrash} from 'react-icons/tb';
import { Todo } from '../../interface';
import styles from './uniList.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';



interface TodoListProps{
    todos:Todo[]
    toggleTodo:(selectedTodo:Todo) => void
    deleteTodo:(DeleteTodoById:string) => void
}


export function UniList({ todos,toggleTodo,deleteTodo}:TodoListProps) {
        return(
        <div className={styles.list}>
        {todos.map((todos) =>{
    
       return (
        <div className={styles.div}>
          <button  key={todos.id} className={styles.checkContainer} onClick={() => toggleTodo(todos)}>
            {todos.isDone ? <BsFillCheckCircleFill /> : <div />}
          </button>
    
          <p className={todos.isDone ? styles.textCompleted : ""}>
            {todos.description}
          </p>

          <button className={styles.deleteButton} onClick={() => deleteTodo(todos.id)}>
            <TbTrash size={20} />
          </button>
        </div>
         )
        })}
        </div>
       
      )
    }

