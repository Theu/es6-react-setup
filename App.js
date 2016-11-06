import React from 'react';
import ReactDOM from 'react-dom';
// import Bottone from './Bottone';

class App extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  update(){
    this.setState({ val:this.state.val + 1 })
  }

  componentWillMount(){
    console.log('this is mounting');
  }

  componentDidMount(){
    console.log('elemento caricato');
  }

  render(){
    console.log('qui verifico se il rendering é attivo')
    return(
      <div>
        <button onClick={this.update}>
          Cliccami tutto
        </button>
        <h1>{this.state.val}</h1>
      </div>
    )
  }
  componentWillUnmount(){
    console.log('ho smontato tutto!');
  }
}

class Wrapper extends React.Component {
  constructor(){
    super();
    this.mount = this.mount.bind(this)
    this.unmount = this.unmount.bind(this)
  }
  mount(){
    ReactDOM.render(<App />, document.getElementById('contenitore'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('contenitore'))
  }

  render(){
    console.log('ciao sono Wrapper');
    return(
      <div>
        <button onClick={this.mount}>monta</button>
        <button onClick={this.unmount}>smonta</button>
        <div id="contenitore"></div>
      </div>
    )
  }
}
export default Wrapper
