import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));


// declare constants
const intToOutcome = ['Starsky Wins!', 'Hutch Wins!', 'Draw'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '1', standardUnit};

class App extends React.Component {
    // state based views
    constructor(props) {
        super(props);
        this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount() {
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({acc, bal});
        this.bal = bal;
        if(await reach.canFundFromFaucet()){
            this.setState({view: 'FundAccount'});
        } else {
            this.setState({view: 'DeployerOrAttacher'});
        }
    }
    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
    }
    async skipFundAccount() {this.setState({view: 'DeployerOrAttacher'}); }
    selectAttacher() {this.setState({view: 'Wrapper', ContentView: Attacher});}
    selectDeployer() {this.setState({view: 'Wrapper', ContentView: Deployer});}
    render() { return renderView(this, AppViews);}
}

// Shared
class Player extends React.Component {
    //these are the function definitions
    // these mirror the front end
    random() { return reach.hasRandom.random(); }
    async getHand() {
        const hand = await new Promise(resolveHandP => {
            this.setState({view: 'GetHand2', playable: true, resolveHandP});
        });
        this.setState({view: 'WaitingForResults', hand});
        return hand;
    }
    async getGuess() {
        const guess = await new Promise(resolveGuessP => {
            this.setState({view: 'GetGuess', playable: true, resolveGuessP});
        });
        this.setState({view: 'WaitingForResults', guess});
        return guess;
    }
    seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]});}
    informTimeout() {this.setState({view: 'Timeout'}); }
    playHand(hand) { this.state.resolveHandP(hand); }
    playGuess(guess) { this.state.resolveGuessP(guess); }
    //seeActual(sum) { this.setState({view: 'SeeActual', sum}); }
}

class Deployer extends Player {
    constructor(props) {
        super(props);
        this.state = {view: 'SetWager'};
    }
    setWager(wager) {this.setState({view: 'Deploy', wager});}
    async deploy() {
        const ctc = this.props.acc.contract(backend);
        this.setState({view: 'Deploying', ctc});
        this.wager = reach.parseCurrency(this.state.wager);
        this.deadline = {ETH: 500, ALGO: 100, CFX: 1000}[reach.connector];
        backend.Starsky(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    }
    render() { return renderView(this, DeployerViews); }
    // this is the end of Deployer
}

// Attacher
class Attacher extends Player {
    constructor(props) {
        super(props);
        this.state = {view: 'Attach'};
    }
    attach(ctcInfoStr) {
        const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({view: 'Attaching'});
        backend.Hutch(ctc, this);
    }
    async acceptWager(wagerAtomic){
        const wager = reach.formatCurrency(wagerAtomic, 4);
        return await new Promise(resolveAcceptedP => {
            this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
        });
    }
    async termsAccepted() {
        this.state.resolveAcceptedP();
        await reach.wait(14);
        this.setState({view: 'WaitingForTurn'});
    }
    render() { return renderView(this, AttacherViews);}
}
renderDOM(<App />);
