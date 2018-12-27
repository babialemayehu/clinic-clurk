import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Patient } from '../model/Patient';
import { Patient_queue } from '../model/Patient_queue'; 
import { RootURL } from '../model/RootURL';

@Injectable({
  providedIn: 'root'
})
export class PatientQueueService {

  constructor(public _http: HttpClient) { }
  
  private root = RootURL;  

  queue(patient_id: number): Observable<Patient_queue>{
    const URL = this.root+"/ajax/post/queue/add/"+patient_id; 
    return this._http.post<Patient_queue>(URL, {}); 
  }

  dequeue(patient_id: number): Observable<Patient>{
    const URL = this.root+"/ajax/post/queue/remove"+patient_id; 
    return this._http.put<Patient>(URL, {}); 
  }

  remove(patinet_id: number): Observable<Patient>{
    const URL = this.root+"/ajax/delete/queue/"+patinet_id; 
    return this._http.delete<Patient>(URL, {}); 
  }

  visits(patient_regId: string, limit: number = -1): Observable<Patient_queue[]>{
    const URL = this.root+"/ajax/get/queue/visits/"+patient_regId+"/"+limit; 
    return this._http.get<Patient_queue[]>(URL); 
  }

  queue_list(limit = -1): Observable<Patient_queue[]>{
    const URL = this.root+"/ajax/get/queue/patients in queue/"+limit;
    return this._http.get<Patient_queue[]>(URL); 
  }

  isQueued(patient_id: number): Observable<number>{
    const URL = this.root+"/ajax/get/queue/is in queue/"+patient_id; 
    return this._http.get<number>(URL); 
  }
}
