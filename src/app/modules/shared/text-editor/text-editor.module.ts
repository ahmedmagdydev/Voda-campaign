import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextEditorComponent],
  imports: [CommonModule, ContextMenuModule, InputTextareaModule, FormsModule],
  exports: [TextEditorComponent]
})
export class TextEditorModule {}
