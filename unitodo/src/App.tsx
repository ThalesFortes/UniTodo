import {useState} from 'react';
import { Card } from './components/Card/card';
import { Header } from './components/Header/header';
import { UniList } from './components/uniList/uniList';
import { ITodo, Todo } from './interface';

export function App() {

  const [todos, setTodos] = useState<ITodo[]>([]);

  function addTodo(todo:Todo){
    setTodos([todo,...todos]);
  }
  
  const toggleTodo =(selectedTodo: Todo)  => {
    const newTodos = todos.map(todo => {
      if (todo == selectedTodo){
        return{
          ...todo,
          isDone: !todo.isDone
        }
      };
      return todo;
    });
    setTodos(newTodos);
  }
  
  const deleteTodo =(DeleteTodoById:string)=>{
    setTodos(todos.filter((todos) =>todos.id !== DeleteTodoById))
  };

	return (
    <>
      <Header addTodo={addTodo}/>
      <Card todos ={todos} />
      <UniList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      
    </>)}


