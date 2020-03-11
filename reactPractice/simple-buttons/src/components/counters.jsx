import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  //destructing in the cont b4 return
  //setting it to this.props, makes code cleaner

  render() {
    console.log("Counters - Rendered");

    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset Counters
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
