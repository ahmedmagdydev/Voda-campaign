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
  // contextItems: MenuItem[];
  segmentsTree;
  segmentContext;
  selectedSegment: TreeNode;
  collapseSegment: Boolean;
  segmentExpanded: String = 'notyet';
  specific = false;
  custom: boolean;
  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    private segmentsService: SegmentsService,
    private sideMenuService: SideMenuService
  ) {}

  nodeSelected(event, segmentName) {
    if (event.node.selectable) {
      // tslint:disable-next-line: no-unused-expression
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
    // this.segmentsService
    //   .getFiles('assets/data/segments.json')
    //   .then(segments => (this.segmentsTree = segments));

    this.segmentsService.selectedSegments.subscribe(
      (segmentse: any) => (this.segmentsTree = segmentse)
    );
    this.collapseSegment = true;

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

  expandSegment(e, name) {
    e.preventDefault();
    if (this.collapseSegment === true) {
      const _name = name.split(' ').join('_');
      this.segmentExpanded = _name;
      this.collapseSegment = false;
    } else {
      this.segmentExpanded = 'notyet';
      this.collapseSegment = true;
    }
  }
}
