import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisovermoreComponent } from './disovermore.component';

describe('DisovermoreComponent', () => {
  let component: DisovermoreComponent;
  let fixture: ComponentFixture<DisovermoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisovermoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisovermoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
