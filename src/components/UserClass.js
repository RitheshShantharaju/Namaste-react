import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Rithesh",
        url: "Bangalore",
        avatar_url: "https://dummy.com/avatars/1.png",
      },
    };
    //console.log(this.props.name + " " + "child constructor called");
  }

  async componentDidMount() {
    // console.log(this.props.name + " " + "child componentDidMount called");

    const data = await fetch("https://api.github.com/users/ritheshshantharaju");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    // console.log(this.props.name + " " + "child render called");
    const { login, avatar_url, url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="avatar" />
        <h1>Name:{login}</h1>
        <h3>Location:{url}</h3>
        <h3>Contact: 1234567890</h3>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *     componentDid Update */
