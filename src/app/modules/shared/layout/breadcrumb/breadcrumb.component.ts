import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../../services/breadcrumb.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public items: MenuItem[];
  public versions: any;
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.breadcrumb.subscribe(
      (breadcrumb: any) => (this.items = breadcrumb)
    );
    this.breadcrumbService.versions.subscribe(
      (versions: any) => (this.versions = versions)
    );
  }
}
