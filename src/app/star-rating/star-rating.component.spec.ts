import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingComponent } from './star-rating.component';

describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial rating value of 0', () => {
    expect(component.rating).toBe(0);
  });

  it('should have initial readonly value of false', () => {
    expect(component.readonly).toBeFalse();
  });

  it('should change rating when setRating is called', () => {
    component.setRating(3);
    expect(component.rating).toBe(3);
  });

  it('should not change rating when setRating is called and readonly is true', () => {
    component.readonly = true;
    component.setRating(5);
    expect(component.rating).toBe(0);
  });

  it('should have five star icons', () => {
    const starIcons = fixture.nativeElement.querySelectorAll('.fa-star');
    expect(starIcons.length).toBe(10);
  });
});
