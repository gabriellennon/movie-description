import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonMovieComponent } from './skeleton-movie.component';

describe('SkeletonMovieComponent', () => {
  let component: SkeletonMovieComponent;
  let fixture: ComponentFixture<SkeletonMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain expected skeleton elements', () => {
    const container = fixture.nativeElement.querySelector('.container-skeleton');
    expect(container).toBeTruthy();

    const skeletonElements = container.querySelectorAll('.placeholder-glow');
    expect(skeletonElements.length).toBe(3);

    const cardTitle = container.querySelector('.card-title');
    expect(cardTitle).toBeTruthy();

    const cardText = container.querySelector('.card-text');
    expect(cardText).toBeTruthy();

    const cardLink = container.querySelector('.btn-primary');
    expect(cardLink).toBeTruthy();

    const movieBanner = container.querySelector('.movie-banner');
    expect(movieBanner).toBeTruthy();
  });
});
