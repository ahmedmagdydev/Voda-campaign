import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SaveModalService } from '../../services/saveModal.service';
@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  @Input() type: any;
  @Input() details: any;
  @Input() onDrop: any;
  @Input() config: any;
  segmentTab: string;
  moreActions: MenuItem[];
  // @Input() saveModal;
  @ViewChild('segmentTabs') segmentTabsRef: ElementRef;
  constructor(private saveModalService: SaveModalService) {}

  openSaveModal() {
    this.details.saveModal = true;
  }

  ngOnInit() {
    // console.log('TCL: SegmentComponent -> config', this.config);
    this.segmentTabsRef.nativeElement.style.height =
      window.innerHeight - 218 + 'px';
    this.segmentTab = 'segmentDetails';
    this.moreActions = [
      { label: 'save', icon: 'icon-save' },
      { label: 'pause', icon: 'icon-pause' },
      { label: 'stop', icon: 'icon-stop' },
      { label: 'copy', icon: 'icon-copy' },
      { label: 'delete', icon: 'icon-delete' }
    ];
  }

  changeTab(tab: string) {
    this.segmentTab = tab;
  }
}
