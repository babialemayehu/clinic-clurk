import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patinet-view',
  templateUrl: './patinet-view.component.html',
  styleUrls: ['./patinet-view.component.scss']
})
export class PatinetViewComponent implements OnInit {

  @Input() patient; 
  
  constructor() { }

  ngOnInit() {
  }

}
