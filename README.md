# Movie Description


Responsive SPA for searching movie information based on search by name, providing title, description, cover, rating, and various other functionalities of the desired movie.

## User Journey in the APP

The user enters the system and types the name of the desired movie in the search bar. Upon clicking search, the movie API is called to retrieve movie data. Meanwhile, the user will receive visual feedback indicating that it is loading, shown through a skeleton. After receiving the response, it will indicate that everything is correct. If an error occurs, a screen indicating that something is wrong will be shown, and the user can try the search again.

## Dependencies

- [Angular](https://angular.io/).
- [SCSS](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Karma](https://karma-runner.github.io/latest/index.html)
- [Jasmine](https://jasmine.github.io/)
- [Boostrap](https://getbootstrap.com/)
- [OMDB API ](https://www.omdbapi.com/)


## Installation and Usage

```sh
# clone the project
git clone https://github.com/gabriellennon/movie-description.git

# install dependencies
npm install

# Create your archive envorment.ts and add your apiKey follow the example of env.example archive

# Run the app
ng serve

# Run the unit test
ng test
```
