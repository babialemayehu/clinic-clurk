import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'; 

import { Patient } from '../model/Patient';
import { PatientService } from '../service/patient.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit {

  @Output() patient = new EventEmitter(); 

  @Input()
  set search(key: string){
    this.searchControl.patchValue(key); 
    // this.$search(); 
  }

  private autocomplets: Patient[]; 
  private searchControl: FormControl;  

  constructor(private _patinet: PatientService, private _router:Router) {
    this.searchControl = new FormControl(); 
   }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(
      (val) => {
        if(val != ""){
          this._patinet.autoComplete(val).subscribe(
            (patients: Patient[]) => {
              this.autocomplets = patients; 
            }
          )
        }else{
          this.autocomplets = []; 
        }
      }
    )
  }

  $search(patient: Patient = null) {

    if(patient){
      this._router.navigate(['/search/'+patient.reg_id]);
      // this.patient.emit(patient); 
    }else{
      console.log(this.searchControl.value); 
      if(this.searchControl.value != "" && typeof this.searchControl.value!='undefined' ){
        this._patinet.search(this.searchControl.value).subscribe(
          (patient) => {
            this._router.navigate(['/search/'+patient.reg_id]);
            // this.patient.emit(result);
          }, 
          (error) => {
            console.log(error); 
           // if(error.status == 407){
             this._router.navigate(['/search/'+this.searchControl.value]); 
              // this.patient.emit(false); 
            //}
          }
        )
      }
      
    }
    
  }
}
