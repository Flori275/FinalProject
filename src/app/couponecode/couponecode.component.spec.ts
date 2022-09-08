import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponecodeComponent } from './couponecode.component';

describe('CouponecodeComponent', () => {
  let component: CouponecodeComponent;
  let fixture: ComponentFixture<CouponecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponecodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
