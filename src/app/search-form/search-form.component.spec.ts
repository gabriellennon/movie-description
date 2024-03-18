import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event', () => {
    spyOn(component.search, 'emit');
    const searchButton = fixture.debugElement.query(By.css('.btn-primary'));
    searchButton.triggerEventHandler('click', null);
    expect(component.search.emit).toHaveBeenCalled();
  });

  it('should emit reset event', () => {
    spyOn(component.reset, 'emit');
    const resetButton = fixture.debugElement.query(By.css('.btn-outline-secondary'));
    resetButton.triggerEventHandler('click', null);
    expect(component.reset.emit).toHaveBeenCalled();
  });

  it('should emit searchQueryChange event when searchQuery changes', () => {
    spyOn(component.searchQueryChange, 'emit');
    component.searchQuery = 'Test Movie';
    component.emitSearchQuery();
    expect(component.searchQueryChange.emit).toHaveBeenCalledWith('Test Movie');
  });

  it('should update searchQuery when input value changes', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.nativeElement.value = 'New Search Query';
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.searchQuery).toEqual('New Search Query');
  });
});
