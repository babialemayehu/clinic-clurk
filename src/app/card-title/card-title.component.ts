import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ICON_REGISTRY_PROVIDER } from '@angular/material';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent implements OnInit {

  private _titel: string; 
  private _icon = "more_vert"; 

  @Input() 
  set titel(val){
    console.log(val); 
    this._titel = val; 
  }

  @Input() 
  set icon(val){
    this._icon = val; 
  }

  constructor() { }

  ngOnInit() {
  }

}
