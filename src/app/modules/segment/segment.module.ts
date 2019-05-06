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
import { TextEditorModule } from '../shared/text-editor/text-editor.module';
import { SegmentDataComponent } from './segment-data/segment-data.component';

@NgModule({
  declarations: [
    SegmentComponent,
    SegmentDetailsComponent,
    SegmentConfigComponent,
    SegmentDataComponent
  ],
  imports: [
    CommonModule,
    ProgressBarModule,
    AccordionModule,
    InputTextareaModule,
    CheckboxModule,
    InputTextModule,
    TextEditorModule,
    FormsModule,
    InputSwitchModule
  ],
  exports: [SegmentComponent]
})
export class SegmentModule {}
