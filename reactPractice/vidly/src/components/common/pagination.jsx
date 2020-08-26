import React from "react";
import PropTypes from "prop-types";
import _ from "lodash"; // from underscore javasceipt libarary

/**
 *  @name: Pagination "SFC" (Stateless Functional Component)
 *  @author: Hunain Khalid
 *  0.1: First wanted to attempt this component on my own
 *  0.2: Conversion from Class Component to "SFC"
 *  0.3: Created a simple base fpr the pagination button
 *  ----
 *  1: Moved on and attempted to see how to handle changing pages
 *  A: SElf Note: Remember to attatch the glue first,
 *  1.1: Okay remember what information (inputs) does this component need to function
 *     : in this ex. we need number of pages / size, = items per page
 *  1.2: Continuted learning about flipping pages (going through each page)
 *  1.3: in order to get the amout of pages required in a "box" at any time
 *     : we have create an array that will store this from 1 to pagescount + 1
 *  1.4: lodash has various
 * -----
 *  2.0: I beleived i had to delete everything but this may not be the case
 *       instead making sure my movies and pagnation have the same vaeriable
 *       names, lol
 * -----
 * 3.0:  Prop Type checking should be done (acts as a param type checker, warns
 *       against the use of wrong types)
 */
const Pagination = ({ itmsCnt, pageSize, currentPage, onPageChange }) => {
  //console.log(currentPage);

  const pagesCount = itmsCnt / pageSize;
  //console.log(pagesCount);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
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

export default Pagination;
