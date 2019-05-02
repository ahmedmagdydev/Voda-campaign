import { Component, OnInit, Input, Output } from '@angular/core';
import { SideMenuService } from '../../../services/sidemenu.service';
import { SegmentComponent } from '../../segment/segment.component';
import { BreadcrumbService } from '../../../services/breadcrumb.service'
@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.css']
})
export class MainTabsComponent implements OnInit {
// tslint:disable: indent
	@Output() segments = [];
// tslint:disable-next-line: no-shadowed-variable
  constructor(private SideMenuService: SideMenuService, private BreadcrumbService: BreadcrumbService) { }
	onTabChange(e: any) {
    // console.log(this.segments[e.index]);
    this.BreadcrumbService.changeBreadcrumb(this.segments[e.index]);
	}
  ngOnInit() {
    this.SideMenuService.segment.subscribe((segment: any) => this.segments.push(segment));
    // this.BreadcrumbService.changeBreadcrumb(this.segments[0]);
    // console.log(this.segments);
  }

}
