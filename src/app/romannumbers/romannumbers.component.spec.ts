import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomannumbersComponent } from './romannumbers.component';

describe('RomannumbersComponent', () => {
  let component: RomannumbersComponent;
  let fixture: ComponentFixture<RomannumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomannumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomannumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
