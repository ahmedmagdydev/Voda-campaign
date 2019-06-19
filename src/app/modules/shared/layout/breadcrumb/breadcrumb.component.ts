import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../../services/breadcrumb.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  // tslint:disable: indent
  public items: MenuItem[];
  public versions: any;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private BreadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.BreadcrumbService.breadcrumb.subscribe(
      (breadcrumb: any) => (this.items = breadcrumb)
    );
    this.BreadcrumbService.versions.subscribe(
      (versions: any) => (this.versions = versions)
    );
  }
}
