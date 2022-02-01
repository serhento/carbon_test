import { Component, OnInit } from '@angular/core';
import {CarbonService} from "../services/carbon.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(public carbonService: CarbonService) { }

  ngOnInit(): void {
  }

}
