import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFicheMoteurComponent } from './edit-fiche-moteur.component';

describe('EditFicheMoteurComponent', () => {
  let component: EditFicheMoteurComponent;
  let fixture: ComponentFixture<EditFicheMoteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFicheMoteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFicheMoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
