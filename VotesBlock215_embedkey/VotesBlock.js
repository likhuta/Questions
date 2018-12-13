var VotesBlock = React.createClass({

  displayName: 'VotesBlock',

  propTypes: {
    question: React.PropTypes.string.isRequired,
    answers:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
      })
    )
  },

  render: function() {
    console.log('VotesBlock', this.props);

    var answersCode=this.props.answers.map( v =>
      // в компонент VotesAnswer передается key:v.code . его по идее
      // я могу видеть в props-ах VotesAnswer
      // но его там нет. почему?
      React.createElement(VotesAnswer, {key:v.code, text:v.text, count:v.count} )
    );
    console.log('answersCode' ,answersCode);

    return React.DOM.div( {className:'VotesBlock'}, 
      React.createElement(VotesQuestion, {question:this.props.question} ),
      React.DOM.div( {className:'Answers'}, answersCode ),
    );
  },

});