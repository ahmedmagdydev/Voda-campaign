import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { SegmentsService } from '../../../../services/segmentsService';
import { SideMenuService } from '../../../../services/sidemenu.service';
import { DragDropService } from '../../../../services/dragDrop.service';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @ViewChild('treeWrapper') treeWrapper: ElementRef;
  @ViewChild('dropZone') dropZone: ElementRef;

  segmentsTree;
  segmentContext;
  selectedSegment: TreeNode;
  specific: boolean;
  custom: boolean;
  dropZoneOn = 'none';
  options = {
    allowDrag: true,
    allowDrop: false,
    actionMapping: {
      mouse: {
        dragStart: () => {
          this.dropZoneOn = 'block';
        },
        drop: () => {},
        dragEnd: () => {
          this.dropZoneOn = 'none';
        }
      }
    }
  };

  constructor(
    private segmentsService: SegmentsService,
    private sideMenuService: SideMenuService,
    private dragDropService: DragDropService
  ) {}

  onEvent(event) {
    const _node = event.node.data;
    if (event.node.data.selectable) {
      this.sideMenuService.open(
        _node.name,
        _node.type,
        _node.id,
        event.node.parent,
        _node.icon,
        _node.versions,
        _node.name,
        _node.details,
        _node.config
      );
    }
  }
  onDrop(e) {
    this.dragDropService.getDropItem(e);
  }
  ngOnInit() {
    setTimeout(() => {
      this.dragDropService.setDropZoneSize(
        this.treeWrapper.nativeElement.parentElement.parentElement.clientWidth,
        this.dropZone.nativeElement
      );
    }, 500);

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
