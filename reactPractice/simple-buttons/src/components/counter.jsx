import React, { Component } from "react";

class Counter extends Component {
  //any data
  state = {
    value: this.props.counter.value,
    tags: []
    //imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call here
    }
  }

  componentWillUnmount() {
    console.log("Counter - unount");
    //clearn-up purposes
  }

  // this is to make conditional rendering possible
  renderTags() {
    if (this.state.tags.length === 0) return <p>no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // constructor() {
  // super();
  // always references the new object
  // this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // instead of constructor above make a arrow function, biding
  // event handlers

  //asynchronus because dont know when this method is to be callced
  //use inline functions again
  render() {
    //console.log("props", this.props);
    //calcuation of classes should not be done in render method
    // rather encapsulated on its own

    // truthy vs fasley!
    // this.handleIncrement == reference to method not method itself
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          X
        </button>
      </div>
    );
    // div to react fragment
    // any javascript code in between span ->
    // usually className="..." and import package name
    // for performance and maintainability
    // bootstrap documentation!

    //if u wana apply it urself then u gotta
    //use style={ }
    // passing objects applicable too with {{}} double curlies
    // unique to only this list aka array for this list only
  }

  //descriptive names for other devs
  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // needed to be consistent with yellow == 0 which is warning and blue else
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // needed to embedded expressions
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
