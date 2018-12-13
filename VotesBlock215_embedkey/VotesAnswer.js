var VotesAnswer = React.createClass({
 

  displayName: 'VotesAnswer',

  propTypes: {
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
  },

  render: function() {
    console.log( 'VotesAnswer',this.props);
    //console.log(this.props.key)
   // передается сюда key  вместе с props?
    return React.DOM.div( {className:'VotesBlockAnswer'},
      React.DOM.span({className:'Count'},this.props.count),
      React.DOM.span({className:'Text'},this.props.text),
    );

  },

});