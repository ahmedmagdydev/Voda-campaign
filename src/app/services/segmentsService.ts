import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { segmentsNode } from '../domain/segmentsNode';

@Injectable()
export class SegmentsService {
  constructor(public http: HttpClient) {}
  @Output() selectedSegments: EventEmitter<any> = new EventEmitter();

  getFiles(link) {
    // tslint:disable: indent
    return this.http
      .get<any>(link)
      .toPromise()
      .then(res => this.selectedSegments.emit(<segmentsNode[]>res));
  }
}
