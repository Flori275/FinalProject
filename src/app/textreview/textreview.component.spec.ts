import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextreviewComponent } from './textreview.component';

describe('TextreviewComponent', () => {
  let component: TextreviewComponent;
  let fixture: ComponentFixture<TextreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
