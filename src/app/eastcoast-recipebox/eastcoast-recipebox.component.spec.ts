import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EastcoastRecipeboxComponent } from './eastcoast-recipebox.component';

describe('EastcoastRecipeboxComponent', () => {
  let component: EastcoastRecipeboxComponent;
  let fixture: ComponentFixture<EastcoastRecipeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastcoastRecipeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastcoastRecipeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log(component);
  });
});
