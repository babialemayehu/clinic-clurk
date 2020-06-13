import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material'; 
import { RegisterationFormComponent } from '../registeration-form/registeration-form.component'; 
import { RoleService } from '../service/role.service'; 

declare var M; 
@Component({
  selector: 'app-floating-action-btn',
  templateUrl: './floating-action-btn.component.html',
  styleUrls: ['./floating-action-btn.component.scss'],
  providers: [RoleService],
})
export class FloatingActionBtnComponent implements OnInit {

  @Output() action = new EventEmitter(); 

  private buttonRef; 
  constructor(public registrationDialog: MatDialog,  public _roles: RoleService) { }
  public roles: object; 
  ngOnInit() {
    this._roles.getRoles().subscribe(
      result => {
        this.roles = result; 
      }
    ); 

  }


  openRagistrationFrom(){
    let dialog = this.registrationDialog.open(RegisterationFormComponent,{
      width: '600px', 
      data: {
        roles: this.roles,
        
      }, 
      disableClose: true
    });
    
    dialog.afterClosed().subscribe(
      responce => {
        console.log(responce); 
      }
    );
  }

  open(){
    let options = document.getElementById('options');
    options.classList.remove('close'); 
    options.classList.add('open');
  }

  close(){
    setTimeout(()=>{
      let options = document.getElementById('options');
      options.classList.remove('open');
      options.classList.add('close');      
    }, 500); 
    
  }
}
