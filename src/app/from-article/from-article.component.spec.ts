import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromArticleComponent } from './from-article.component';

describe('FromArticleComponent', () => {
  let component: FromArticleComponent;
  let fixture: ComponentFixture<FromArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
