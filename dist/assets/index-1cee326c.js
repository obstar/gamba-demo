import{f as X,r as F,h as ee,s as te,d as v,l as d,R as t,m as oe,i as q,w as y,u as T,c as W,G as b,k as L,b as j,n as D,e as w}from"./index-260f2fb2.js";var re=Symbol.for("react.element"),O=function(){},p,Z=Symbol.dispose||Symbol.for("Symbol.dispose");function k(e,o){var r=o.effect.S();return p=o,ne.bind(o,e,r)}function ne(e,o){o(),p=e}var H,C;(H={u:0,effect:{s:void 0,c:function(){},S:function(){return O},d:function(){}},subscribe:function(){return O},getSnapshot:function(){return 0},S:function(){},f:function(){}})[Z]=function(){};var le=Promise.prototype.then.bind(Promise.resolve());function ae(){C||(C=le(Q))}function Q(){var e;C=void 0,(e=p)==null||e.f()}function se(e){e===void 0&&(e=0),ae();var o=F.useRef();o.current==null&&(o.current=function(i){var l,s,a,u,h=0,E=ee(function(){s=this});return s.c=function(){h=h+1|0,u&&u()},(l={u:i,effect:s,subscribe:function(c){return u=c,function(){h=h+1|0,u=void 0,E()}},getSnapshot:function(){return h},S:function(){if(p!=null){var c=p.u,_=this.u;c==0&&_==0||c==0&&_==1?(p.f(),a=k(void 0,this)):c==1&&_==0||c==2&&_==0||(a=k(p,this))}else a=k(void 0,this)},f:function(){var c=a;a=void 0,c==null||c()}})[Z]=function(){this.f()},l}(e));var r=o.current;return te.useSyncExternalStore(r.subscribe,r.getSnapshot,r.getSnapshot),r.S(),e===0&&F.useLayoutEffect(Q),r}Object.defineProperties(X.prototype,{$$typeof:{configurable:!0,value:re},type:{configurable:!0,value:function(e){var o=e.data,r=se(1);try{return o.value}finally{r.f()}}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}});var ie="/Users/obstar/Repos/GitHub/gamba-demo/src/games/Roulette/Chip.tsx";const ce=v.div`
  width: 18px;
  height: 18px;
  line-height: 16px;
  border-radius: 10px;
  background: var(--chip-color);
  border: 1px dashed var(--border-color);
  color: black;
  font-size: 9px;
  font-weight: bold;
  color: var(--text-color);
  box-shadow: 0 0 0 1px var(--chip-color);
  padding: 0;
  display: inline-block;
  text-align: center;
  user-select: none;

  ${e=>e.$color==="white"&&d`
    --chip-color: #f0f0ff;
    --border-color: #8888C0;
    --text-color: #333333;
  `}
  ${e=>e.$color==="green"&&d`
    --chip-color: #47ff7d;
    --border-color: #006600;
    --text-color: #004400;
  `}
  ${e=>e.$color==="red"&&d`
    --chip-color: #ff5b72;
    --border-color: #ffffff;
    --text-color: #220000;
  `}
  ${e=>e.$color==="blue"&&d`
    --chip-color: #a692ff;
    --border-color: #ffffff;
    --text-color: #000245;
  `}
`,ue=e=>e<=1?"green":e<=2?"red":e<=10?"blue":"white";function J({value:e}){return t.createElement(ce,{$color:ue(e),__self:this,__source:{fileName:ie,lineNumber:52,columnNumber:5}},e)}const me=oe`
  from { background-color: white;}
  to { background-color: #292a307d;}
`,fe=v.div`
  border-radius: 10px;
  background: #191c2fa1;
  margin: 0 auto;
  font-weight: bold;
  overflow: hidden;
  width: 100%;
  display: flex;
  height: 50px;

  & > div {
    display: flex;
    padding: 10px;
    width: 40px;
    justify-content: center;
  }

  & > div:first-child {
    font-size: 24px;
    align-items: center;
    width: 60px;
    justify-content: center;
    background: #FFFFFF11;
    animation: ${me} 1s;
  }
`,Ae=v.div`
  position: relative;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  box-shadow: 0 0 0 1px var(--border-color);
  color: white;
  width: 60px;
  cursor: pointer;
  text-align: center;

  ${e=>e.$color==="red"&&d`
    --background-color: #ff3d5e;
    --border-color: #ff2b4e;
  `}

  ${e=>e.$color==="black"&&d`
    --background-color: #1b1b25;
    --border-color: #121218;
  `}

  background-color: var(--background-color);
  box-shadow: 0 0 0 1px var(--border-color);

  &::after {
    content: " ";
    transition: background .1s;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  &:hover::after {
    background: #9999ff44;
    mix-blend-mode:screen;
  }
  ${e=>e.$highlighted&&d`
    &::after {
      background: #9999ff44;
      mix-blend-mode:screen;
    }
  `}
`,be=v.div`
  display: grid;
  gap: 10px;
`,de=v.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  transform: translate(25%, -25%);
`,pe="data:audio/mpeg;base64,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",Ne="/assets/lose-7bddab0f.mp3",he="/assets/play-9df4c567.mp3",_e="/assets/win-26f0420f.mp3",z=[1,2,10,50],A=18,V=Math.ceil(A/3),U=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36],S=e=>U.includes(e%(U.length+1)),x=e=>3-e%3,ve=Array.from({length:A}).map((e,o)=>o+1),f=(e,o,[r,i])=>{const l=ve.filter(o);return{label:e,numbers:l,row:i,column:r}},ge=Array.from({length:A}).reduce((e,o,r)=>({...e,[r+1]:{label:String(r+1),numbers:[String(r+1)],row:x(r),column:1+Math.floor(r/3),color:S(r+1)?"red":"black"}}),{}),Y={...ge,firstHalf:f("<"+Math.floor(A/2+1),e=>e<=A/2,[1,4]),even:f("Even",e=>e%2===0,[2,4]),red:f("Red",e=>S(e),[3,4]),black:f("Black",e=>!S(e),[4,4]),odd:f("Odd",e=>e%2===1,[5,4]),secondHalf:f(">"+Math.floor(A/2),e=>e>A/2,[6,4]),row1:f("2:1",e=>x(e-1)===1,[V+1,1]),row2:f("2:1",e=>x(e-1)===2,[V+1,2]),row3:f("2:1",e=>x(e-1)===3,[V+1,3])},N=q({}),$=q([]),M=q([]),R=q(z[0]),I=y(()=>{const e=Object.entries(N.value),o=Array.from({length:A}).map(()=>0);for(const[r,i]of e){const l=Y[r],s=Number(BigInt(i*1e4)/BigInt(l.numbers.length));for(const a of l.numbers)o[a-1]+=s}return o}),P=y(()=>Math.floor(I.value.reduce((e,o)=>e+o,0))),B=y(()=>I.value.map(o=>Number(BigInt(o*I.value.length*1e4)/BigInt(P.value||1))/1e4)),xe=e=>{M.value=[...M.value,e]},K=e=>N.value[e]??0,G=e=>{$.value=e},qe=(e,o)=>{N.value={...N.value,[e]:K(e)+o}},ye=e=>{N.value={...N.value,[e]:0}},Ee=()=>{N.value={}};var g="/Users/obstar/Repos/GitHub/gamba-demo/src/games/Roulette/Table.tsx";function ke(){const e=T(),o=W({chip:pe}),r=l=>{e.isPlaying||(o.play("chip",{playbackRate:1}),qe(l,R.value))},i=l=>{e.isPlaying||(o.play("chip",{playbackRate:.8}),ye(l))};return t.createElement(be,{__self:this,__source:{fileName:g,lineNumber:26,columnNumber:5}},Object.entries(Y).map(([l,s])=>{const a=K(l);return t.createElement(Ae,{key:l,onClick:u=>{u.preventDefault(),u.button!==2?r(l):i(l)},onContextMenu:()=>i(l),style:{gridRow:s.row,gridColumn:s.column},$highlighted:$.value.includes(Number(l)),$color:s.color,onMouseOver:()=>G(s.numbers),onMouseLeave:()=>G([]),__self:this,__source:{fileName:g,lineNumber:31,columnNumber:13}},s.label,a>0&&t.createElement(de,{key:a,__self:this,__source:{fileName:g,lineNumber:53,columnNumber:17}},t.createElement(J,{value:a,__self:this,__source:{fileName:g,lineNumber:54,columnNumber:19}})))}))}var n="/Users/obstar/Repos/GitHub/gamba-demo/src/games/Roulette/index.tsx";const Ve=v.div`
  display: grid;
  gap: 20px;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  color: white;
