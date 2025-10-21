import{m as h,d as f,l as b,G as c,c as Q,b as Y,R as e,a as ee,e as C,B as I}from"./index-260f2fb2.js";const te="/assets/finish-89d641e7.mp3",se="/assets/tick-4a62b354.mp3",ne="/assets/win-fccf1281.mp3",ae="/assets/axe-96913656.mp3",re="/assets/explode-b3aafc71.mp3",u=16,ie=1.06,$=[1,3,5,10,15],le=h`
  0%, 50%, 100% {
    transform: scale(1);
    filter: brightness(1);
    /* background: #764cc4; */
    /* box-shadow: 0 0 1px 1px #ffffff00; */
  }
  25% {
    transform: scale(0.95);
    filter: brightness(1.5);
    /* background: #945ef7; */
    /* box-shadow: 0 0 1px 1px #ffffff99; */
  }
`,oe=h`
  0% {
    filter: brightness(1);
    /* background: #ffffff; */
    transform: scale(1.1);
  }
  75% {
    filter: brightness(2);
    /* background: #3fff7a; */
    transform: scale(1.2);
  }
`,ce=h`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  51% {
    background: #ffffff;
    transform: scale(1.6);
  }
`;h`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;const ue=f.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100%;
`,me=f.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  user-select: none;
  backdrop-filter: blur(20px);
`,fe=f.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 8px;
`,de=f.div`
  border-radius: 5px;
  color: gray;
  background: #292a307d;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 50px;
`,pe=f.div`
  margin: 0 auto;
  width: 25%;
  text-align: center;
  padding: 5px 0;
  opacity: .5;
  text-wrap: nowrap;

  & > div:first-child {
    font-size: 60%;
    color: gray;
  }

  ${s=>s.$active&&b`
    background: #FFFFFF11;
    background: 2px 0px 10px #00000033;
    color: #32cd5e;
    opacity: 1;
  `}
`,_e=f.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: #9358ff;
  background-size: 100%;
  border: none;
  border-bottom: 5px solid #00000055;
  border-radius: 4px;
  font-weight: bold;
  aspect-ratio: 1;
  width: 60px;
  transition: background 0.3s, opacity .3s, filter .2s ease;
  font-size: 12px;
  cursor: pointer;

  ${s=>s.selected&&b`
    animation: ${le} .5s ease infinite;
    z-index: 10;
    opacity: 1!important;
  `}

  ${s=>s.status==="gold"&&b`
    color: white;
    animation: ${oe} .5s ease;
    opacity: 1;
  `}

  ${s=>s.status==="mine"&&b`
    background: #ff5252;
    z-index: 10;
    animation: ${ce} .3s ease;
    opacity: 1;
  `}

  ${s=>s.status==="hidden"&&b`
    &:disabled {
      opacity: .5;
    }
  `}

  &:disabled {
    cursor: default;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.5);
  }
