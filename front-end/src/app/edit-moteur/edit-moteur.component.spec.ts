import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoteurComponent } from './edit-moteur.component';

describe('EditMoteurComponent', () => {
  let component: EditMoteurComponent;
  let fixture: ComponentFixture<EditMoteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMoteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
