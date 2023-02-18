import { useState, useEffect } from "react";
import { Card } from "./components/Card/card";
import { Header } from "./components/Head/header";
import { UniList } from "./components/uniLists/uniList";
import { ITodo, Todo } from "./interface";
import { TemaContext, TemaProvider } from './components/Theme/context';
import { useContext } from 'react'

export function App() {
  const { isDarkMode } = useContext(TemaContext);

  const [todos, setTodos] = useState<ITodo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });  

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  function addTodo(todo: Todo) {
    setTodos([todo, ...todos]);
  }

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo == selectedTodo) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (DeleteTodoById: string) => {
    setTodos(todos.filter((todos) => todos.id !== DeleteTodoById));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TemaProvider>
      <div data-theme={isDarkMode ? "dark" : "light"}>
        <Header addTodo={addTodo} />
        <Card todos={todos} />
        <UniList
          setTodos={setTodos}
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </TemaProvider>
  );
}
