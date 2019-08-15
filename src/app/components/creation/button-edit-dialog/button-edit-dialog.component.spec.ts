import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditDialogComponent } from './button-edit-dialog.component';

describe('ButtonEditDialogComponent', () => {
  let component: ButtonEditDialogComponent;
  let fixture: ComponentFixture<ButtonEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
