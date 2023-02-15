import { v4 as uuid} from 'uuid'; 


export interface ITodo{
  id:string;
  description:string;
  isDone:boolean;
}



export class Todo implements ITodo{
  id: string;
  description:string;
  isDone:boolean

  constructor(description: string ='' , isDone: boolean = false){
    this.id = uuid();
    this.description = description;
    this.isDone = isDone
  }
}


