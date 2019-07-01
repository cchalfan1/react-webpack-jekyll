const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return <div>Hello Mongo</div>
  }
}

const rootEl = document.getElementById('app');
ReactDOM.render(<App />, rootEl);
