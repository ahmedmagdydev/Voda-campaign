import { Component, OnInit, Output } from '@angular/core';
import { SideMenuService } from '../../../services/sidemenu.service';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { DragDropService } from '../../../services/dragDrop.service';
@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.css']
})
export class MainTabsComponent implements OnInit {
  @Output() segments = [];
  @Output() dropedItem;
  segmentsMenuArray = [];
  selectedTab = 0;
  selectedTabMenu: string;
  constructor(
    private sideMenuService: SideMenuService,
    private breadcrumbService: BreadcrumbService,
    private dragDropService: DragDropService
  ) {}
  onTabChange(e: any) {
    this.breadcrumbService.changeBreadcrumb(this.segments[e.index]);
    this.selectedTab = e.index;
  }

  handleClose(e: any) {
    this.segments[e.index].details.saveModal = false;
    this.segments.splice(e.index, 1);
    this.segmentsMenuArray.splice(e.index, 1);
    if (this.segments.length === 0) {
      this.breadcrumbService.removeBreadcrumb();
    } else if (e.index === this.selectedTab) {
      this.breadcrumbService.changeBreadcrumb(this.segments[0]);
      this.selectedTab = 0;
    } else if (e.index < this.selectedTab) {
      this.selectedTab = this.selectedTab - 1;
    }
  }
  search(nameKey: any, myArray: any[]) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].id === nameKey) {
        return myArray[i];
      }
    }
  }

  onDrop(e) {
    this.dropedItem = e;
  }
  ngOnInit() {
    this.dragDropService.dropItem.subscribe(item => {
      this.onDrop(item);
    });
    this.sideMenuService.segment.subscribe((segment: any) => {
      const resultObject = this.search(segment.id, this.segments);
      if (resultObject === undefined) {
        this.segments.push(segment);
        const segmentItem = {
          label: segment.name,
          command: () => {
            const _index = this.segments.indexOf(segment);
            this.selectedTab = _index;
            this.breadcrumbService.changeBreadcrumb(this.segments[_index]);
          }
        };
        this.selectedTab = this.segments.length - 1;
        this.segmentsMenuArray.push(segmentItem);
        this.selectedTabMenu = segmentItem.label;
      } else {
        this.selectedTab = this.segments.indexOf(resultObject);
      }
    });
  }
}
