const React = require('react');
const ReactDOM = require('react-dom');
const ons = require('onsenui');
const Ons = require('react-onsenui');

const App = React.createClass({
  handleClick: function() {
    ons.notification.alert('Hello world!');
  },

  render: function() {
    return (
      <Ons.Page>
        <Ons.Button onClick={this.handleClick}>Tap me!</Ons.Button>
      </Ons.Page>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));