const React = require('react');
const ReactDOM = require('react-dom');
class App extends React.Component {
    render() {
        return React.createElement("div", null, "Hello Mongo");
    }
}
const rootEl = document.getElementById('app');
ReactDOM.render(React.createElement(App, null), rootEl);
//# sourceMappingURL=index.js.map