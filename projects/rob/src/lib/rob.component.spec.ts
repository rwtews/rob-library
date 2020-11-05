import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobComponent } from './rob.component';

describe('RobComponent', () => {
  let component: RobComponent;
  let fixture: ComponentFixture<RobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
