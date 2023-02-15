import { ITask } from '../../interface';
import {TbTrash} from 'react-icons/tb';
import './styles.css'

interface TaskProps{
    task: ITask
    deleteTask(DeleteTaskById:number):void
}

export function UniTask({task,deleteTask}:TaskProps) {
	
	return (
        
		<div className="list">
            <button className='checkContainer'>
            <div/>
            </button>
            <p>{task.nameTask}</p>
            <button className='deleteButton' onClick={()=> deleteTask(task.id)}>
                <TbTrash size={20}/>
            </button>
		</div>
	)
};



{uniList.map((task,key)=>(
    <UniTask key={key} task={task} deleteTask={deleteTask} />
))}