import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render() {
    let txt = this.props.txt;
    let cat = this.props.cat
    return (
      <div>
        <h1>{txt}</h1>
        <b>{cat}</b>
      </div>
  );
  }
}

// // ora vado a fare la stessa cosa usando una STATELESS FUNCTION il metodo usato da Atharva
// come dice il nome UNA STATELLS non puó avere stato
// const App = () => <h1>HELLO STATELESS FUNCTION</h1>

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt'
}

ReactDOM.render(
  <App cat={5} txt="this is the props value" />, document.getElementById('app')
);
