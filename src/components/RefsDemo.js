import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    this.cbRef.focus();
  }

  clickHandler = () => {
    alert(this.cbRef.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default RefsDemo;
