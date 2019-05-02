import {Injectable, Output, EventEmitter} from '@angular/core';

@Injectable()
export class SideMenuService {

  isOpen = true;

  @Output() segment: EventEmitter<any> = new EventEmitter();
  @Output() breadcrumb: EventEmitter<any> = new EventEmitter();
  @Output() menuVisible: EventEmitter<any> = new EventEmitter();
  itemParents = [];

   getParents(x) {
     this.itemParents.push( {'label': x.label});
     if (x.parent === undefined) { return; } else {
       return this.getParents(x.parent);
    }
  }
  open(header: any, type: any, _id: any, parent: { label: any; }, icon: any, versions: any, segmentName: any) {
    const segment = {'label': header, 'type': type, 'id': _id, 'parent': parent, 'icon': icon, 'versions': versions};
    this.getParents(segment);
    this.itemParents.push({'label': segmentName});
    const segementWithBreadcumb = { ...segment, 'breadcrumb': this.itemParents.reverse() }
    this.itemParents = []
    this.segment.emit(segementWithBreadcumb);
  }
  toggleSideMenu() {
    this.isOpen = !this.isOpen;
    this.menuVisible.emit(this.isOpen);
  }

}
