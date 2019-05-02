import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor.component';
import { ContextMenuModule } from 'primeng/contextmenu';

@NgModule({
  declarations: [TextEditorComponent],
  imports: [
    CommonModule,
    ContextMenuModule
  ],
  exports:[
    TextEditorComponent
  ]
})
export class TextEditorModule { }
