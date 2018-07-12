import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPropositionComponent } from './edit-proposition.component';

describe('EditPropositionComponent', () => {
  let component: EditPropositionComponent;
  let fixture: ComponentFixture<EditPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
