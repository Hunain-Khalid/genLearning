/**
 * All Plumbing goes here at the "head" of the website,
 * this is the main "page" that contains all other smaller
 * components.
 *
 *
 *
 *
 *
 */

//ok i need to create a table with x and y amount of rows/cols
import React, { Component } from "react";
//makes sense this is how you import getMovies
//from the fakeMovieService folder
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
// remember because of named export must ahve curly praces!
// we should use pagination (more so typechecking with PropTypes)
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,

    //not the right way to import the movie
    //files
  };

  //without this when calling backened servies you can get a runtime error

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: getGenres(), genres });
  }

  handleDelete = (movie) => {
    console.log(movie);
    //remember need setState method to change the
    //state correctly
    //att1 :this.setState(movie.numberInStock: movie.numberInStock - 1);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    // the above gets an array of movies except the one that is being selected
    // set the state of this class now, which will override the movies in the state
    // the below is current javascript convetion, if object to be overridden has
    // the same name as the overrider then this.setState({ movies: movies });
    this.setState({ movies });
  };
  handleLike = (movie) => {
    console.log("Like is clicked!");
    console.log(movie);
    const movies = [...this.state.movies];
    const indx = movies.indexOf(movie);
    movies[indx] = { ...movies[indx] };
    movies[indx].liked = !movies[indx].liked;
    this.setState({ movies });
  };

  //Needed this function to get the current page hence,
  //can show activation of page versus inactivation
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  //conditional statement will appear in the render method prior to the return
  //function, obv must return something, can simplify using a const for
  //the amount of movies

  // remember cannot have two different web "fragments" right beside each other, need
  // to be combined into one via a div oooor react fragment
  // can only return one element at a time.

  // Note :: Do not use messy names for your props, ListGroup commonily contains onItemSelect,
  //         key here being "item being selected"
  //         Object destructring needed in rendering method to send information back and forth from,
  //         methods it itself contains and simplicfication of code.
  render() {
    const { length: movieCount } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      genres,
    } = this.state;

    if (movieCount === 0)
      return <p>There are no movies left in the database</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>

        <div className="col">
          <p>Movie Database!: Showing {filtered.length} movies.</p>

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Like</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itmsCnt={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
