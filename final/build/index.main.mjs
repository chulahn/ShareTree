// Automatically generated with Reach 0.1.12 (816420cc)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (816420cc)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Hutch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Hutch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Hutch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v347, v348], secs: v350, time: v349, didSend: v73, from: v346 } = txn1;
  ;
  const v359 = stdlib.safeAdd(v349, v348);
  stdlib.protect(ctc1, await interact.acceptWager(v347), {
    at: './index.rsh:97:25:application',
    fs: ['at ./index.rsh:96:13:application call to [unknown function] (defined at: ./index.rsh:96:17:function exp)'],
    msg: 'acceptWager',
    who: 'Hutch'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v346, v347, v348, v359],
    evt_cnt: 0,
    funcNum: 1,
    lct: v349,
    onlyIf: true,
    out_tys: [],
    pay: [v347, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v365, time: v364, didSend: v82, from: v363 } = txn2;
      
      const v367 = stdlib.add(v347, v347);
      sim_r.txns.push({
        amt: v347,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v369 = v364;
      const v376 = v367;
      
      if (await (async () => {
        const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        
        return v384;})()) {
        const v391 = stdlib.safeAdd(v369, v348);
        sim_r.isHalt = false;
        }
      else {
        const v509 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v512 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:182:12:decimal', stdlib.UInt_max, '2'), v347);
        const v514 = v509 ? v346 : v363;
        sim_r.txns.push({
          kind: 'from',
          to: v514,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v359],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v346, v347, v348, v359],
      evt_cnt: 0,
      funcNum: 2,
      lct: v349,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v527, time: v526, didSend: v287, from: v525 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v346,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v527, time: v526, didSend: v287, from: v525 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:80:29:application',
      fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:102:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Hutch'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v365, time: v364, didSend: v82, from: v363 } = txn2;
    const v367 = stdlib.add(v347, v347);
    ;
    let v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    let v369 = v364;
    let v376 = v367;
    
    let txn3 = txn2;
    while (await (async () => {
      const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      
      return v384;})()) {
      const v391 = stdlib.safeAdd(v369, v348);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v391],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v346, v347, v348, v363, v376, v391],
          evt_cnt: 0,
          funcNum: 5,
          lct: v369,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v493, time: v492, didSend: v238, from: v491 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v363,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v493, time: v492, didSend: v238, from: v491 } = txn5;
        ;
        const v494 = stdlib.addressEq(v363, v491);
        const v495 = stdlib.addressEq(v346, v491);
        const v496 = v494 ? true : v495;
        stdlib.assert(v496, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:130:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Hutch'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:80:29:application',
          fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:130:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Hutch'
          });
        
        return;
        
        }
      else {
        const {data: [v404, v405], secs: v407, time: v406, didSend: v114, from: v403 } = txn4;
        ;
        const v408 = stdlib.addressEq(v346, v403);
        stdlib.assert(v408, {
          at: './index.rsh:129:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Hutch'
          });
        const v415 = stdlib.safeAdd(v406, v348);
        const v419 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:138:42:application',
          fs: ['at ./index.rsh:137:15:application call to [unknown function] (defined at: ./index.rsh:137:19:function exp)'],
          msg: 'getHand',
          who: 'Hutch'
          });
        const v420 = stdlib.protect(ctc0, await interact.getGuess(v419), {
          at: './index.rsh:139:40:application',
          fs: ['at ./index.rsh:137:15:application call to [unknown function] (defined at: ./index.rsh:137:19:function exp)'],
          msg: 'getGuess',
          who: 'Hutch'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v346, v347, v348, v363, v376, v404, v405, v415, v419, v420],
          evt_cnt: 2,
          funcNum: 6,
          lct: v406,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:144:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v422, v423], secs: v425, time: v424, didSend: v126, from: v421 } = txn5;
            
            ;
            const v433 = stdlib.safeAdd(v424, v348);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v415],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v346, v347, v348, v363, v376, v404, v405, v415],
            evt_cnt: 0,
            funcNum: 7,
            lct: v406,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v475, time: v474, didSend: v204, from: v473 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v346,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v475, time: v474, didSend: v204, from: v473 } = txn6;
          ;
          const v476 = stdlib.addressEq(v363, v473);
          const v477 = stdlib.addressEq(v346, v473);
          const v478 = v476 ? true : v477;
          stdlib.assert(v478, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:145:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Hutch'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:80:29:application',
            fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:145:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Hutch'
            });
          
          return;
          
          }
        else {
          const {data: [v422, v423], secs: v425, time: v424, didSend: v126, from: v421 } = txn5;
          ;
          const v426 = stdlib.addressEq(v363, v421);
          stdlib.assert(v426, {
            at: './index.rsh:144:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Hutch'
            });
          const v433 = stdlib.safeAdd(v424, v348);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v433],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v346, v347, v348, v363, v376, v404, v405, v422, v423, v433],
              evt_cnt: 0,
              funcNum: 9,
              lct: v424,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v457, time: v456, didSend: v170, from: v455 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v363,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v457, time: v456, didSend: v170, from: v455 } = txn7;
            ;
            const v458 = stdlib.addressEq(v363, v455);
            const v459 = stdlib.addressEq(v346, v455);
            const v460 = v458 ? true : v459;
            stdlib.assert(v460, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:156:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Hutch'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:80:29:application',
              fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:156:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Hutch'
              });
            
            return;
            
            }
          else {
            const {data: [v438, v439, v440, v441], secs: v443, time: v442, didSend: v138, from: v437 } = txn6;
            ;
            const v444 = stdlib.addressEq(v346, v437);
            stdlib.assert(v444, {
              at: './index.rsh:155:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Hutch'
              });
            const v445 = stdlib.digest([ctc0, ctc0], [v438, v439]);
            const v446 = stdlib.digestEq(v404, v445);
            stdlib.assert(v446, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:158:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Hutch'
              });
            const v447 = stdlib.digest([ctc0, ctc0], [v440, v441]);
            const v448 = stdlib.digestEq(v405, v447);
            stdlib.assert(v448, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:159:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Hutch'
              });
            let v449;
            const v450 = stdlib.eq(v441, v423);
            if (v450) {
              v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              }
            else {
              const v451 = stdlib.safeAdd(v439, v422);
              const v452 = stdlib.eq(v441, v451);
              if (v452) {
                v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v454 = stdlib.eq(v423, v451);
                if (v454) {
                  v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                else {
                  v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                }
              }
            const cv368 = v449;
            const cv369 = v442;
            const cv376 = v376;
            
            v368 = cv368;
            v369 = cv369;
            v376 = cv376;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v509 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v512 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:182:12:decimal', stdlib.UInt_max, '2'), v347);
    const v514 = v509 ? v346 : v363;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v368), {
      at: './index.rsh:187:24:application',
      fs: ['at ./index.rsh:186:7:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)'],
      msg: 'seeOutcome',
      who: 'Hutch'
      });
    
    return;
    }
  
  
  
  };
