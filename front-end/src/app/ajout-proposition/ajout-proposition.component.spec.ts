import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPropositionComponent } from './ajout-proposition.component';

describe('AjoutPropositionComponent', () => {
  let component: AjoutPropositionComponent;
  let fixture: ComponentFixture<AjoutPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
