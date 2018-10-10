import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/Patient'; 
import { PatientQueueService } from '../service/patient-queue.service'; 
import { Patient_queue } from '../model/Patient_queue'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private noSearch = true; 
  private patient: Patient; 
  private $queue: Patient_queue; 
  
  constructor(private _queue: PatientQueueService) { }

  ngOnInit() {
  }

  onSearch(patient) {
    this.noSearch = false; 
    this.patient = patient; 
  }

  queue(){
    this._queue.queue(this.patient.id).subscribe(
      (patient) => {
        
      }
    )
  }

  dequeue(){

  }
}
