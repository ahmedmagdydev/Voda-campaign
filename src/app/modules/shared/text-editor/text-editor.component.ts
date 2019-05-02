import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  private items: MenuItem[];
  contextMenu = true;
  @ViewChild('criteria') criteriaRef: ElementRef;
  @ViewChild('highlights') highlightsRef: ElementRef;
  @ViewChild('backdrop') backdropRef: ElementRef;
  backdrop;
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'AND',
        command: event => {
          this.paste({ e: event, criteria: this.criteriaRef });
        }
      },
      {
        label: 'OR',
        command: event => {
          this.paste({ e: event, criteria: this.criteriaRef });
        }
      }
    ];
  }
  openCm(e, criteriaContextMenu, text) {
    if (e.code === 'Space' && e.ctrlKey) {
      criteriaContextMenu.show(e);
    }
  }
  applyHighlights(e, text) {
    text = text
      .replace(/\n$/g, '\n\n')
      .replace(/\bOR\b/g, '<span class="text-cyan">$&</span>')
      .replace(/\bAND\b/g, '<span class="text-cyan">$&</span>');
    this.highlightsRef.nativeElement.innerHTML = text;
    this.scrollHandler(e);
  }
  scrollHandler(e) {
    const scroll = e.target.scrollTop;
    this.backdropRef.nativeElement.scrollTop = scroll;
  }
  paste({
    e,
    criteria
  }: {
    e: {
      item: {
        label: any;
      };
    };
    criteria: ElementRef<any>;
  }) {
    const currentCriteria = criteria.nativeElement;
    const pasteVlaue = e.item.label;
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
