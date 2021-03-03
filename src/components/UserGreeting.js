import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Siema Kondzio!</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Siema Kondzio</div>
    // ) : (
    //   <div>Siema Gość</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Siema Kondzio</div>;
    // } else {
    //   message = <div>Siema Gość</div>;
    // }

    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div>Siema Kondzio</div>;
    // } else {
    //   return <div>Siema Gość</div>;
    // }
  }
}

export default UserGreeting;
