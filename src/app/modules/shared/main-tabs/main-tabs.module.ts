import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {SlideMenuModule} from 'primeng/slidemenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TabViewModule } from 'primeng/tabview';
import { MainTabsComponent } from './main-tabs.component';
import { SegmentModule } from '../../segment/segment.module';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [MainTabsComponent],
  imports: [
    CommonModule,
    ContextMenuModule,
    TabViewModule,
    SegmentModule,
    MenuModule
  ],
  exports: [MainTabsComponent]
})
export class MainTabsModule {}
