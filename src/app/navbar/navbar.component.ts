import { Component, OnInit } from '@angular/core';
import { RootURL } from '../model/RootURL'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private $root = RootURL; 
  public menuItems = [
    // {href: 'users', text: 'Users'}
  ]; 
  constructor() { }

  ngOnInit() {
   
  }

}
