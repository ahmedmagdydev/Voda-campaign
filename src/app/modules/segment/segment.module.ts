import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentComponent } from './segment.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SegmentDetailsComponent } from './segment-details/segment-details.component';
import { SegmentConfigComponent } from './segment-config/segment-config.component';
import { SegmentAuditComponent } from './segment-audit/segment-audit.component';
import { TextEditorModule } from '../shared/text-editor/text-editor.module';
import { MenuModule } from 'primeng/menu';
import { SegmentDataComponent } from './segment-data/segment-data.component';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { auditService } from '../../services/audit-service';

@NgModule({
  declarations: [
    SegmentComponent,
    SegmentDetailsComponent,
    SegmentConfigComponent,
    SegmentDataComponent,
    SegmentAuditComponent
  ],
  providers: [auditService],
  imports: [
    CommonModule,
    ProgressBarModule,
    AccordionModule,
    InputTextareaModule,
    CheckboxModule,
    InputTextModule,
    TextEditorModule,
    FormsModule,
    InputSwitchModule,
    MenuModule,
    DropdownModule,
    TableModule,
    MultiSelectModule
  ],
  exports: [SegmentComponent]
})
export class SegmentModule {}
