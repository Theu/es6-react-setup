import React from 'react';

let myMixin = InnerComponent => class extends React.Component {
  constructor(){
    super();
    this.state = {val:0};
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val: this.state.val + 1})
  }

  render(){
    return <InnerComponent
      update={this.update}
      {...this.state}
      {...this.props} />
  }
}

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>

let ButtonMixed = myMixin(Button)

class App extends React.Component {

  render() {
    return (
      <div>
        <ButtonMixed txt="Button" />
      </div>
    );
  }

}

export default App;
