import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterPropositionComponent } from './traiter-proposition.component';

describe('TraiterPropositionComponent', () => {
  let component: TraiterPropositionComponent;
  let fixture: ComponentFixture<TraiterPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraiterPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
