import { UniTask } from './components/uniTask/uniTask';
import { useState } from 'react';
import { ITask } from './interface';
import{AiOutlinePlusCircle} from 'react-icons/ai'
import { Card } from './components/Card/card';
import './styles/styles.css'





export function App() {

  const[task,setTask] =  useState("")

  const[uniList, setUniList] = useState<ITask[]>([])

  function addTask(){
      const idRandom =(num: number) => Math.floor(Math.random() * num)
      console.log(idRandom(10))

      const newTask = {id: idRandom(9999999999),nameTask:task}

      setUniList([...uniList,newTask])
  }

  function deleteTask(DeleteTaskById: number){
    setUniList(uniList.filter((taskName) => taskName.id !== DeleteTaskById))}
  

	return (
		<div className="header"> 
			<header> 
        <p>UniTodo</p>
        <div className='div'>
				<input
					type="text" 
          autoComplete="off" 
					placeholder="Adicione uma nova tarefa" 
					name="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
				/>

				<button type="submit" onClick={addTask} >
          Criar 
          <AiOutlinePlusCircle size={17}/>
        </button>
        </div>
			</header> 
      <Card/>

      <div className='lists'>
      {uniList.map((task,key)=>(
			<UniTask key={key} task={task} deleteTask={deleteTask} />
      ))}
      </div>
		</div>)}


