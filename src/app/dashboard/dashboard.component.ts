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
  private isQueued: boolean; 
  private load: number = 0; 
  constructor(private _queue: PatientQueueService) { }

  ngOnInit() {
  }

  onSearch(patient) {
    this.noSearch = false; 
    this.patient = patient; 
    this._queue.isQueued(patient.id).subscribe(
      (responce) => { 
          this.isQueued =(responce > 0);
          this.load++; 
      }
    )
  }

  queue(){
    this._queue.queue(this.patient.id).subscribe(
      (patient) => {
        this.isQueued = true; 
        this.load++; 
      }
    )
  }

  dequeue(){
    this._queue.remove(this.patient.id).subscribe(
      (responce) => {
        this.isQueued = false; 
        this.load++; 
      }
    ); 
  }
}
