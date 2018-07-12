import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrapportComponent } from './editrapport.component';

describe('EditrapportComponent', () => {
  let component: EditrapportComponent;
  let fixture: ComponentFixture<EditrapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrapportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
