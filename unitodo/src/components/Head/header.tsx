import {useState} from "react";
import{AiOutlinePlusCircle} from 'react-icons/ai';
import { Todo } from "../../interface";
import darkStyles from './darkHeader.module.css';
import whiteStyles from './whiteHeader.module.css';
import { BsSun } from "react-icons/bs";
import { TbMoonStars } from "react-icons/tb";
import {  TemaContext,TemaProvider } from '../Theme/context'
import {useContext} from 'react'



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

    function submitTodo(event: any) {
        event.preventDefault();
        if (todo.description) {
          addTodo(todo.description ? todo : "teste");
          setTodo(todoObj);
        }
      }

      const {handledarkmode,isDarkMode} =  useContext(TemaContext)

    return(
        <header className={darkStyles.header}> 
            <h1 data-text="do"> UniTo</h1>
            <form onSubmit={submitTodo} className={darkStyles.form}>
                <input
                    id={isDarkMode? 'darkmode' :'whitemode'}
                    type="text" 
                    name="todo"
                    value= {todo.description}
                    placeholder="Adicione uma nova tarefa"
                    onChange = {handleTodoChange} />
                <button type="submit" >
                    Criar 
                    <AiOutlinePlusCircle size={17}
                  />
                </button>
            </form>
             <div className={darkStyles.iconsTheme} onClick={handledarkmode}  > {isDarkMode ? <BsSun/> : <TbMoonStars/> } </div>
        </header>
        

  
    )
}
