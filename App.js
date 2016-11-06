import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    // this.state = { stVal: 0 }
    // this.stUpdate = this.stUpdate.bind(this);
    this.update = this.update.bind(this);
    this.state = {increasing: false}
  }
  update(){
    ReactDOM.render(
      <App val={this.props.val+1} />,
      document.getElementById('app')
    );
  }
  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  componentDidUpdate(prevPops){
    console.log('prevProps', prevPops);
  }
  // stUpdate(){
  //   this.setState({ stVal: this.props.val * 100 })
  // }
  render(){
    console.log(this.state.increasing);
    return(
      <div>
        <button onClick={this.update}>
          +
        </button>
        <h1>I am not a state I am a prop {this.props.val}</h1>
        {/* <button onClick={this.stUpdate}>
          +
          </button>
        <h1>with state {this.state.stVal}</h1> */}
      </div>
    )
  }
}
App.defaultProps = { val: 0 }

export default App
