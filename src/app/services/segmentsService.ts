import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { segmentsNode } from '../domain/segmentsNode'; 

@Injectable()
export class segmentsService {

    constructor(private http: HttpClient) { }

    getFiles() {
// tslint:disable: indent
	    return this.http.get<any>('assets/data/segments.json')
	      .toPromise()
	      .then(res => <segmentsNode[]>res);
    }


}
