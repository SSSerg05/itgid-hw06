import React, { Component } from "react";

export class Homework1 extends Component {
  constructor(props) {
    super();
    this.s2 = 201;

    console.log(props);
    
    this.state = {
      s1: props.p1,
    }   
  }
 
  componentDidMount() {
    this.s2 += 5;
    const val = this.state.s1 + 5;
    this.setState({s1: val})
  }

  buttonHander = () => {
    this.s2 += 50;
    const val = this.state.s1 + 50;
    this.setState({s1: val})
  }

  render() {
    const styleBtn = {padding: '15px', };

    return (
      <>
        <div>State: s1={this.state.s1}</div>
        <div>s2={this.s2}</div>
        <button type='button' onClick={this.buttonHander} style={styleBtn}>Add +50</button>
      </>
    )
  };
}

export default Homework1;