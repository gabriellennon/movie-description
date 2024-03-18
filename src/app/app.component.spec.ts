import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { throwError, of } from 'rxjs';
import { AppComponent } from './app.component';
import { MovieDetails } from '../utils/types';
import { environment } from '../../environment';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should fetch movie details from API when searchMovies is called', () => {
    const mockMovieDetails: MovieDetails = {
      Title: 'Gelo',
      Year: '2016',
      Rated: 'N/A',
      Released: '03 Mar 2016',
      Runtime: '105 min',
      Genre: 'Drama, Fantasy, Mystery',
      Director: 'Gonçalo Galvão Teles, Luís Galvão Teles',
      Writer: 'Luís Diogo, Gonçalo Galvão Teles, Luís Galvão Teles',
      Actors: 'Ivana Baquero, Afonso Pimentel, Albano Jerónimo',
      Plot: 'How many seconds do you have left to live?',
      Language: 'Portuguese, Spanish',
      Country: 'Portugal, Spain',
      Awards: '5 wins & 19 nominations',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMzc5ODc2OGItMTIwOS00MGQxLTgxZjUtYzdiNDg0OTVmY2M5XkEyXkFqcGdeQXVyMjYyMjU5Mjc@._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '5.7/10' }],
      Metascore: 'N/A',
      imdbRating: '5.7',
      ImdbVotes: '147',
      ImdbID: 'tt3577616',
      Type: 'movie',
      DVD: '16 Dec 2017',
      BoxOffice: 'N/A',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True'
    };

    component.searchQuery = 'Gelo';
    const apiKey = environment.apiKey;

    spyOn(component['http'], 'get').and.returnValue(
      of(mockMovieDetails)
    );

    component.searchMovies();

    expect(component.movieDetails).toEqual(mockMovieDetails);
    expect(component.loadingMovie).toBeFalse();
  });

});
