import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCodeDialogComponent } from './story-code-dialog.component';

describe('StoryCodeDialogComponent', () => {
  let component: StoryCodeDialogComponent;
  let fixture: ComponentFixture<StoryCodeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryCodeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
