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
 * the renderCell function, again with another methodf
 *
 */
class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
