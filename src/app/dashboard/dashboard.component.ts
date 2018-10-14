import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/Patient'; 
import { PatientQueueService } from '../service/patient-queue.service'; 
import { Patient_queue } from '../model/Patient_queue'; 
import { RegisterationFormComponent } from '../registeration-form/registeration-form.component'; 
import { MatDialog, throwMatDuplicatedDrawerError } from '@angular/material'; 
import { PatientService } from '../service/patient.service'; 
import { AlertComponent } from '../alert/alert.component'; 
import { Router, ActivatedRoute} from '@angular/router'; 
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
  constructor(
    private _queue: PatientQueueService,
    private _patient: PatientService, 
    private _router: Router, 
    private _activeRoute: ActivatedRoute,
    private _dialog: MatDialog) { }

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

  edit(){
  
    let patinetDialog = this._dialog.open(RegisterationFormComponent, {
      width: "600px", 
      data:{
        patient: this.patient
      } 
    }); 

    patinetDialog.afterClosed().subscribe(
      (responce) => {
        this.patient = responce.data;  
      }
    ); 
  }

  delete(){
    let message = "Are you sure u want to delete <b> " + this.patient.first_name + "</b>"; 
    let alert = this._dialog.open(AlertComponent, {
      width: '400px', 
      data: {
        title: "Confirm",
        color: "yellow",
        message:  message, 
        dialog: 'confirm',
      }
    })
    alert.afterClosed().subscribe(
      (responce) => {
        console.log(responce); 
        if(responce.responce){
          this._patient.delete(this.patient.id).subscribe(); 
          this.noSearch = true;
        }
      }
    )
    
  }
}