`;function we(){const e=y(()=>[...M.value].reverse());return t.createElement(fe,{__self:this,__source:{fileName:n,lineNumber:23,columnNumber:5}},e.value.map((o,r)=>t.createElement("div",{key:r,__self:this,__source:{fileName:n,lineNumber:26,columnNumber:11}},o+1)))}function Ce(){const e=j(),o=L(),r=D(),i=P.value*o.baseWager/1e4,l=Math.max(...B.value),s=l*i,a=s>e.maxPayout,u=i>r.balance+r.bonusBalance;return t.createElement("div",{style:{textAlign:"center",display:"grid",gridTemplateColumns:"1fr 1fr"},__self:this,__source:{fileName:n,lineNumber:47,columnNumber:5}},t.createElement("div",{__self:this,__source:{fileName:n,lineNumber:48,columnNumber:7}},u?t.createElement("span",{style:{color:"#ff0066"},__self:this,__source:{fileName:n,lineNumber:50,columnNumber:11}},"TOO HIGH"):t.createElement(t.Fragment,null,t.createElement(w,{amount:i,__self:this,__source:{fileName:n,lineNumber:55,columnNumber:13}})),t.createElement("div",{__self:this,__source:{fileName:n,lineNumber:58,columnNumber:9}},"Wager")),t.createElement("div",{__self:this,__source:{fileName:n,lineNumber:60,columnNumber:7}},t.createElement("div",{__self:this,__source:{fileName:n,lineNumber:61,columnNumber:9}},a?t.createElement("span",{style:{color:"#ff0066"},__self:this,__source:{fileName:n,lineNumber:63,columnNumber:13}},"TOO HIGH"):t.createElement(t.Fragment,null,t.createElement(w,{amount:s,__self:this,__source:{fileName:n,lineNumber:68,columnNumber:15}}),"(",l.toFixed(2),"x)")),t.createElement("div",{__self:this,__source:{fileName:n,lineNumber:73,columnNumber:9}},"Potential win")))}function Me(){const e=b.useGame(),o=L(),r=j(),i=D(),l=T(),s=W({win:_e,lose:Ne,play:he}),a=P.value*o.baseWager/1e4,E=Math.max(...B.value)*a>r.maxPayout,c=a>i.balance+i.bonusBalance,_=async()=>{await e.play({bet:B.value,wager:a}),s.play("play");const m=await e.result();xe(m.resultIndex),m.payout>0?s.play("win"):s.play("lose")};return t.createElement(t.Fragment,null,t.createElement(b.Portal,{target:"screen",__self:this,__source:{fileName:n,lineNumber:116,columnNumber:7}},t.createElement(b.Responsive,{__self:this,__source:{fileName:n,lineNumber:117,columnNumber:9}},t.createElement(Ve,{onContextMenu:m=>m.preventDefault(),__self:this,__source:{fileName:n,lineNumber:118,columnNumber:11}},t.createElement(Ce,{__self:this,__source:{fileName:n,lineNumber:119,columnNumber:13}}),t.createElement(we,{__self:this,__source:{fileName:n,lineNumber:120,columnNumber:13}}),t.createElement(ke,{__self:this,__source:{fileName:n,lineNumber:121,columnNumber:13}})))),t.createElement(b.Portal,{target:"controls",__self:this,__source:{fileName:n,lineNumber:125,columnNumber:7}},t.createElement(b.Select,{options:z,value:R.value,onChange:m=>R.value=m,label:m=>t.createElement(t.Fragment,null,t.createElement(J,{value:m,__self:this,__source:{fileName:n,lineNumber:132,columnNumber:15}})," = ",t.createElement(w,{amount:o.baseWager*m,__self:this,__source:{fileName:n,lineNumber:132,columnNumber:40}})),__self:this,__source:{fileName:n,lineNumber:126,columnNumber:9}}),t.createElement(b.Button,{disabled:!a||l.isPlaying,onClick:Ee,__self:this,__source:{fileName:n,lineNumber:136,columnNumber:9}},"Clear"),t.createElement(b.PlayButton,{disabled:!a||c||E,onClick:_,__self:this,__source:{fileName:n,lineNumber:142,columnNumber:9}},"Spin")))}export{Me as default};
