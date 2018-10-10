import { Component, OnInit, Input } from '@angular/core';
import { Patient_queue } from '../model/Patient_queue'; 
import { PatientQueueService } from '../service/patient-queue.service'; 

@Component({
  selector: 'app-queue-min',
  templateUrl: './queue-min.component.html',
  styleUrls: ['./queue-min.component.scss']
})
export class QueueMinComponent implements OnInit {

  private queues: Patient_queue[] = []; 

  constructor(private _queue: PatientQueueService) { }

  ngOnInit() {
    this.load(); 
    setInterval(() => {
      this.load()
    }, 10000); 
  }
  
  load(){
    this._queue.queue_list(7).subscribe(
      (responce) => {
        this.queues = responce; 
      }
    )
  }
}
