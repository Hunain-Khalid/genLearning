import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

/**
 * @name: movies.jsx
 * @date: 2020-08-24
 * @author: Hunain Khalid
 *
 * Realized no need for extra / seperate page for ccomments
 * can use per class... kinda expected + easier to follow
 * reverted to an old file to see wher ei left off
 *
 *
 * as expected below will be different handlers ex handle delete
 * will handle delete etc, this code has the main logic.
 *
 * ====
 * migration of handle sort from moves.jsx to moviesTable.jsx
 * the prior code is now in moviesTable and handleSort changed
 * if instantiated in differemt areas/ pages no need to redo sorting
 * logic
 * ===
 *
 * ===
 * same as line 23-26 but extracting movieHeader into new filey
 * q4443
 * ===
 *
 * ===
 * need to extract the table body as well for resuage / better
 * OOP
 * ===
 *
 */

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  // This if else reverses the sorting if the path is the same
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: movieCount } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      genres,
      sortColumn,
    } = this.state;

    if (movieCount === 0)
      return <p>There are no movies left in the database</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>

        <div className="col">
          <p>Movie Database!: Showing {filtered.length} movies.</p>

          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />

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
