import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodStarterComponent } from './hod-starter.component';

describe('HodStarterComponent', () => {
  let component: HodStarterComponent;
  let fixture: ComponentFixture<HodStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodStarterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
