import React, { Component } from "react";

/**
 * Created Like component
 * (remember this is a simple DOM component handling, RENDERING ONLY!)
 * Input: Liked (Boolean Variable), First Set to False
 * Output: raises onClick event!
 *
 * #0.1: Did not have npm installed in current directory, need npm install first
 * #0.2: Updated to new packages using, npm audit fix
 * #0.3: npm audit fix does nto work, instead changed global id's, using npm -g update,
 *       moreover used nuc : node update checker;
 * #0.4: finally works onto coding like button by myself
 *
 * ---------
 * #1: Make sure BASE COMPONENT ACTUALLY WORKS, this is done prior to changing its
 *     implementation (want to return it first thing in the render method.)
 * #2: in the if statement !this.props.liked (if liked is nothing), then we will
 *     be empty if it is not set or false!
 * #3: because like component is not aware of being on or not, instead to
 *     clean up code one can use SFCs or stateless functional componenets,
 *     much more simple than having classes
 */

const Like = (props) => {
  let classes = "fa fa-heart";

  if (props.liked) classes += "-o";

  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
