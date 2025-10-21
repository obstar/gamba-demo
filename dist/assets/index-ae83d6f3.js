import{d as o,l as x,R as e,u as E,a as y,b as C,c as v,B as p,G as _,e as w}from"./index-260f2fb2.js";var d="/Users/obstar/Repos/GitHub/gamba-demo/src/games/Dice/Slider.tsx";const B=o.div`
  position: relative;
  width: 100%;
`,k=o.div`
  position: relative;
  background: #ff556a;
  border-radius: 10px;
  box-shadow: 0 0 0px 5px #32294355;
  transition: box-shadow .2s ease;
  height: 15px;
  opacity: 1;
  cursor: pointer;
`,F=o.div`
  background: #55f275;
  height: 100%;
  border-radius: 10px 0 0 10px;
`,U=o.input`
  position: absolute;
  left: 0;
  top: 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  background: none;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    cursor: pointer;
    border-radius: 2px;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    cursor: pointer;
    border-radius: 2px;
  }
`,M=o.div`
  margin-top: 10px;
  position: absolute;
  transform: translateX(-50%);
  text-align: center;
  background: #32294322;
  padding: 5px;
  border-radius: 10px;
  min-width: 30px;
  color: #ff949f;
  transition: left .2s ease;
  font-size: 75%;

  ${a=>a.$active&&x`
    color: #94ff94;
  `}

`;function D({min:a,max:u,value:i,onChange:b,disabled:t,range:[n,A]}){const N=Array.from({length:5}).map((r,l,f)=>n+Math.floor(l/(f.length-1)*(A-n))),m=r=>{const l=Math.max(a,Math.min(u,r));l!==i&&b(l)};return e.createElement(B,{__self:this,__source:{fileName:d,lineNumber:103,columnNumber:5}},e.createElement(k,{__self:this,__source:{fileName:d,lineNumber:104,columnNumber:7}},e.createElement(F,{style:{width:`calc(${i/A*100}%)`},__self:this,__source:{fileName:d,lineNumber:105,columnNumber:9}}),e.createElement(U,{type:"range",value:i,disabled:t,min:n,max:A,onChange:r=>m(Number(r.target.value)),__self:this,__source:{fileName:d,lineNumber:106,columnNumber:9}})),N.map((r,l)=>e.createElement(M,{key:l,$active:i>=r,style:{left:r/A*100+"%"},__self:this,__source:{fileName:d,lineNumber:116,columnNumber:9}},r)))}const I="/assets/lose-7bddab0f.mp3",K="data:audio/mpeg;base64,//uUZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFoACioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi//////////////////////////////////////////////////////////////////8AAAA8TEFNRTMuMTAwBK8AAAAAAAAAADUgJALCjQABzAAABaBVoENUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//vEZAAAAZYTUh094AgAAA/woAABFNCvQ7ndgEAAAD/DAAAAA/wAA3ilMsavdn4LmXOMrHBTk7MtcCbjjVcB5VjZ7K9n3Aiahx8P35/cUDBc+H5zxBBAgAAAAAUCgPFi4MgAAAQhGYXhIYHB2YZAkqiYCDCZREgdBTgZFo6bLrSaVKKZTE+aaDOYZjARPYYVgIZpDiYNAUcXTHTBhg0qCvQxUvMukwaHGblgCUTHUQwpTMkC0RX/AgGgsw5ZBh5oQBKlpkAGnnPIUOUmI2kkSOdF2EJVZl8ovX8YEl7iUMPyB0mHTT/S6t////DcvgOL4Re/Psppq8ZPdAYKRZWLABAEDMaj6hQAgAAAAuyKhwCgEwYBjDAFAQ3HRoABAY/KBsiKmHC2YtJQCFBhURBiABAZMNgMwMEgMhC0AYPgYvZgFhkBhwggY2CIBSQDJwMJhYAgSgYRBYGERoA8JCPQsiAw6IQbDCZgY1AQAQcCyEOGRMLnRyzi1QDg2BgkDhloGxANkBCMgJAkDDogAiJQDgV+TpExzysThFAMCA0BwOBuaACCAFwODbL+eTMz6CjQRyISCgRSQrcUELT/uib0jSw5gyo+iDjLEqRAZX/059Bjybm5gRhJjLE2Sw5JMEkQIn//7Ghm5uYMaJpm6CBVICVCeIcVydIaWiLE0ViZ/////5otM3Uh////yiVSaMieJkSWWJsfh/CVyunN0L0TVCkSQUuJ0uMJPIcElEiVVVV6pJsFNBTcgrgV4KbFNyCuBTwUXFFZBTAU+KLxFExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uUZNEACJqCz25yoJAAAA/wwAAAB3Q/J3zzACgAAD/DgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",R="/assets/play-9df4c567.mp3",S="/assets/win-051b921a.mp3",T=o.div`
  color: white;
  user-select: none;
  width: min(100vw, 420px);
  font-size: 20px;
`,Y=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  & > div {
    padding: 20px;
    text-align: center;
    div:last-child {
      font-size: 14px;
    }
  }
