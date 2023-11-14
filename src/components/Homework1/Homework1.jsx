import React, { Component } from "react";

export class Homework1 extends Component {
  constructor(props) {
    super();
    this.s2 = 201;

    console.log('Props:', props);
    
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
    console.log('btn1: s2',this.s2);
    console.log('btn1: s1',this.state.s1); 
    // s1 -> in state new value, but on screen old value -> old render
  }

  // test (Task 6)
  buttonHander2 = () => {
    this.s2 += 150;
    console.log('btn2: s2',this.s2);      // no render -> it's not state value
    console.log('btn2: s1',this.state.s1); 
  }


  render() {
    const styleBtn = { padding: '15px', marginRight: '5px', };

    return (
      <>
        <div>State: s1={this.state.s1}</div>
        <div>s2={this.s2}</div>
        <button type='button' onClick={this.buttonHander} style={styleBtn}>Add +50</button>
        {/* for Task 6 */}
        <button type='button' onClick={this.buttonHander2} style={styleBtn}>Add +150</button>
      </>
    )
  };
}

export default Homework1;