import { Injectable, Output, EventEmitter } from '@angular/core';
import { BreadcrumbService } from '../services/breadcrumb.service';

@Injectable()
export class SideMenuService {
  isOpen = true;

  @Output() segment: EventEmitter<any> = new EventEmitter();
  @Output() breadcrumb: EventEmitter<any> = new EventEmitter();
  @Output() menuVisible: EventEmitter<any> = new EventEmitter();
  itemParents = [];

  constructor(private breadcrumbService: BreadcrumbService) {}
  getParents(x) {
    this.itemParents.push({ label: x.data.name });
    if (x.parent.data.name === undefined) {
      return;
    } else {
      return this.getParents(x.parent);
    }
  }
  open(
    header: any,
    type: any,
    _id: any,
    parent: { label: any },
    icon: any,
    versions: any,
    segmentName: any,
    segementDetails: any,
    segmentConfig: any
  ) {
    const segment = {
      name: header,
      type: type,
      id: _id,
      parent: parent,
      icon: icon,
      versions: versions,
      details: segementDetails,
      config: segmentConfig
    };
    this.getParents(parent);
    this.itemParents.unshift({ label: segmentName });
    const segementWithBreadcumb = {
      ...segment,
      breadcrumb: this.itemParents.reverse()
    };
    this.itemParents = [];
    this.segment.emit(segementWithBreadcumb);
    this.breadcrumbService.changeBreadcrumb(segementWithBreadcumb);
  }
  toggleSideMenu() {
    this.isOpen = !this.isOpen;
    this.menuVisible.emit(this.isOpen);
  }
}