`,V=o.div`
  display: flex;
  color: white;

  margin-bottom: 20px;

  & > div {
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    & > div:first-child {
      font-weight: bold;
      font-size: 64px;
      font-variant-numeric: tabular-nums;
    }
  }
`,Z=o.div`
  @keyframes result-appear {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  transform: translateX(-50%);
  position: absolute;
  top: -50px;
  transition: left .3s ease;

  & > div {
    animation: result-appear .25s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transform-origin: bottom;
    background: #ffffffCC;
    backdrop-filter: blur(50px);
    border-radius: 5px;
    padding: 5px;
    font-weight: bold;
    width: 50px;
    text-align: center;
    color: black;
  }

  & > div::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px 10px 0px 10px;
    border-style: solid;
    border-color: #ffffffCC transparent transparent transparent;
  }

`;var q="/Users/obstar/Repos/GitHub/gamba-demo/src/games/Dice/index.tsx";const s=100,Q=(a,u)=>{const i=Array.from({length:a}).map((t,n)=>u(n)??0),b=i.reduce((t,n)=>t+n,0);return i.map(t=>Number(BigInt(t*p)/BigInt(b||1)*BigInt(a))/p)};function J(){const a=E(),[u,i]=y(),b=C(),[t,n]=e.useState(-1),[A,N]=e.useState(Math.floor(s/2)),m=v({win:S,play:R,lose:I,tick:K}),r=Number(BigInt(s*p)/BigInt(A))/p,l=e.useMemo(()=>Q(s,c=>{if(c<A)return s-A}),[A]),f=r*u,g=_.useGame(),h=async()=>{m.play("play"),await g.play({wager:u,bet:l});const c=await g.result();n(c.resultIndex),c.resultIndex<A?m.play("win"):m.play("lose")};return e.createElement(e.Fragment,null,e.createElement(_.Portal,{target:"screen",__self:this,__source:{fileName:q,lineNumber:75,columnNumber:7}},e.createElement(_.Responsive,{__self:this,__source:{fileName:q,lineNumber:76,columnNumber:9}},e.createElement(T,{__self:this,__source:{fileName:q,lineNumber:77,columnNumber:11}},e.createElement(V,{__self:this,__source:{fileName:q,lineNumber:78,columnNumber:13}},e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:79,columnNumber:15}},e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:80,columnNumber:17}},A+1),e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:81,columnNumber:17}},"Roll Under"))),e.createElement(Y,{__self:this,__source:{fileName:q,lineNumber:84,columnNumber:13}},e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:85,columnNumber:15}},e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:86,columnNumber:17}},(A/s*100).toFixed(0),"%"),e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:89,columnNumber:17}},"Win Chance")),e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:91,columnNumber:15}},e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:92,columnNumber:17}},r.toFixed(2),"x"),e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:95,columnNumber:17}},"Multiplier")),e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:97,columnNumber:15}},f>b.maxPayout?e.createElement("div",{style:{color:"red"},__self:this,__source:{fileName:q,lineNumber:99,columnNumber:19}},"Too high"):e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:103,columnNumber:19}},e.createElement(w,{suffix:"",amount:f,__self:this,__source:{fileName:q,lineNumber:104,columnNumber:21}})),e.createElement("div",{__self:this,__source:{fileName:q,lineNumber:107,columnNumber:17}},"Payout"))),e.createElement("div",{style:{position:"relative"},__self:this,__source:{fileName:q,lineNumber:110,columnNumber:13}},t>-1&&e.createElement(Z,{style:{left:`${t/s*100}%`},__self:this,__source:{fileName:q,lineNumber:112,columnNumber:17}},e.createElement("div",{key:t,__self:this,__source:{fileName:q,lineNumber:113,columnNumber:19}},t+1)),e.createElement(D,{disabled:a.isPlaying,range:[0,s],min:1,max:s-5,value:A,onChange:c=>{N(c),m.play("tick")},__self:this,__source:{fileName:q,lineNumber:118,columnNumber:15}}))))),e.createElement(_.Portal,{target:"controls",__self:this,__source:{fileName:q,lineNumber:135,columnNumber:7}},e.createElement(_.WagerInput,{value:u,onChange:i,__self:this,__source:{fileName:q,lineNumber:136,columnNumber:9}}),e.createElement(_.PlayButton,{onClick:h,__self:this,__source:{fileName:q,lineNumber:140,columnNumber:9}},"Roll")))}export{J as default,Q as outcomes};
