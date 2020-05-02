import React from "react";
import PropTypes from "prop-types";
import _ from "lodash"; // from underscore javasceipt libarary

/**
 *  @name: listGroup "SFC" (Stateless Functional Component)
 *  @author: Hunain Khalid
 *
 *  Used as a button, deciding what genre to select for.
 *  Remember to get the base "plubming", then base component working first
 *
 *  Okay, make sure use of object destructoring is high, hence cleaner, more
 *  reusable code.
 *
 *  Okay so make sure you use defaultProps for generalized information of the
 *  SFC. Simplifies using this component.
 *
 *
 */
const ListGroup = (props) => {
  const { items, textProp, valProp, onItemSelect, selectedItem } = props;

  return (
    <nav>
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valProp]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProp]}
          </li>
        ))}
      </ul>
    </nav>
  );
};

ListGroup.defaultProps = {
  textProp: "name",
  valProp: "_id",
};

export default ListGroup;
