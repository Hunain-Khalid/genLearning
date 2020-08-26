import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

/**
 *
 * changing const moviesTable from const to class!
 ==\
 Also moved table header to own file such that 
 table headers can be reused, thead now replaced with columns!
 ===
 had to also create a resuable "totality of a table" sfc
 ===
 after merging everything, this table can be resued for more
 than just a movie database
 */

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          DELETE
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
