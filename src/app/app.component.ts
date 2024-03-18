import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { MovieDetails } from '../utils/types';
import { CommonModule } from '@angular/common';
import { SkeletonMovieComponent } from './skeleton-movie/skeleton-movie.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { environment } from '../../environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    StarRatingComponent,
    SkeletonMovieComponent,
    EmptyStateComponent,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NavBarComponent,
    SearchFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'film-description';
  faHeart = faHeart;
  movieImage = '../assets/images/movie.png';
  noResultsImage = '../assets/images/noresults.png';
  defaultImageMovie = '../assets/images/default-movie.png';
  searchQuery: string = '';
  movieDetails: MovieDetails = {} as MovieDetails;
  loadingMovie: boolean = false;
  errorFetchMovie: boolean = false;

  constructor(private http: HttpClient) {}


  searchMovies() {
    const apiKey = environment.apiKey;
    const apiUrl = `http://www.omdbapi.com/?t=${this.searchQuery}&apikey=${apiKey}`;
    this.loadingMovie = true;

    this.http.get<MovieDetails>(apiUrl)
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching movie details:', error);
          this.errorFetchMovie = true;
          return throwError(error);
        })
      )
      .subscribe((data: MovieDetails) => {
        this.movieDetails = data;
        this.loadingMovie = false;
      });

  }

  resetSearch() {
    this.movieDetails = {} as MovieDetails;
    this.searchQuery = '';
  }

  handleSearchQueryChange(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  convertImdbRatingToRoundnumber(rating: any): number {
    return Math.round(+rating || 0);
  }

  isMovieDetailsEmpty(): boolean {
    return !this.movieDetails || Object.keys(this.movieDetails).length === 0;
  }

}
