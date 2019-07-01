import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  public items: MenuItem[];
  contextMenu = true;
  @ViewChild('criteria') criteriaRef: ElementRef;
  @ViewChild('highlights') highlightsRef: ElementRef;
  @ViewChild('backdrop') backdropRef: ElementRef;

  @Input() value: any;
  @Input() disabled: any;
  backdrop: any;
  criteriaValue;
  dropItem;
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'AND',
        command: event => {
          this.paste({ e: event.item.label, criteria: this.criteriaRef });
        }
      },
      {
        label: 'OR',
        command: event => {
          this.paste({ e: event.item.label, criteria: this.criteriaRef });
        }
      }
    ];
    this.criteriaValue = this.value;

    if (this.criteriaValue !== undefined) {
      this.applyHighlights(null, this.criteriaValue);
    }
  }
  openCm(e, criteriaContextMenu) {
    if (e.code === 'Space' && e.ctrlKey) {
      criteriaContextMenu.show(e);
    }
  }
  applyHighlights(e, text) {
    text = text
      .replace(/\n$/g, '\n\n')
      .replace(/\b[oO][rR]\b/g, '<span class="text-cyan">$&</span>')
      .replace(/\b[aA][nN][dD]\b/g, '<span class="text-cyan">$&</span>');
    this.highlightsRef.nativeElement.innerHTML = text;
    if (e !== null) {
      this.scrollHandler(e);
    }
  }
  scrollHandler(e) {
    const scroll = e.target.scrollTop;
    this.backdropRef.nativeElement.scrollTop = scroll;
  }
  paste({ e, criteria }: { e: any; criteria: ElementRef<any> }) {
    const currentCriteria = criteria.nativeElement;
    const pasteVlaue = e;
    // criteria.nativeElement.value += e.item.label;
    criteria.nativeElement.focus();
    if (
      currentCriteria.selectionStart ||
      currentCriteria.selectionStart === '0'
    ) {
      const startPos = currentCriteria.selectionStart;
      const endPos = currentCriteria.selectionEnd;
      currentCriteria.value =
        currentCriteria.value.substring(0, startPos) +
        pasteVlaue +
        currentCriteria.value.substring(endPos, currentCriteria.value.length);
      currentCriteria.selectionStart = startPos + pasteVlaue.length;
      currentCriteria.selectionEnd = startPos + pasteVlaue.length;
    } else {
      currentCriteria.value += pasteVlaue;
    }
    this.applyHighlights(null, currentCriteria.value);
  }
}
