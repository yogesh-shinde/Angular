import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FCompComponent } from './fcomp.component';

describe('FCompComponent', () => {
  let component: FCompComponent;
  let fixture: ComponentFixture<FCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