export async function Starsky(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Starsky expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Starsky expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v342 = stdlib.protect(ctc0, interact.deadline, 'for Starsky\'s interact field deadline');
  const v343 = stdlib.protect(ctc0, interact.wager, 'for Starsky\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v343, v342],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:91:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v343, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v347, v348], secs: v350, time: v349, didSend: v73, from: v346 } = txn1;
      
      sim_r.txns.push({
        amt: v347,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v359 = stdlib.safeAdd(v349, v348);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v347, v348], secs: v350, time: v349, didSend: v73, from: v346 } = txn1;
  ;
  const v359 = stdlib.safeAdd(v349, v348);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v359],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v346, v347, v348, v359],
      evt_cnt: 0,
      funcNum: 2,
      lct: v349,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v527, time: v526, didSend: v287, from: v525 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v346,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v527, time: v526, didSend: v287, from: v525 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:80:29:application',
      fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:102:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Starsky'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v365, time: v364, didSend: v82, from: v363 } = txn2;
    const v367 = stdlib.add(v347, v347);
    ;
    let v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    let v369 = v364;
    let v376 = v367;
    
    let txn3 = txn2;
    while (await (async () => {
      const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      
      return v384;})()) {
      const v391 = stdlib.safeAdd(v369, v348);
      const v395 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:116:42:application',
        fs: ['at ./index.rsh:115:17:application call to [unknown function] (defined at: ./index.rsh:115:21:function exp)'],
        msg: 'getHand',
        who: 'Starsky'
        });
      const v396 = stdlib.protect(ctc0, await interact.getGuess(v395), {
        at: './index.rsh:119:40:application',
        fs: ['at ./index.rsh:115:17:application call to [unknown function] (defined at: ./index.rsh:115:21:function exp)'],
        msg: 'getGuess',
        who: 'Starsky'
        });
      const v397 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:122:48:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:115:17:application call to [unknown function] (defined at: ./index.rsh:115:21:function exp)'],
        msg: 'random',
        who: 'Starsky'
        });
      const v398 = stdlib.digest([ctc0, ctc0], [v397, v395]);
      const v400 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:124:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:115:17:application call to [unknown function] (defined at: ./index.rsh:115:21:function exp)'],
        msg: 'random',
        who: 'Starsky'
        });
      const v401 = stdlib.digest([ctc0, ctc0], [v400, v396]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v346, v347, v348, v363, v376, v391, v398, v401],
        evt_cnt: 2,
        funcNum: 4,
        lct: v369,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:129:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v404, v405], secs: v407, time: v406, didSend: v114, from: v403 } = txn4;
          
          ;
          const v415 = stdlib.safeAdd(v406, v348);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v391],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v346, v347, v348, v363, v376, v391],
          evt_cnt: 0,
          funcNum: 5,
          lct: v369,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v493, time: v492, didSend: v238, from: v491 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v363,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v493, time: v492, didSend: v238, from: v491 } = txn5;
        ;
        const v494 = stdlib.addressEq(v363, v491);
        const v495 = stdlib.addressEq(v346, v491);
        const v496 = v494 ? true : v495;
        stdlib.assert(v496, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:130:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Starsky'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:80:29:application',
          fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:130:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Starsky'
          });
        
        return;
        
        }
      else {
        const {data: [v404, v405], secs: v407, time: v406, didSend: v114, from: v403 } = txn4;
        ;
        const v408 = stdlib.addressEq(v346, v403);
        stdlib.assert(v408, {
          at: './index.rsh:129:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Starsky'
          });
        const v415 = stdlib.safeAdd(v406, v348);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v415],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v346, v347, v348, v363, v376, v404, v405, v415],
            evt_cnt: 0,
            funcNum: 7,
            lct: v406,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v475, time: v474, didSend: v204, from: v473 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v346,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v475, time: v474, didSend: v204, from: v473 } = txn6;
          ;
          const v476 = stdlib.addressEq(v363, v473);
          const v477 = stdlib.addressEq(v346, v473);
          const v478 = v476 ? true : v477;
          stdlib.assert(v478, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:145:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Starsky'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:80:29:application',
            fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:145:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Starsky'
            });
          
          return;
          
          }
        else {
          const {data: [v422, v423], secs: v425, time: v424, didSend: v126, from: v421 } = txn5;
          ;
          const v426 = stdlib.addressEq(v363, v421);
          stdlib.assert(v426, {
            at: './index.rsh:144:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Starsky'
            });
          const v433 = stdlib.safeAdd(v424, v348);
          const txn6 = await (ctc.sendrecv({
            args: [v346, v347, v348, v363, v376, v404, v405, v422, v423, v433, v397, v395, v400, v396],
            evt_cnt: 4,
            funcNum: 8,
            lct: v424,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:155:13:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v438, v439, v440, v441], secs: v443, time: v442, didSend: v138, from: v437 } = txn6;
              
              ;
              let v449;
              const v450 = stdlib.eq(v441, v423);
              if (v450) {
                v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                const v451 = stdlib.safeAdd(v439, v422);
                const v452 = stdlib.eq(v441, v451);
                if (v452) {
                  v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v454 = stdlib.eq(v423, v451);
                  if (v454) {
                    v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  else {
                    v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  }
                }
              const cv368 = v449;
              const cv369 = v442;
              const cv376 = v376;
              
              await (async () => {
                const v368 = cv368;
                const v369 = cv369;
                const v376 = cv376;
                
                if (await (async () => {
                  const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  
                  return v384;})()) {
                  const v391 = stdlib.safeAdd(v369, v348);
                  sim_r.isHalt = false;
                  }
                else {
                  const v509 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v512 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:182:12:decimal', stdlib.UInt_max, '2'), v347);
                  const v514 = v509 ? v346 : v363;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v514,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v433],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v346, v347, v348, v363, v376, v404, v405, v422, v423, v433],
              evt_cnt: 0,
              funcNum: 9,
              lct: v424,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v457, time: v456, didSend: v170, from: v455 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v363,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v457, time: v456, didSend: v170, from: v455 } = txn7;
            ;
            const v458 = stdlib.addressEq(v363, v455);
            const v459 = stdlib.addressEq(v346, v455);
            const v460 = v458 ? true : v459;
            stdlib.assert(v460, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:156:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Starsky'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:80:29:application',
              fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:156:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Starsky'
              });
            
            return;
            
            }
          else {
            const {data: [v438, v439, v440, v441], secs: v443, time: v442, didSend: v138, from: v437 } = txn6;
            ;
            const v444 = stdlib.addressEq(v346, v437);
            stdlib.assert(v444, {
              at: './index.rsh:155:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Starsky'
              });
            const v445 = stdlib.digest([ctc0, ctc0], [v438, v439]);
            const v446 = stdlib.digestEq(v404, v445);
            stdlib.assert(v446, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:158:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Starsky'
              });
            const v447 = stdlib.digest([ctc0, ctc0], [v440, v441]);
            const v448 = stdlib.digestEq(v405, v447);
            stdlib.assert(v448, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:159:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Starsky'
              });
            let v449;
            const v450 = stdlib.eq(v441, v423);
            if (v450) {
              v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              }
            else {
              const v451 = stdlib.safeAdd(v439, v422);
              const v452 = stdlib.eq(v441, v451);
              if (v452) {
                v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v454 = stdlib.eq(v423, v451);
                if (v454) {
                  v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                else {
                  v449 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                }
              }
            const cv368 = v449;
            const cv369 = v442;
            const cv376 = v376;
            
            v368 = cv368;
            v369 = cv369;
            v376 = cv376;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v509 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v512 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:182:12:decimal', stdlib.UInt_max, '2'), v347);
    const v514 = v509 ? v346 : v363;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v368), {
      at: './index.rsh:187:24:application',
      fs: ['at ./index.rsh:186:7:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp)'],
      msg: 'seeOutcome',
      who: 'Starsky'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAECUAgFCSAHKJgBqAFYMCYDAQABAQAiNQAxGEEFCypkSSJbNQEhBFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQUMQAKZSSEIDEABjEkhBAxAATJJIQYMQABWIQYSRCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEogVmjrAyBjQDIQtbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMlW7III7IQNP+yB7NCBCFIIQY0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/4GgAVs1/kk1BUlKIls1/SEEWzX8gRBbNfuBGFs1+oAEf6I7UjT9FlA0/BZQNPsWUDT6FlCwMgY0AyELWwxENP8xABJENANXWCA0/RY0/BZQARJENANXeCA0+xY0+hZQARJENPo0/hJBAAYkNflCACk0/DQDIQpbCDX4NPo0+BJBAAYiNflCABE0/jT4EkEABiM1+UIAAyQ1+TT/NAMhB1s0AyEJWzQDVzAgNPkyBjQDJVtCAuxIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDQDVzAgMQASNP8xABIRRLEisgE0AyVbsggjshA0/7IHs0IC+UmBBgxAAK9IIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEHWzX+IQlbNf1XMCA1/CVbNftXWCA1+ld4IDX5STUFSSJbNfghBFs194AESiHL/DT4FlA09xZQsDIGNAMhClsMRDT8MQASRDIGNP0INfY0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfzFnSCEGNQEyBjUCQgJfSCEFNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQxbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMlW7III7IQNP+yB7NCAfNJJAxAAN9JgQQMQACYSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEHWzX+IQlbNf1XMCA1/CVbNftJNQVJVwAgNfpXICA1+YAEYF2kKzT6UDT5ULAyBjQDIQxbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQg1ATIGNQJCAWokEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ1bD0SxIrIBNAMhB1uyCCOyEDQDVwAgsgezQgEOSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEHWzX/gASai5F0sDIGNAMhDVsMRDT/iAFGNANXACA0/zQDIQlbMQAkMgY0/0kIQgBgSIGgjQaIASYiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBFs1/oAErNEfwzT/FlA0/hZQsDT/iAD1MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB8Nf81/jX9Nfw1+zX6Nfk0/SQSQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQU1ATIGNQJCADixIrIBJDT6C7III7IQNPw0+TT9IhJNsgezQgAAMRkhBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v348",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v348",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v438",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v439",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v438",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v439",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001dcb38038062001dcb8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a4e806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611539565b610197565b6100a16100e836600461155c565b6103fc565b6100a16100fb36600461155c565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a161012336600461155c565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be92919061156e565b6100a161015936600461155c565b610941565b6100a161016c3660046115cb565b610ad8565b6100a161017f36600461155c565b610dc9565b6100a1610192366004611539565b610f24565b6101a7600760005414601c611195565b6101c1813515806101ba57506001548235145b601d611195565b6000808055600280546101d3906115dd565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115dd565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611666565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e611195565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be929190611712565b60405180910390a16102d23415601a611195565b60608201516102ed906001600160a01b03163314601b611195565b6102fb4383604001516111bb565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d191839101611743565b604051602081830303815290604052600290805190602001906103f59291906113f2565b5050505050565b61040c6001600054146009611195565b6104268135158061041f57506001548235145b600a611195565b600080805560028054610438906115dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610464906115dd565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c991906117ca565b90506104dc81606001514310600b611195565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d929190611843565b60405180910390a1610526816020015134146008611195565b61052e611476565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516002905251439201919091525180016020820151604001526105868161120e565b505050565b61059b600160005414600d611195565b6105b5813515806105ae57506001548235145b600e611195565b6000808055600280546105c7906115dd565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906115dd565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906117ca565b905061066c8160600151431015600f611195565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d929190611843565b60405180910390a16106b13415600c611195565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b5060008080556001819055610705906002906114cf565b5050565b6107196005600054146017611195565b6107338135158061072c57506001548235145b6018611195565b600080805560028054610745906115dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610771906115dd565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d69190611880565b90506107ea8160a001514310156019611195565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b929190611843565b60405180910390a161082f34156015611195565b6060810151610863906001600160a01b031633146108595781516001600160a01b0316331461085c565b60015b6016611195565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b9906115dd565b80601f01602080910402602001604051908101604052809291908181526020018280546108e5906115dd565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b6109516007600054146021611195565b61096b8135158061096457506001548235145b6022611195565b60008080556002805461097d906115dd565b80601f01602080910402602001604051908101604052809291908181526020018280546109a9906115dd565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e9190611666565b9050610a228160e001514310156023611195565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a53929190611843565b60405180910390a1610a673415601f611195565b6060810151610a9b906001600160a01b03163314610a915781516001600160a01b03163314610a94565b60015b6020611195565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae86009600054146028611195565b610b0281351580610afb57506001548235145b6029611195565b600080805560028054610b14906115dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610b40906115dd565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba59190611914565b9050610bc4604051806040016040528060008152602001600081525090565b610bd68261012001514310602a611195565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c4934156024611195565b8151610c61906001600160a01b031633146025611195565b60408051610cad91610c8791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146026611195565b604080516060858101356020830152608086013592820192909252610cf391016040516020818303038152906040528051906020012060001c8360c00151146027611195565b61010082015160808401351415610d0d5760028152610d5c565b610d2283602001602001358360e001516111bb565b6020820181905260808401351415610d3d5760008152610d5c565b80602001518261010001511415610d575760018152610d5c565b600281525b610d64611476565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610dc38161120e565b50505050565b610dd9600960005414602d611195565b610df381351580610dec57506001548235145b602e611195565b600080805560028054610e05906115dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610e31906115dd565b8015610e7e5780601f10610e5357610100808354040283529160200191610e7e565b820191906000526020600020905b815481529060010190602001808311610e6157829003601f168201915b5050505050806020019051810190610e969190611914565b9050610eab816101200151431015602f611195565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610edc929190611843565b60405180910390a1610ef03415602b611195565b6060810151610863906001600160a01b03163314610f1a5781516001600160a01b03163314610f1d565b60015b602c611195565b610f346005600054146012611195565b610f4e81351580610f4757506001548235145b6013611195565b600080805560028054610f60906115dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8c906115dd565b8015610fd95780601f10610fae57610100808354040283529160200191610fd9565b820191906000526020600020905b815481529060010190602001808311610fbc57829003601f168201915b5050505050806020019051810190610ff19190611880565b90506110096040518060200160405280600081525090565b61101a8260a0015143106014611195565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a338460405161104b929190611712565b60405180910390a161105f34156010611195565b8151611077906001600160a01b031633146011611195565b6110854383604001516111bb565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111c883826119bf565b91508110156112085760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111b2565b92915050565b60408051602081019091526000815260208201515160021415611332576112458260200151602001518360000151604001516111bb565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610dc39291906113f2565b602082015151156113485781516060015161134c565b8151515b6001600160a01b03166108fc61136b6002856000015160200151611393565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b60008115806113b7575082826113a981836119d7565b92506113b590836119f6565b145b6112085760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111b2565b8280546113fe906115dd565b90600052602060002090601f0160209004810192826114205760008555611466565b82601f1061143957805160ff1916838001178555611466565b82800160010185558215611466579182015b8281111561146657825182559160200191906001019061144b565b5061147292915061150c565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016114ca60405180606001604052806000815260200160008152602001600081525090565b905290565b5080546114db906115dd565b6000825580601f106114eb575050565b601f016020900490600052602060002090810190611509919061150c565b50565b5b80821115611472576000815560010161150d565b60006060828403121561153357600080fd5b50919050565b60006060828403121561154b57600080fd5b6115558383611521565b9392505050565b60006040828403121561153357600080fd5b82815260006020604081840152835180604085015260005b818110156115a257858101830151858201606001528201611586565b818111156115b4576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561153357600080fd5b600181811c908216806115f157607f821691505b6020821081141561153357634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561164457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461166157600080fd5b919050565b600061010080838503121561167a57600080fd5b6040519081019067ffffffffffffffff821181831017156116ab57634e487b7160e01b600052604160045260246000fd5b816040526116b88461164a565b815260208401516020820152604084015160408201526116da6060850161164a565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161155560208301848035825260208082013590830152604090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161178360608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000608082840312156117dc57600080fd5b6040516080810181811067ffffffffffffffff8211171561180d57634e487b7160e01b600052604160045260246000fd5b6040526118198361164a565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461187157600080fd5b80604085015250509392505050565b600060c0828403121561189257600080fd5b60405160c0810181811067ffffffffffffffff821117156118c357634e487b7160e01b600052604160045260246000fd5b6040526118cf8361164a565b815260208301516020820152604083015160408201526118f16060840161164a565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561192757600080fd5b61192f611612565b6119388361164a565b8152602083015160208201526040830151604082015261195a6060840161164a565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119d2576119d26119a9565b500190565b60008160001904831182151516156119f1576119f16119a9565b500290565b600082611a1357634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212209bb1bb15ff70caeaacc9e3296f2c680a62b5a7802eaf72d95569b0f007b2236764736f6c634300080c0033`,
  BytecodeLen: 7627,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:93:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:102:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:183:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:113:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:130:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:131:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:145:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:146:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:156:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Hutch": Hutch,
  "Starsky": Starsky
  };
export const _APIs = {
  };
