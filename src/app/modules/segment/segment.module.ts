import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentComponent } from './segment.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';

import { SegmentDetailsComponent } from './segment-details/segment-details.component';
import { SegmentConfigComponent } from './segment-config/segment-config.component';
import { TextEditorModule } from '../shared/text-editor/text-editor.module';

@NgModule({
  declarations: [SegmentComponent, SegmentDetailsComponent, SegmentConfigComponent],
  imports: [
    CommonModule,
    ProgressBarModule,
    AccordionModule,
    InputTextareaModule,
    CheckboxModule,
    InputTextModule,
    TextEditorModule
  ],
  exports: [
  SegmentComponent,
  ]
})
export class SegmentModule { }
