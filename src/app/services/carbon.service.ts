import {Injectable} from "@angular/core";

export interface Todo {
  id: number
  title: string
  text: string
  isActive: boolean
}

@Injectable({providedIn: 'root'})
export class CarbonService {
  public todos: Todo[] = [
    {id: 1, title: "Заметка 1", text: "Текст заметки 1", isActive: true},
    {id: 2, title: "Заметка 2", text: "Текст заметки 2", isActive: false},
    {id: 3, title: "Заметка 3", text: "Текст заметки 3", isActive: false},
    {id: 4, title: "Заметка 4", text: "Текст заметки 4", isActive: false},
  ];

  public initText: string = this.todos[0].text;
  public initTitle: string = this.todos[0].title;

  public formIsActive = false;

  removeTodo(id: number){
    this.todos = this.todos.filter(t => t.id !== id);
    this.initText = '';
    this.initTitle = '';
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    this.closeForm();
  }

  initTodo(id: number){
    this.initText = this.todos.filter(t => t.id === id)[0].text;
    this.initTitle = this.todos.filter(t => t.id === id)[0].title;
    this.todos.map(todo=>{todo.id === id ? todo.isActive = true : todo.isActive = false;})
  }

  closeForm(){
    this.formIsActive = false;
  }

  openForm(){
    this.formIsActive = true;
  }
}
