import React from 'react';
import PlayerViews from './PlayerViews';
import Image from "../1.jpeg";
import Image2 from "../2.jpeg";
import Image3 from "../3.jpeg";
import lan from "../lan.jpeg";
import lan2 from "../lan2.jpeg";
import lan3 from "../lan3.jpeg";
import "../index.css";
import star from "../star.png";

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper2 = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2 id="plantTop">Plant a Tree In</h2>
        <div id="treeInfo">4.9 <img id="star" src={star}></img>, Superhost.&nbsp;&nbsp;&nbsp;Marlborough, Massachusetts</div><br/>
        <img className="image2" src={Image2}></img>
        <img className="image1" src={Image}></img>
        <img className="image3" src={Image3}></img>
        {content}
      </div>
    );
  }
}

exports.Wrapper = class extends React.Component {

  
  render() {
    const {content} = this.props;
    var ab = Math.floor(Math.random() * 2);

    // ab =
    return (
      <div className="Deployer">

      { ab == 1 ? <div><h2 id="plantTop">Plant a Tree In</h2>
        <div id="treeInfo">4.6 <img id="star" src={star}></img>, Superhost.&nbsp;&nbsp;&nbsp;Lancaster, Pennsylvania</div><br/>
        <img className="image1" src={lan2}></img>
        <img className="image2" src={lan}></img>
        <img className="image3" src={lan3}></img>
        {content}</div> : <div> <h2 id="plantTop">Plant a Tree In</h2>
        <div id="treeInfo">4.9 <img id="star" src={star}></img>, Superhost.&nbsp;&nbsp;&nbsp;Marlborough, Massachusetts</div><br/>
        <img className="image2" src={Image2}></img>
        <img className="image1" src={Image}></img>
        <img className="image3" src={Image3}></img>
        {content}
      </div>
      }  
      </div>
    );
  }
}



exports.SetWager = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    return (
      <div className="treeAgreement">
        
          Type: English Oak<br/>
          Offer: USD 250 + 15% C02 Credit<br/>
          Price in Crypto: <input
          type='number'
          placeholder={defaultWager}
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        /> {standardUnit}<br/>
        <button
          onClick={() => parent.setWager(wager)}
        >Donate Tree</button>
        <br />
      </div>
    );
  }
}

exports.SetWager2 = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    return (
      <div className="treeAgreement">
        
          Type: Sequoia<br/>
          Offer: USD 150 + 12% C02 Credit<br/>
          Price in Crypto: <input
          type='number'
          placeholder={defaultWager}
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        /> {standardUnit}<br/>
        <button
          onClick={() => parent.setWager(wager)}
        >Donate Tree / Set wager</button>
        <br />
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, standardUnit} = this.props;
    return (
      <div>
        Tree To Donate Fee (pay to deploy): <strong>{wager}</strong> {standardUnit}
        <br />
        <button
          onClick={() => parent.deploy()}
        >Donate Tree</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Sending Tree-to-plant offer... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for TreeBro to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;
