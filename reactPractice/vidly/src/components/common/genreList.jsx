/**
 * Attempting to create a genre list on the side of database, organizing
 * it based of movies genres
 *
 * 0.1: First attempt at creating list of genres beside current movie database
 * 0.2: Will use prior component ideas to create list group of genres (~40 mins)
 *    : 3:45pm start
 * 0.3: Will get help from mosh ; gave up @ 4:20
 * -----------------------------
 *  first attempt
 *  const genreList = (props) => {
  const { currentGenre, onGenreChange } = props;
  console.log(currentGenre);

  if (currentGenre === 1) return null;
  const genres = getGenres;

  return (
    <nav>
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            key={genre}
            className={
              genre === currentGenre ? "list-item active" : "list-item"
            }
          >
            <a className="page-link" onClick={() => onGenreChange(genre)}>
              {genre}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itmsCnt: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default genreList;

 * ---
 */
