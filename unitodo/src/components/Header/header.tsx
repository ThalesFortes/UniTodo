import {useState} from "react";
import{AiOutlinePlusCircle} from 'react-icons/ai';
import { Todo } from "../../interface";
import styles from './header.module.css';

interface TodoInputProps{ 
    addTodo:any
}

export function Header ({addTodo}:TodoInputProps){

    const todoObj : Todo = new Todo();

    const[todo, setTodo] = useState(todoObj);
    
    function handleTodoChange(event: React.ChangeEvent<HTMLInputElement>)
     {
        setTodo({...todo,description: event.target.value})
        
    }

    function submitTodo(event:any){
        event.preventDefault();
        console.log('todo',todo)
        addTodo(todo);
        setTodo(todoObj);
    }
     
    return(
    <div className={styles.header}> 
        <header> 
            <h1>UniTodo</h1>
            <form onSubmit={submitTodo} className={styles.form}>
                <input
                    type="text" 
                    name="todo"
                    value= {todo.description}
                    onChange = {handleTodoChange}/>
                <button type="submit" >
                    Criar 
                    <AiOutlinePlusCircle size={17}/>
                </button>
            </form>
        </header> 
    </div>
    )
}