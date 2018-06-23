import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCompComponent } from './scomp.component';

describe('SCompComponent', () => {
  let component: SCompComponent;
  let fixture: ComponentFixture<SCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
