import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service'; 
import { User } from '../model/User'; 

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [UserService]
})
export class SidenavComponent implements OnInit {
  
  @ViewChild('profileImageContainer') profileImageContainer; 
  $auth: User; 
  public profilePic: string; 

  constructor(public _user: UserService) {
     
  }

  ngOnInit() {
    this._user.authUser().subscribe(
      result => {
        this.$auth = result; 
        this.profilePic = result.profile_pic;
        // let img = document.createElement('img');
        // img.classList.add('reponsive-img'); 
        // img.src = result.profile_pic; 
        // this.profileImageContainer.nativeElement.appendChild(img);
      }
    ); 
  }
}
