import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveModalComponent } from './save-modal.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [SaveModalComponent],
  imports: [CommonModule, DialogModule, TableModule],
  exports: [SaveModalComponent]
})
export class SaveModalModule {}
