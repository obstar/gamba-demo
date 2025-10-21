import{m as U,d as m,l as y,G as l,u as J,b as Q,R as e,a as V,c as Z,e as Y}from"./index-260f2fb2.js";const q="/assets/card-7f5581c3.mp3",ee="/assets/finish-89d641e7.mp3",te="/assets/lose-7bddab0f.mp3",ne="/assets/play-9df4c567.mp3",se="/assets/win-26f0420f.mp3",oe=5,B={0:"2",1:"3",2:"4",3:"5",4:"6",5:"7",6:"8",7:"9",8:"10",9:"J",10:"Q",11:"K",12:"A"},r=Object.keys(B).length,G=U`
  0% { transform: scale(.0) translateY(100px) rotateY(90deg); }
  100% { transform: scale(1) translateY(0) rotateY(0deg) }
`,ae=m.div`
  user-select: none;
  background: #9967e300;
  transition: opacity .2s;
  ${({$disabled:t})=>t&&y`
    pointer-events: none;
    opacity: .7;
  `}
`,ie=m.div`
  display: flex;
  flex-direction: column;
`,D=m.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  transition: opacity .2s, background .2s ease;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  & > div:first-child {
    font-size: 48px;
    filter: drop-shadow(-4px 4px 2px #00000066);
    margin-right: 10px;
  }

  --opacity: .5;

  &:hover {
    --opacity : 1;
  }

  ${t=>t.selected&&y`
    --opacity: 1;
  `}

  opacity: var(--opacity);
`,re=m.div`
  font-size: 18px;
  color: #005400;
  position: absolute;
  right: 0px;
  bottom: -100px;
  border-radius: 50px;
  background: #69ff6d;
  padding: 5px;
  animation: ${G} .25s cubic-bezier(0.18, 0.89, 0.32, 1.28);
`,le=m.div`
  display: flex;
  border-radius: 5px;
  gap: 5px;
  padding: 5px;
  margin-top: 30px;
  justify-content: center;
  & > div {
    transition: opacity .2s;
  }
`,me=m.div`
  transition: transform .2s ease;
  perspective: 500px;
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
`,ce=m.div`
  position: absolute;
  bottom: 0;
  transition: transform .25s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity .25s ease;
  filter: drop-shadow(-10px 10px 0px #00000011);
  transform-origin: bottom;
  perspective: 500px;
  & > div {
    animation: ${G} .25s cubic-bezier(0.5, 0.9, 0.35, 1.05);
  }
`,F=m.div`
  ${t=>t.$small?y`
    height: 35px;
    font-size: 15px;
    padding: 5px;
    border-radius: 4px;
  `:y`
    height: 160px;
    font-size: 70px;
    padding: 10px;
    border-radius: 8px;
  `}
  box-shadow: -5px 5px 10px 1px #0000003d;
  background: white;
  aspect-ratio: 4/5.5;
  position: relative;
  color: #333;
  overflow: hidden;
  .rank {
    font-weight: bold;
    line-height: 1em;
  }
  .suit {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 50%;
    background-size: cover;
    background-repeat: none;
    transform: translate(0%, 0%);
    font-size: 128px;
    opacity: .9;
  }
`,ue=U`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;m.div`
  animation: ${ue} 2s ease-in-out infinite;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateX(100%) translateY(-50%);
  background-color: rgba(255, 204, 0, 0.8);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: black;
  white-space: nowrap;
  pointer-events: none;
`;var n="/Users/obstar/Repos/GitHub/gamba-demo/src/games/HiLo/index.tsx";const N=1e4,j=()=>1+Math.floor(Math.random()*(r-1)),H=(t=j())=>({key:Math.random(),rank:t}),W=(t,c)=>Array.from({length:r}).map((u,s)=>{const o=(()=>c?t===0?s>t?BigInt(r*N)/BigInt(r-1-t):BigInt(0):s>=t?BigInt(r*N)/BigInt(r-t):BigInt(0):t===r-1?s<t?BigInt(r*N)/BigInt(t):BigInt(0):s<=t?BigInt(r*N)/BigInt(t+1):BigInt(0))();return Number(o)/N}),pe=t=>{const c=t.length,u=t.reduce((s,o)=>s+o,0);if(u>c){const s=t.findIndex(o=>o===Math.max(...t));t[s]-=u-c,t[s]<0&&(t[s]=0)}return t};function _e(t){const c=l.useGame(),u=J(),s=Q(),[o,A]=e.useState([H()]),[I,S]=e.useState(!1),[f,w]=V(),[p,M]=e.useState(0),b=o[o.length-1].rank,[d,O]=e.useState(b>r/2?"lo":"hi"),[P,g]=e.useState(),v=a=>A(i=>[...i,H(a)].slice(-oe)),_=Z({card:q,win:se,lose:te,play:ne,finish:ee}),E=e.useMemo(()=>W(b,!0),[b]),C=e.useMemo(()=>W(b,!1),[b]),R=e.useMemo(()=>{const a=P??d;return a==="hi"?E:a==="lo"?C:[0]},[E,C,P,d]),L=async()=>{try{if(I)return;_.play("finish",{playbackRate:.8}),setTimeout(()=>{M(0),_.play("card"),v(j()),S(!1)},300)}catch{S(!1)}},k=pe(R),T=Math.max(...k),h=s.maxPayout/T,z=Math.min(h,p||f),$=async()=>{_.play("play"),await c.play({bet:k,wager:z});const a=await c.result();v(a.resultIndex),_.play("card",{playbackRate:.8});const i=a.payout>0;setTimeout(()=>{M(a.payout),i?_.play("win"):_.play("lose")},300)};return e.createElement(e.Fragment,null,e.createElement(l.Portal,{target:"screen",__self:this,__source:{fileName:n,lineNumber:130,columnNumber:7}},e.createElement(l.Responsive,{__self:this,__source:{fileName:n,lineNumber:131,columnNumber:9}},e.createElement(ae,{$disabled:I||u.isPlaying,__self:this,__source:{fileName:n,lineNumber:132,columnNumber:11}},e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"},__self:this,__source:{fileName:n,lineNumber:133,columnNumber:13}},e.createElement(me,{__self:this,__source:{fileName:n,lineNumber:134,columnNumber:15}},o.map((a,i)=>{const x=-(o.length-(i+1)),K=o.length>3?i/o.length:1,X=Math.min(1,K*3);return e.createElement(ce,{key:a.key,style:{transform:`translate(${x*30}px, ${-x*0}px) rotateZ(-5deg) rotateY(5deg)`,opacity:X},__self:this,__source:{fileName:n,lineNumber:140,columnNumber:21}},e.createElement(F,{__self:this,__source:{fileName:n,lineNumber:147,columnNumber:23}},e.createElement("div",{className:"rank",__self:this,__source:{fileName:n,lineNumber:148,columnNumber:25}},B[a.rank]),e.createElement("div",{className:"suit",style:{backgroundImage:"url("+t.logo+")"},__self:this,__source:{fileName:n,lineNumber:149,columnNumber:25}})))})),e.createElement(ie,{__self:this,__source:{fileName:n,lineNumber:155,columnNumber:15}},e.createElement(D,{selected:d==="hi",onClick:()=>O("hi"),onMouseEnter:()=>g("hi"),onMouseLeave:()=>g(void 0),__self:this,__source:{fileName:n,lineNumber:156,columnNumber:17}},e.createElement("div",{__self:this,__source:{fileName:n,lineNumber:162,columnNumber:19}},"👆"),e.createElement("div",{__self:this,__source:{fileName:n,lineNumber:165,columnNumber:19}},"HI - (",Math.max(...E).toFixed(2),"x)")),e.createElement(D,{selected:d==="lo",onClick:()=>O("lo"),onMouseEnter:()=>g("lo"),onMouseLeave:()=>g(void 0),__self:this,__source:{fileName:n,lineNumber:167,columnNumber:17}},e.createElement("div",{__self:this,__source:{fileName:n,lineNumber:173,columnNumber:19}},"👇"),e.createElement("div",{__self:this,__source:{fileName:n,lineNumber:176,columnNumber:19}},"LO - (",Math.max(...C).toFixed(2),"x)")))),e.createElement(le,{__self:this,__source:{fileName:n,lineNumber:180,columnNumber:13}},Array.from({length:r}).map((a,i)=>{const x=k[i]>0?.9:.5;return e.createElement(F,{key:i,$small:!0,style:{opacity:x},onClick:()=>v(i),__self:this,__source:{fileName:n,lineNumber:184,columnNumber:19}},e.createElement("div",{className:"rank",__self:this,__source:{fileName:n,lineNumber:185,columnNumber:21}},B[i]))})),p>0&&e.createElement(re,{key:p,onClick:L,__self:this,__source:{fileName:n,lineNumber:191,columnNumber:15}},e.createElement(Y,{amount:p,__self:this,__source:{fileName:n,lineNumber:192,columnNumber:17}})," +",Math.round(p/f*100-100).toLocaleString(),"%")))),e.createElement(l.Portal,{target:"controls",__self:this,__source:{fileName:n,lineNumber:198,columnNumber:7}},p?e.createElement(e.Fragment,null,e.createElement(Y,{amount:z,__self:this,__source:{fileName:n,lineNumber:216,columnNumber:13}}),e.createElement(l.Button,{disabled:u.isPlaying,onClick:L,__self:this,__source:{fileName:n,lineNumber:217,columnNumber:13}},"Finish"),e.createElement(l.PlayButton,{disabled:!d,onClick:$,__self:this,__source:{fileName:n,lineNumber:220,columnNumber:13}},"Deal card")):e.createElement(e.Fragment,null,e.createElement(l.WagerInput,{value:f,onChange:w,__self:this,__source:{fileName:n,lineNumber:201,columnNumber:13}}),e.createElement(l.PlayButton,{disabled:!d||f>h,onClick:$,__self:this,__source:{fileName:n,lineNumber:205,columnNumber:13}},"Deal card"),f>h&&e.createElement(l.Button,{onClick:()=>w(h),__self:this,__source:{fileName:n,lineNumber:209,columnNumber:15}},"Set max"))))}export{_e as default};
