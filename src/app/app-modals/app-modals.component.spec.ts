import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModalsComponent } from './app-modals.component';

describe('AppModalsComponent', () => {
  let component: AppModalsComponent;
  let fixture: ComponentFixture<AppModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
