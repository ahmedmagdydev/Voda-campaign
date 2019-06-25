import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SaveModalService } from '../../../services/saveModal.service';
@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.css']
})
export class SaveModalComponent implements OnInit {
  @Input() display = false;
  @Input() append;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onModalClosed: EventEmitter<boolean> = new EventEmitter();
  reflected;
  cols;
  constructor(private saveModalService: SaveModalService) {}
  hideModal() {
    this.display = false;
    this.onModalClosed.emit();
  }
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
