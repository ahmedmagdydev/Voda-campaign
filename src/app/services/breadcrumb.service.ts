import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class BreadcrumbService {
  @Output() breadcrumb: EventEmitter<any> = new EventEmitter();
  @Output() versions: EventEmitter<any> = new EventEmitter();
  changeBreadcrumb(x) {
    this.breadcrumb.emit(x.breadcrumb);
    this.versions.emit(x.versions);
  }
}
