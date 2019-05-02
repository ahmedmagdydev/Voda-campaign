import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment-details',
  templateUrl: './segment-details.component.html',
  styleUrls: ['./segment-details.component.css']
})
export class SegmentDetailsComponent implements OnInit {
  nameDisabled=true;
  constructor() { }

  ngOnInit() {
  }
  toggleDisabled(){
    this.nameDisabled = !this.nameDisabled;
  }
}
