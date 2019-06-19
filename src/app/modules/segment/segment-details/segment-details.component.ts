import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-segment-details',
  templateUrl: './segment-details.component.html',
  styleUrls: ['./segment-details.component.css']
})
export class SegmentDetailsComponent implements OnInit {
  nameDisabled = true;
  @Input() segmentDetails;
  details;
  runningValue;
  constructor() {}

  ngOnInit() {
    this.details = this.segmentDetails;
    setTimeout(() => {
      this.runningValue = this.details.runningValue;
    }, 500);
  }
  toggleDisabled() {
    this.nameDisabled = !this.nameDisabled;
  }
}
