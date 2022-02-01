import { Component, OnInit } from '@angular/core';
import {CarbonService} from "../services/carbon.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public carbonService: CarbonService) { }

  ngOnInit(): void {
  }

  openForm(){
    this.carbonService.openForm();
  }

}
