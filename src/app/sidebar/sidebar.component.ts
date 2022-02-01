import {Component, OnInit} from '@angular/core';
import {CarbonService} from "../services/carbon.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public carbonService: CarbonService) { }

  ngOnInit(): void {
  }

  removeTodo(id: number){
    this.carbonService.removeTodo(id)
  }

  initTodo(id: number){
    this.carbonService.initTodo(id)
  }

}
