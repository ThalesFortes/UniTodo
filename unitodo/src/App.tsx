import {useState} from 'react';
import { Card } from './components/Card/card';
import { Header } from './components/Header/header';
import { UniList } from './components/uniList/unList';
import { ITodo, Todo } from './interface';
import './styles/styles.css';


export function App() {

  function addTodo(todo:Todo){
    setTodos([todo,...todos]);
  }
  
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [editingId, setEditingId] = useState<string| null>(null);

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
    setEditingId(null);
  }
  
  const deleteTodo =(DeleteTodoById:string)=>{
    setTodos(todos.filter((todos) =>todos.id !== DeleteTodoById))
  };
  
  

  const handleEditTodo = (id: string) => {
    setEditingId(id);
    const todoToEdit = todos.find((todos) => todos.id === id);
    if (todoToEdit) {
      setTodos(todoToEdit.s);
    }
  };



	return (
    <>
      <Header addTodo={addTodo}/>
      <Card/>
      <UniList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      
    </>)}


