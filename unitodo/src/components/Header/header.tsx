import {useState} from "react";
import{AiOutlinePlusCircle} from 'react-icons/ai';
import { Todo } from "../../interface";
import styles from './header.module.css';
import list from '../../assets/list.png'
import bg from '../../assets/bg.png'


interface TodoInputProps{ 
    addTodo:any
}



export function Header ({addTodo}:TodoInputProps){

    const [image, setImage] = useState(list);
    const [showDefaultImage, setShowDefaultImage] = useState(true);



    const todoObj : Todo = new Todo();

    const[todo, setTodo] = useState(todoObj);
    
    function handleTodoChange(event: React.ChangeEvent<HTMLInputElement>)
     {
        setTodo({...todo,description: event.target.value})
        setShowDefaultImage(false);
        
    }

    function submitTodo(event:any){
        event.preventDefault();
        console.log('todo',todo)
        addTodo(todo);
        setTodo(todoObj);
        setImage(bg) ;
        setShowDefaultImage(false);
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
                    onChange = {handleTodoChange} />
                <button type="submit" >
                    Criar 
                    <AiOutlinePlusCircle size={17}
                  />
                </button>
            </form>
        </header>
        <div className={styles.list}>
        {showDefaultImage ? (
            <div>
            <img src={image} />
            <p>Select an image to upload</p>
          </div>
           ) : (
            <img src={image}  />
          )}
        </div> 
    </div>
  
    )
}