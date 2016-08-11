var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      unityName: ''
    }
  },

  handleSubmitUser: function (e) {
    e.preventDefault();
    var unityName = this.state.unityName;
    this.setState({
      unityName: ''
    });

    if (this.props.routeParams.unityName){
      this.context.router.push({
        pathname: '/thankyou',
        query: {
          unityName: this.props.routeParams.unityName,
          unityThoughts: this.state.unityName,
        }
      })
    } else {
      this.context.router.push('/unityThoughts/' + this.state.unityName)
    }
  },

  handleUpdateUser: function (e) {
    this.setState({
      unityName: e.target.value
    });
  },

  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        placeholderText={this.props.route.placeholderText}
        textType={this.props.route.textType} />
    )
  }

});

module.exports = PromptContainer;
