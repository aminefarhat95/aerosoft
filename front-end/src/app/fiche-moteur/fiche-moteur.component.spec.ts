import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheMoteurComponent } from './fiche-moteur.component';

describe('FicheMoteurComponent', () => {
  let component: FicheMoteurComponent;
  let fixture: ComponentFixture<FicheMoteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheMoteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheMoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
