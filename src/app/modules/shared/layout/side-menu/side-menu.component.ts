import { Component, OnInit, EventEmitter, Input } from '@angular/core';
// import {MenuItem} from 'primeng/api';
import { TreeNode } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { segmentsService } from '../../../../services/segmentsService';
import { SideMenuService } from '../../../../services/sidemenu.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  // contextItems: MenuItem[];
  segmentsTree;
  selectedSegment: TreeNode;
  collapseSegment: Boolean;
  segmentExpanded: String = 'notyet';
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private segmentsService: segmentsService,
    private sideMenuService: SideMenuService
  ) { }

  nodeSelected(event, segmentName) {
    if (event.node.open) {
      // tslint:disable-next-line: no-unused-expression
      // console.log(this.sideMenuService.segment);
      this.sideMenuService.open(event.node.label,
        event.node.type,
        event.node.id,
        event.node.parent,
        event.node.icon,
        event.node.versions,
        segmentName);

    }
  }
  dragStart(e, n) {
    console.log(e);
    console.log(n);
  }
  ngOnInit() {
    this.segmentsService.getFiles().then(
      segments => this.segmentsTree = segments
    );
    this.collapseSegment = true;
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
