import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './modules/shared/layout/layout.module';
import { MainTabsModule } from './modules/shared/main-tabs/main-tabs.module';
import { SegmentsService } from './services/segmentsService';
import { SideMenuService } from './services/sidemenu.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { AppComponent } from './app.component';
import { AngularSplitModule } from 'angular-split';
import { SaveModalService } from './services/saveModal.service';
import { DragDropService } from './services/dragDrop.service';
import { TextEditorService } from './services/textEditor.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MainTabsModule,
    AngularSplitModule.forRoot()
  ],
  providers: [
    SegmentsService,
    SideMenuService,
    BreadcrumbService,
    SaveModalService,
    DragDropService,
    TextEditorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
