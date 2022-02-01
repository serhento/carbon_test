import { Component, OnInit } from '@angular/core';
import {CarbonService, Todo} from "../services/carbon.service";

@Component({
  selector: 'app-carbon-form',
  templateUrl: './carbon-form.component.html',
  styleUrls: ['./carbon-form.component.scss']
})
export class CarbonFormComponent implements OnInit {

  todoTitle: string = '';
  todoText: string = '';

  constructor(public carbonService: CarbonService) { }

  ngOnInit(): void {
  }

  addTodo(){
    const todo: Todo = {
      title: this.todoTitle,
      text: this.todoText,
      id: Date.now(),
      isActive: false
    };
    this.carbonService.addTodo(todo);
    this.closeForm();
  }

  closeForm(){
    this.carbonService.closeForm();
    this.todoText = '';
    this.todoTitle = '';
  }
}
