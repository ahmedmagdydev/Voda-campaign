import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
// import {SlideMenuModule} from 'primeng/slidemenu';
import { TreeModule } from 'primeng/tree';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TabViewModule } from 'primeng/tabview';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from 'primeng/menu';
import { DragDropModule } from 'primeng/dragdrop';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';

import { TreeDragDropService } from 'primeng/api';
import { StaticMenuComponent } from './static-menu/static-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    BreadcrumbComponent,
    HeaderComponent,
    StaticMenuComponent
  ],
  imports: [
    CommonModule,
    TreeModule,
    ContextMenuModule,
    TabViewModule,
    BreadcrumbModule,
    MenuModule,
    DragDropModule,
    DialogModule,
    CalendarModule,
    TooltipModule
    // SlideMenuModule
  ],
  exports: [
    SideMenuComponent,
    BreadcrumbComponent,
    HeaderComponent,
    StaticMenuComponent
  ],
  providers: [TreeDragDropService]
})
export class LayoutModule {}
