import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit {

  @Output() result = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.result.emit(); 
  }
}
