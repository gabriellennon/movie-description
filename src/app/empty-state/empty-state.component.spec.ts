import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateComponent } from './empty-state.component';

describe('EmptyStateComponent', () => {
  let component: EmptyStateComponent;
  let fixture: ComponentFixture<EmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the all content of component', () => {
    const titleMock = 'Test Title';
    const imageEmptyMock = 'image.png';
    const descriptionMock = 'description test';
    component.title = titleMock;
    component.imageEmpty = imageEmptyMock;
    component.description = descriptionMock;
    fixture.detectChanges();
    expect(component.title).toContain(titleMock);
    expect(component.description).toContain(descriptionMock);
    expect(component.imageEmpty).toContain(imageEmptyMock);
  });
});
