import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestcoastRecipeboxComponent } from './westcoast-recipebox.component';

describe('WestcoastRecipeboxComponent', () => {
  let component: WestcoastRecipeboxComponent;
  let fixture: ComponentFixture<WestcoastRecipeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestcoastRecipeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestcoastRecipeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
