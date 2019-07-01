import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class DragDropService {
  @Output() dropItem: EventEmitter<any> = new EventEmitter();
  constructor() {}
  setDropZoneSize(x, y) {
    y.style.width = 'calc(100% - ' + x + 'px - 70px)';
  }
  getDropItem(item) {
    this.dropItem.emit(item.element.data.name + ' ');
  }
}
