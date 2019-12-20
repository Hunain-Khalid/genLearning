import React, { Component } from "react";

class Counter extends Component {
  //any data
  state = {
    count: 0,
    tags: []
    //imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

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
  handleIncrement = id => {
    console.log(id);
    // do not have access to the 'this' state property
    // obj.method(); -> this will be returned corrctly
    // function(); -> does not ahve 'this' to look at
    // console.log("increment click", this);
    // react does not acknowledge changes like angular does
    // hence needed this.setState to change states
    // get the actual count add 1, and set it to count
    this.setState({ count: this.state.count + 1 });
  };

  //asynchronus because dont know when this method is to be callced
  //use inline functions again
  render() {
    //calcuation of classes should not be done in render method
    // rather encapsulated on its own

    // truthy vs fasley!
    // this.handleIncrement == reference to method not method itself
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: this.state.count })}
          className="btn btn-secondary btn-sm"
        >
          Increment
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  // needed to embedded expressions
  formatCount() {
    const { count } = this.state;
    const x = <h1>Zero</h1>;
    return count === 0 ? x : count;
  }
}

export default Counter;
