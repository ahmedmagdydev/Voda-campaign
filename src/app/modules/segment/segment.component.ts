import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  @Input() type: any;
  segmentTab ;
  constructor() { }

  ngOnInit() {
    this.segmentTab = 'segmentDetails';
  }
  changeTab(tab: string){
    this.segmentTab = tab;
// tslint:disable: no-unused-expression
 
  }
}
