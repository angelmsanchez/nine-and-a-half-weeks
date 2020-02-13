import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildStaticComponent } from './view-child-static.component';

describe('ViewChildStaticComponent', () => {
  let component: ViewChildStaticComponent;
  let fixture: ComponentFixture<ViewChildStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
