import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.css']
})
export class SaveModalComponent implements OnInit {
  @Input() display = false;
  reflected;
  cols;
  constructor() {}

  ngOnInit() {
    this.reflected = [
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' },
      { type: 'Segment', icon: 'icon-layer', id: 3354, name: 'flex october' }
    ];
  }
}
