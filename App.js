import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.impu).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.impu).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.impu).value
      })
  }

  render() {
    return (
    <div>
      <br />

      <br />
      <hr /><br /><br />
      <Slider ref="red" update={this.update} />
      {this.state.red}
      <br /><br />
      <Slider ref="green" update={this.update} />
      {this.state.green}
      <br /><br />
      <Slider ref="blue" update={this.update} />
      {this.state.blue}
    </div>
  );
  }
}

class Slider extends React.Component {
  render() {
    return (
        <div>
          <input ref="impu" type="range"
            min="0"
            max="255"
            onChange={this.props.update} />
        </div>
    );
  }
}
// const Widget = (props) => {
//   return (
//   <div>
//     <input type="text"
//       onChange={props.update} />
//     <h1>{props.txt}</h1>
//   </div>
// );
// }

export default App
