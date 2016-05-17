var ClientActions = require('../actions/clientActions');
var ErrorStore = require('../stores/errorStore');

var Errors = {
  getInitialState: function () {
    return {
      errors: ErrorStore.errors()
    };
  },

  componentDidMount: function () {
    this.errorsListener = ErrorStore.addListener(this._errorsChanged);
  },

  componentWillUnmount: function () {
    this.errorsListener.remove();
  },

  _errorsChanged: function () {
    this.setState({ errors: ErrorStore.errors() });
  },
}

module.exports = Errors;
