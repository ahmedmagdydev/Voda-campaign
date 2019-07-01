import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { SegmentsService } from '../../../../services/segmentsService';
import { SideMenuService } from '../../../../services/sidemenu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  segmentsTree;
  segmentContext;
  selectedSegment: TreeNode;
  specific: boolean;
  custom: boolean;
  constructor(
    private segmentsService: SegmentsService,
    private sideMenuService: SideMenuService
  ) {}
  dragStart(e, n) {
    console.log('TCL: SideMenuComponent -> dragStart -> n', n);
    console.log('TCL: SideMenuComponent -> dragStart -> e', e);
  }
  nodeSelected(event, segmentName) {
    if (event.node.selectable) {
      this.sideMenuService.open(
        event.node.label,
        event.node.type,
        event.node.id,
        event.node.parent,
        event.node.icon,
        event.node.versions,
        segmentName,
        event.node.details
      );
    }
  }

  ngOnInit() {
    this.segmentsService.selectedSegments.subscribe(
      (segmentse: any) => (this.segmentsTree = segmentse)
    );

    this.segmentContext = [
      {
        icon: 'icon-info',
        label: 'Show Details'
      },
      {
        icon: 'icon-save',
        label: 'Save'
      },
      {
        icon: 'icon-play',
        label: 'Execute'
      },
      {
        icon: 'icon-resume',
        label: 'Resume'
      },
      {
        icon: '',
        label: 'Scheduling Execution',
        items: [
          {
            label: 'Specific Date & Time...',
            command: () => {
              this.specific = true;
            }
          },
          {
            label: 'Custom Recurrence...',
            command: () => {
              this.custom = true;
            }
          },
          {
            label: 'Periodic Recurrence...',
            command: () => {
              alert('asd');
            }
          }
        ]
      },
      {
        icon: 'icon-stop',
        label: 'Stop'
      },
      {
        icon: 'icon-copy',
        label: 'Copy'
      },
      {
        icon: 'icon-delete',
        label: 'Delete'
      }
    ];
  }
}
