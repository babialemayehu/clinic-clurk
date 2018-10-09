import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private noSearch = true; 
  private patient; 
  
  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    this.noSearch = false; 
  }

  queue(){

  }

  dequeue(){

  }
}
