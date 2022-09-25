import React from 'react';
import tree from '../treeicon.png';
import handshake from '../handshake.png';
import logo from '../logo.png';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <div className="header">
            <a href="/"><img className="logo" src={logo}/></a>
          </div>
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait while we connect to your account.
        If this takes more than a few seconds, there may be something wrong.
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div id="mainParentDiv">
        <div id="plantTree">
          <img className="icon-img" src={tree}></img><br/>
          <button
            onClick={() => parent.selectDeployer()}
          >Plant Tree</button>
          <br /><br /> No Space?  Purchase a tree to plant
        </div>
        <div id="confirmOffer">
          <img className="icon-img" src={handshake}></img><br/>
          <button
            onClick={() => parent.selectAttacher()}
          >Confirm Offer</button>
          <br /><br />Check offers to plant tree
        </div>  
      </div>
    );
  }
}

export default exports;
