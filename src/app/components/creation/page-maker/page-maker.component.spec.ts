import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMakerComponent } from './page-maker.component';

describe('PageMakerComponent', () => {
  let component: PageMakerComponent;
  let fixture: ComponentFixture<PageMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
