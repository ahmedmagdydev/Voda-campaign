import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class TextEditorService {
  @Output() dropItem: EventEmitter<any> = new EventEmitter();
  constructor() {}

  getDropItem(item) {
    this.dropItem.emit(item.element.data.name + ' ');
  }
}
