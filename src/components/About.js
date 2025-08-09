import User from "./User";
import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor called");
  }

  componentDidMount() {
    //console.log("Parent componentDidMount called");
  }

  render() {
    // console.log("Parent render called");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the about page of our application.</p>
        <UserClass name={"Rithesh"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
