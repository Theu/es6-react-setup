import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render() {
    let paolo = this.props.paolo;
    let apple = this.props.apple
    return (
      <div>
        <h1>{paolo}</h1>
        <b>{apple}</b>
      </div>
  );
  }
}

// // ora vado a fare la stessa cosa usando una STATELESS FUNCTION il metodo usato da Atharva
// come dice il nome UNA STATELLS non puó avere stato
// const App = () => <h1>HELLO STATELESS FUNCTION</h1>

App.propTypes = {
  paolo: React.PropTypes.string,
  apple: React.PropTypes.number.isRequired
}

App.defaultProps = {
  apple: '4015'
}

ReactDOM.render(
  <App paolo="ciao, sono tuo cugino e mangio barbeque, ah. alla faccia tua" />, document.getElementById('app')
);
