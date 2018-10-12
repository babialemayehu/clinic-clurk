import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../model/Patient'; 
import { PatientService } from '../service/patient.service';
import { Patient_queue } from '../model/Patient_queue'; 
import { PatientQueueService } from '../service/patient-queue.service'; 

@Component({
  selector: 'app-recent-visits',
  templateUrl: './recent-visits.component.html',
  styleUrls: ['./recent-visits.component.scss']
})
export class RecentVisitsComponent implements OnInit {

  private visits: Patient_queue[]; 
  @Input()
  set patient(value: Patient){
    if(value){
      this._queue.visits(value.reg_id, 5).subscribe(
        (responce) => { 
          this.visits = responce; 
        }
      )
    }
  }

  constructor(private _queue: PatientQueueService) { }

  ngOnInit() {console.log(this.visits);
  }

}
