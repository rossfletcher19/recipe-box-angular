import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeboxHomeComponent } from './recipebox-home.component';

describe('RecipeboxHomeComponent', () => {
  let component: RecipeboxHomeComponent;
  let fixture: ComponentFixture<RecipeboxHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeboxHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeboxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
