import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        {'Please pick a hand'}
        <br />
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playHand(0)}
        >Zero</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(1)}
        >One</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(2)}
        >Two</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(3)}
        >Three</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(4)}
        >Four</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(5)}
        >Five</button>
      </div>
    );
  }
}

exports.GetHand2 = class extends React.Component {
  render() {
    const {parent, playable, wager, bal} = this.props;
    return (
      <div>
        You have successfully planted the tree(s).
        Fee: {wager} <br/>
        Balance: {bal}
      </div>
    )
  }
}

exports.GetGuess = class extends React.Component{
  render(){
    //constants ?
    const {parent, playable, guess} = this.props;
    return(
      <div>
        {guess ? 'It was a draw, guess again!' : ''}
        <br />
        {!playable ? 'Please Wait...' : ''}
        <br />
        {'Please guess the total'}
        <br />
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGuess(0)}
        >Zero</button>
        <button
          disable={!playable}
          onClick={() => parent.playGuess(1)}
        >One</button>
        <button
          disable={!playable}
          onClick={() => parent.playGuess(2)}
        >Two</button>
        <button
          disable={!playable}
          onClick={() => parent.playGuess(3)}
        >Three</button>
        <button
          disable={!playable}
          onClick={() => parent.playGuess(4)}
        >Four</button>
        <button
          disable={!playable}
          onClick={() => parent.playGuess(5)}
        >Five</button>
        <button
          disable={!playable}
          onClick={() => parent.playGuess(6)}
        >Six</button>
        <button
          disable={!playable}
          onClick={() => parent.playGuess(7)}
        >Seven</button>
        <button
          disable={!playable}
          onClick={() => parent.playGuess(8)}
        >Eight</button>
        <button
          disable={!playable}
          onClick={() => parent.playGuess(9)}
        >Nine</button>
        <button
          disable={!playable}
          onClick={() => parent.playGuess(10)}
        >Ten</button>
      </div>
    );
  }
}

/*
exports.SeeActual = class extends React.Component {
  render() {
  const {sum} = this.props;
    return (
      <div>
        The total was: 
        <br /> {sum}
      </div>
    );
  }
}*/

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
