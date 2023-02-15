import {v4 as uuid} from 'uuid';
import {TbTrash} from 'react-icons/tb';
import { Todo } from '../../interface';
import './styles.css';


interface TodoListProps{
    todos:Todo[]
    toggleTodo:(selectedTodo:Todo) => void
    deleteTodo:(DeleteTodoById:string) => void
}



export function UniList({todos,toggleTodo,deleteTodo}:TodoListProps){

    return(
        <div className='lists'>
            <ul>
                {todos.map((todos) =>{
                    return(
                        <li key={todos.id} className={todos.isDone ? "isDone":undefined}>
                            <input type='checkbox' 
                                    
                                    checked={todos.isDone} 
                                    onChange={() => toggleTodo(todos)}/>
                            {todos.description}
                            <button className='deleteButton'  onClick={() => deleteTodo(todos.id)}>
                            <TbTrash size={20}/>
                            </button>
                        </li>
                    )
                })}
            </ul>

      </div>
    )
    
}

