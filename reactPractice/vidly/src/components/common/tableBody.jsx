import React, { Component } from "react";
import _ from "lodash";

/**
 * Created this component to use in movies.jsx
 *
 * Somehow wrong
 *
 * trying again
 *
 * same result will try and continue in hopes of
 * prpoer redering afterwards
 *
 * Everything was fine it waws just no data being passed
 * through the column array, changed movies.jsx to be
 * <TableBody columns = {this.columns} />
 *
 * Some logic will be needed to extracted to make the code cleaner
 * the renderCell function
 *
 */
class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((column) => (
              <td>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