`,be=f.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  & > div:first-child {
    display: flex;
    color: #ffffffCC;
    gap: 20px;
  }
`,F=s=>Array.from({length:s}).fill({status:"hidden",profit:0}),Ne=(s,n,d)=>s.map((m,r)=>r===n?{status:"gold",profit:d}:m),ge=(s,n,d)=>{const m=s.map((r,l)=>({cell:r,index:l})).sort((r,l)=>r.index===n?-1:l.index===n?1:r.cell.status==="hidden"&&l.cell.status==="hidden"?Math.random()-.5:r.cell.status==="hidden"?-1:l.cell.status==="hidden"?1:0).map(r=>r.index).slice(0,d);return s.map((r,l)=>m.includes(l)?{status:"mine",profit:0}:r)};var t="/Users/obstar/Repos/GitHub/gamba-demo/src/games/Mines/index.tsx";function xe(){const s=c.useGame(),n=Q({tick:se,win:ne,finish:te,step:ae,explode:re}),d=Y(),[m,r]=e.useState(F(u)),[l,y]=e.useState(0),[B,L]=e.useState(-1),[N,E]=e.useState(0),[O,g]=e.useState(!1),[M,x]=e.useState(!1),[p,A]=ee(),[o,D]=e.useState($[2]),T=i=>{const a=u-i;return Number(BigInt(a*I)/BigInt(a-o))/I},P=e.useMemo(()=>{const i=u-o;let a=0,_=p;return Array.from({length:i}).map((v,k)=>{const w=k===0?p:_,R=T(k),Z=u-k,q=Array.from({length:Z},(ye,J)=>J<o?0:R),S=w*(R-1);a+=S;const G=w+S;return _=G,{bet:q,wager:w,profit:S,cumProfit:a,balance:G}}).filter(v=>Math.max(...v.bet)*v.wager<d.maxPayout)},[p,o,d.maxPayout]),U=u-l<=o,z=M&&!O&&!U,{wager:W,bet:j}=P[l]??{},H=()=>{r(F(u)),g(!1),y(0),E(0),x(!0)},V=async()=>{n.play("finish"),K()},K=()=>{r(F(u)),g(!1),y(0),E(0),x(!1)},X=async i=>{g(!0),L(i);try{n.sounds.step.player.loop=!0,n.play("step",{}),n.sounds.tick.player.loop=!0,n.play("tick",{}),await s.play({bet:j,wager:W,metadata:[l]});const a=await s.result();if(n.sounds.tick.player.stop(),a.payout===0){x(!1),r(ge(m,i,o)),n.play("explode");return}const _=l+1;y(_),r(Ne(m,i,a.profit)),E(a.payout),_<u-o?n.play("win",{playbackRate:Math.pow(ie,l)}):(n.play("win",{playbackRate:.9}),n.play("finish"))}finally{g(!1),L(-1),n.sounds.tick.player.stop(),n.sounds.step.player.stop()}};return e.createElement(e.Fragment,null,e.createElement(c.Portal,{target:"screen",__self:this,__source:{fileName:t,lineNumber:134,columnNumber:7}},e.createElement(ue,{__self:this,__source:{fileName:t,lineNumber:135,columnNumber:9}},e.createElement(de,{__self:this,__source:{fileName:t,lineNumber:136,columnNumber:11}},P.map(({cumProfit:i},a)=>e.createElement(pe,{key:a,$active:l===a,__self:this,__source:{fileName:t,lineNumber:140,columnNumber:19}},e.createElement("div",{__self:this,__source:{fileName:t,lineNumber:141,columnNumber:21}},"LEVEL ",a+1),e.createElement("div",{__self:this,__source:{fileName:t,lineNumber:144,columnNumber:21}},e.createElement(C,{amount:i,__self:this,__source:{fileName:t,lineNumber:145,columnNumber:23}}))))),e.createElement(be,{__self:this,__source:{fileName:t,lineNumber:151,columnNumber:11}},e.createElement("div",{__self:this,__source:{fileName:t,lineNumber:152,columnNumber:13}},e.createElement("span",{__self:this,__source:{fileName:t,lineNumber:153,columnNumber:15}},"Mines: ",o),N>0&&e.createElement("span",{__self:this,__source:{fileName:t,lineNumber:157,columnNumber:17}},"+",e.createElement(C,{amount:N,__self:this,__source:{fileName:t,lineNumber:158,columnNumber:20}})," +",Math.round(N/p*100-100),"%"))),e.createElement(c.Responsive,{__self:this,__source:{fileName:t,lineNumber:163,columnNumber:11}},e.createElement(me,{__self:this,__source:{fileName:t,lineNumber:164,columnNumber:13}},e.createElement(fe,{__self:this,__source:{fileName:t,lineNumber:165,columnNumber:15}},m.map((i,a)=>e.createElement(_e,{key:a,status:i.status,selected:B===a,onClick:()=>X(a),disabled:!z||i.status!=="hidden",__self:this,__source:{fileName:t,lineNumber:167,columnNumber:19}},i.status==="gold"&&e.createElement("div",{__self:this,__source:{fileName:t,lineNumber:175,columnNumber:23}},"+",e.createElement(C,{amount:i.profit,__self:this,__source:{fileName:t,lineNumber:176,columnNumber:26}}))))))))),e.createElement(c.Portal,{target:"controls",__self:this,__source:{fileName:t,lineNumber:186,columnNumber:7}},M?e.createElement(c.Button,{onClick:V,__self:this,__source:{fileName:t,lineNumber:203,columnNumber:11}},N>0?"Finish":"Reset"):e.createElement(e.Fragment,null,e.createElement(c.WagerInput,{value:p,onChange:A,__self:this,__source:{fileName:t,lineNumber:189,columnNumber:13}}),e.createElement(c.Select,{options:$,value:o,onChange:D,label:i=>e.createElement(e.Fragment,null,i," Mines"),__self:this,__source:{fileName:t,lineNumber:190,columnNumber:13}}),e.createElement(c.PlayButton,{onClick:H,__self:this,__source:{fileName:t,lineNumber:198,columnNumber:13}},"Start"))))}export{xe as default};
