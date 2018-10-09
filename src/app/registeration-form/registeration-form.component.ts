import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router'; 

import { RoleService } from '../service/role.service'; 
import { UserService } from '../service/user.service'; 
import { CommonMessageService as Message }  from '../service/common-message.service'; 

import { User } from '../model/User'; 

declare var M; 
@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.scss'],
  providers: [RoleService,UserService], 
})
export class RegisterationFormComponent implements OnInit {

  public loading = false; 
  public regForm: FormGroup; 
  public roles: object; 
  public regOprationMode = 'new'; 
  @Input()
  set value(user: User) {
    this.regForm.setValue(user); 
  }

  constructor(
    public thisDialog: MatDialogRef<RegisterationFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any, 
    public formBuilder: FormBuilder, 
    public _route: Router, 
    public _user: UserService, 
    public _message: Message
  ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      id:[''],
      worker_id: ['', [Validators.required]], 
      first_name: ['', [Validators.required]], 
      father_name: ['', [ Validators.required]], 
      grand_father_name: ['', [Validators.required]], 
      gender: ['', [Validators.required]],
      role_id: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', [Validators.required]],
    }); 
    if(typeof this.data.user !== 'undefined'){
      this.regForm.patchValue(this.data.user);
      this.regOprationMode = 'update'; 
    } 
  }
  onSubmit(){
    this.loading = true; 
    if(this.regOprationMode != 'update'){
      this._new(); 
    }else{
      this.update(); 
    } 
     
  }
  _new(){
    this._user.postCreateUser(this.regForm.value).subscribe(
      responce => {
        // window.location.href="/user"; 
        this._route.navigate(['/'+responce.worker_id]);
        this.thisDialog.close({responce:true,opration:'create', data: responce});
        this._message.httpSuccess('created account for <b> '+responce.first_name);
      }, 
      error => {
        this.loading = false;
        this._message.httpError({responce:false, operation:'create',data: error}); 
      }
    ) 
  }
  update(){
    this._user.updateUser(this.regForm.value).subscribe(
      responce => {
        //window.location.href="/user"; 
        this.thisDialog.close({responce:true,opration:'update', data: responce});
        this._message.httpSuccess('created account for <b> '+responce.first_name);
      }, 
      error => {
        this.loading = false;
        this._message.httpError({responce:false, operation:'update',data: error}); 
      }
    )  
  }
  get worker_id(){return this.regForm.get("worker_id"); }
  get first_name(){return this.regForm.get("first_name"); }
  get father_name(){return this.regForm.get("father_name"); }
  get grand_father_name(){return this.regForm.get("grand_father_name"); }
  get gender(){return this.regForm.get("gender"); }
  get role_id(){return this.regForm.get("role_id"); }
  get email(){return this.regForm.get("email"); }
  get phone(){return this.regForm.get("phone"); }
}
