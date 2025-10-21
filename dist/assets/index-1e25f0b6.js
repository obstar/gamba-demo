import{R as e,d as r,m as T,a as z,G as b,c as U}from"./index-260f2fb2.js";const g="/assets/rocket-e5630fc4.gif";var x="/Users/obstar/Repos/GitHub/gamba-demo/src/games/CrashGame/Slider.tsx";const B=r.div`
  position: relative;
  width: 100%;
  padding: 10px 0;
`,O=r.input.attrs({type:"range"})`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url(${g});
    background-size: 100% 100%;
    cursor: pointer;
  }

  /* The slider handle (thumb) for Firefox */
  &::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url(${g});
    background-size: 100% 100%;
    cursor: pointer;
  }
`;function P({value:n,onChange:l}){const o=e.useMemo(()=>Array.from({length:101}).map((f,u)=>u<=50?Math.round((1+9*(u/50))*4)/4:Math.round(10+90*((u-50)/50))),[]),c=f=>{l(o[Number(f.target.value)])},t=o.indexOf(n);return e.createElement(B,{__self:this,__source:{fileName:x,lineNumber:79,columnNumber:5}},e.createElement("div",{style:{bottom:"30px",left:"50%"},__self:this,__source:{fileName:x,lineNumber:80,columnNumber:7}},n.toFixed(2),"x"),e.createElement(O,{type:"range",min:"0",max:"100",value:t,onChange:c,__self:this,__source:{fileName:x,lineNumber:88,columnNumber:7}}))}const W="/assets/crash-2caccc98.mp3",I="/assets/music-3c85cf35.mp3",N=n=>{const l=window.innerWidth,o=4e3;let c=`${Math.random()*l}px ${Math.random()*o}px #ffffff`;for(let t=2;t<=n;t++)c+=`, ${Math.random()*l}px ${Math.random()*o}px #ffffff`;return c},M=N(700),k=N(200),E=N(100),D=T`
  from {
    transform: translateY(-100vh);
  }
  to {
    transform: translateY(0);
  }
`,h=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  animation: ${D} linear infinite;
`,j=r(h)`
  width: 1px;
  height: 1px;
  animation-duration: 150s;
  opacity: 1;
  transition: opacity 12s;
  box-shadow: ${M};
`,H=r(h)`
  width: 1px;
  height: 12px;
  top: -12px;
  animation-duration: 75s;
  opacity: 0;
  transition: opacity 2s;
  box-shadow: ${M};
`,V=r(h)`
  width: 2px;
  height: 2px;
  animation-duration: 100s;
  box-shadow: ${k};
`,Y=r(h)`
  width: 2px;
  height: 25px;
  top: -25px;
  animation-duration: 6s;
  opacity: 0;
  transition: opacity 1s;
  box-shadow: ${k};
`,X=r(h)`
  width: 3px;
  height: 3px;
  animation-duration: 50s;
  box-shadow: ${E};
`,q=r(h)`
  width: 2px;
  height: 50px;
  top: -50px;
  animation-duration: 3s;
  opacity: 0;
  transition: opacity 1s;
  box-shadow: ${E};
`,J=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
`,K=r.div`
  font-size: 48px;
  color: ${n=>n.color||"#fff"}; // Use color prop or default to white
  text-shadow: 0 0 20px #fff;
  z-index: 1;
  font-family: monospace;
`,Q=r.div`
  position: absolute;
  width: 120px;
  aspect-ratio: 1 / 1;
  background-image: url(${g});
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.1s ease-out;
`,Z=n=>{const l=Math.round(n%1*100)/100,o=(()=>{switch(l){case .25:return 4;case .5:return 2;case .75:return 4;default:return 1}})(),c=n*o,t=Array.from({length:o}).map(()=>n),u=Math.ceil(c)-o;return t.concat(Array.from({length:u}).map(()=>0))},ee="/assets/win-f4ffa6d3.mp3";var a="/Users/obstar/Repos/GitHub/gamba-demo/src/games/CrashGame/index.tsx";function oe(){const[n,l]=z(),[o,c]=e.useState(1.5),[t,f]=e.useState(0),[u,y]=e.useState("idle"),w=b.useGame(),_=U({music:I,crash:W,win:ee}),$=()=>{const s=Math.min(t/1,1),i=20,p=30,d=s*(100-i),R=Math.pow(s,5)*(100-p),A=Math.pow(s,2.3),F=90,G=(1-A)*F;return{bottom:`${R}%`,left:`${d}%`,transform:`rotate(${G}deg)`}},S=(m,s,i)=>{const p=.01*(Math.floor(m)+1),d=m+p;if(f(d),d>=s){_.sounds.music.player.stop(),_.play(i?"win":"crash"),y(i?"win":"crash"),f(s);return}setTimeout(()=>S(d,s,i),50)},v=(()=>u==="crash"?"#ff0000":u==="win"?"#00ff00":"#ffffff")(),C=m=>{const s=Math.random(),i=Math.min(m,12),p=s>.95?2.8:m>10?5:6,d=1+Math.pow(s,p)*(i-1);return parseFloat(d.toFixed(2))},L=async()=>{y("idle");const m=Z(o);await w.play({wager:n,bet:m});const i=(await w.result()).payout>0,p=i?o:C(o);console.log("multiplierResult",p),console.log("win",i),_.play("music"),S(0,p,i)};return e.createElement(e.Fragment,null,e.createElement(b.Portal,{target:"screen",__self:this,__source:{fileName:a,lineNumber:94,columnNumber:7}},e.createElement(J,{__self:this,__source:{fileName:a,lineNumber:95,columnNumber:9}},e.createElement(j,{style:{opacity:t>3?0:1},__self:this,__source:{fileName:a,lineNumber:96,columnNumber:11}}),e.createElement(H,{style:{opacity:t>3?1:0},__self:this,__source:{fileName:a,lineNumber:97,columnNumber:11}}),e.createElement(V,{style:{opacity:t>2?0:1},__self:this,__source:{fileName:a,lineNumber:98,columnNumber:11}}),e.createElement(Y,{style:{opacity:t>2?1:0},__self:this,__source:{fileName:a,lineNumber:99,columnNumber:11}}),e.createElement(X,{style:{opacity:t>1?0:1},__self:this,__source:{fileName:a,lineNumber:100,columnNumber:11}}),e.createElement(q,{style:{opacity:t>1?1:0},__self:this,__source:{fileName:a,lineNumber:101,columnNumber:11}}),e.createElement(K,{color:v,__self:this,__source:{fileName:a,lineNumber:102,columnNumber:11}},t.toFixed(2),"x"),e.createElement(Q,{style:$(),__self:this,__source:{fileName:a,lineNumber:105,columnNumber:11}}))),e.createElement(b.Portal,{target:"controls",__self:this,__source:{fileName:a,lineNumber:108,columnNumber:7}},e.createElement(b.WagerInput,{value:n,onChange:l,__self:this,__source:{fileName:a,lineNumber:109,columnNumber:9}}),e.createElement(P,{value:o,onChange:c,__self:this,__source:{fileName:a,lineNumber:110,columnNumber:9}}),e.createElement(b.PlayButton,{onClick:L,__self:this,__source:{fileName:a,lineNumber:114,columnNumber:9}},"Play")))}export{oe as default};
