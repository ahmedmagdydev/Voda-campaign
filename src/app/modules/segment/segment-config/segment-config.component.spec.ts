import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentConfigComponent } from './segment-config.component';

describe('SegmentConfigComponent', () => {
  let component: SegmentConfigComponent;
  let fixture: ComponentFixture<SegmentConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
