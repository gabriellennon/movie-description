import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  searchQuery: string = '';

  @Output() search: EventEmitter<void> = new EventEmitter<void>();
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();
  @Output() searchQueryChange = new EventEmitter<string>();

  constructor() {}

  emitSearchQuery() {
    this.searchQueryChange.emit(this.searchQuery);
  }

  onSearch(): void {
    this.search.emit();
  }

  onReset(): void {
    this.reset.emit();
  }
}
