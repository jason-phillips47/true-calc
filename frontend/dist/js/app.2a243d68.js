(function(){"use strict";var t={9016:function(t,e,o){var s=o(3751),l=o(641);const a={id:"app"};function u(t,e,o,s,u,n){const i=(0,l.g2)("ParlayCalculator");return(0,l.uX)(),(0,l.CE)("div",a,[(0,l.bF)(i)])}var n=o(33);const i={class:"calculator"},r=(0,l.Lk)("h1",null,"DFS Focused EV Calculator",-1),p={class:"presets"},y={key:0,class:"preset-group"},d=["onClick"],c={key:1,class:"preset-group"},h=["onClick"],m={class:"columns"},g={class:"column"},k=(0,l.Lk)("h3",null,"Legs",-1),f=["onUpdate:modelValue"],b=["onClick"],v={class:"column"},L=(0,l.Lk)("h3",null,"Payouts",-1),P=["onUpdate:modelValue","max"],C=(0,l.Lk)("br",null,null,-1),R=["onUpdate:modelValue"],U=["onUpdate:modelValue"],w=(0,l.Lk)("br",null,null,-1),z=["onUpdate:modelValue"],A=["onUpdate:modelValue"],x=["onClick"],E=(0,l.Lk)("p",{style:{fontSize:"8px"}},"Payouts use American Odds",-1),S={class:"options"},V={class:"set-all-hit-rate"},O={class:"unit-size"},X=(0,l.Lk)("p",{style:{fontSize:"8px"}},"First calculation may take a while.",-1),F=(0,l.Lk)("button",{type:"submit",class:"calculate-button"},"Calculate EV",-1),_={key:0,class:"result"};function J(t,e,o,a,u,J){return(0,l.uX)(),(0,l.CE)("div",i,[r,(0,l.Lk)("div",p,[(0,l.Lk)("button",{onClick:e[0]||(e[0]=t=>J.togglePreset("prizepicks"))},"Prizepicks Presets"),u.showPrizepicks?((0,l.uX)(),(0,l.CE)("div",y,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.prizepicksPresets,(t=>((0,l.uX)(),(0,l.CE)("button",{onClick:e=>J.applyPreset(t),key:t.name},(0,n.v_)(t.name),9,d)))),128))])):(0,l.Q3)("",!0),(0,l.Lk)("button",{onClick:e[1]||(e[1]=t=>J.togglePreset("underdog"))},"Underdog Presets"),u.showUnderdog?((0,l.uX)(),(0,l.CE)("div",c,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.underdogPresets,(t=>((0,l.uX)(),(0,l.CE)("button",{onClick:e=>J.applyPreset(t),key:t.name},(0,n.v_)(t.name),9,h)))),128))])):(0,l.Q3)("",!0)]),(0,l.Lk)("form",{onSubmit:e[7]||(e[7]=(0,s.D$)(((...t)=>J.handleSubmit&&J.handleSubmit(...t)),["prevent"]))},[(0,l.Lk)("div",m,[(0,l.Lk)("div",g,[k,((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.legs,((t,e)=>((0,l.uX)(),(0,l.CE)("div",{key:e,class:"leg"},[(0,l.Lk)("label",null,[(0,l.eW)(" Leg "+(0,n.v_)(e+1)+" Hit Rate (%): ",1),(0,l.bo)((0,l.Lk)("input",{type:"number","onUpdate:modelValue":e=>t.hitRate=e,min:"0",max:"100",step:"0.00001",required:""},null,8,f),[[s.Jo,t.hitRate,void 0,{number:!0}]])]),(0,l.Lk)("button",{type:"button",onClick:t=>J.removeLeg(e)},"Remove Leg",8,b)])))),128)),(0,l.Lk)("button",{type:"button",onClick:e[2]||(e[2]=(...t)=>J.addLeg&&J.addLeg(...t))},"Add Leg")]),(0,l.Lk)("div",v,[L,((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.payouts,((t,e)=>((0,l.uX)(),(0,l.CE)("div",{key:e,class:"payout"},[(0,l.Lk)("label",null,[(0,l.eW)(" If exactly "),(0,l.bo)((0,l.Lk)("input",{type:"number","onUpdate:modelValue":e=>t.hits=e,min:"0",max:u.legs.length,required:""},null,8,P),[[s.Jo,t.hits,void 0,{number:!0}]]),(0,l.eW)(" out of "+(0,n.v_)(u.legs.length)+" legs hit, ",1),C,(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e=>t.type=e,value:"payout"},null,8,R),[[s.XL,t.type]]),(0,l.eW)(" Payout: "),"payout"===t.type?(0,l.bo)(((0,l.uX)(),(0,l.CE)("input",{key:0,type:"text","onUpdate:modelValue":e=>t.amount=e},null,8,U)),[[s.Jo,t.amount]]):(0,l.Q3)("",!0),w,(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e=>t.type=e,value:"loss"},null,8,z),[[s.XL,t.type]]),(0,l.eW)(" Lose Units: "),"loss"===t.type?(0,l.bo)(((0,l.uX)(),(0,l.CE)("input",{key:1,type:"number","onUpdate:modelValue":e=>t.loss=e,step:"0.1"},null,8,A)),[[s.Jo,t.loss,void 0,{number:!0}]]):(0,l.Q3)("",!0)]),(0,l.Lk)("button",{type:"button",onClick:t=>J.removePayout(e)},"Remove Payout",8,x)])))),128)),(0,l.Lk)("button",{type:"button",onClick:e[3]||(e[3]=(...t)=>J.addPayout&&J.addPayout(...t))},"Add Payout"),E])]),(0,l.Lk)("div",S,[(0,l.Lk)("div",V,[(0,l.Lk)("label",null,[(0,l.eW)(" Set all legs hit rate (%): "),(0,l.bo)((0,l.Lk)("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=t=>u.allLegsHitRate=t),min:"0",max:"100",step:"0.00001"},null,512),[[s.Jo,u.allLegsHitRate,void 0,{number:!0}]]),(0,l.Lk)("button",{type:"button",onClick:e[5]||(e[5]=(...t)=>J.setAllLegsHitRate&&J.setAllLegsHitRate(...t))},"Set")])]),(0,l.Lk)("div",O,[(0,l.Lk)("label",null,[(0,l.eW)(" Unit Size ($): "),(0,l.bo)((0,l.Lk)("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=t=>u.unitSize=t),min:"0",step:"0.01"},null,512),[[s.Jo,u.unitSize,void 0,{number:!0}]])])])]),X,F],32),null!==u.result?((0,l.uX)(),(0,l.CE)("div",_,[(0,l.Lk)("h2",{style:(0,n.Tr)({color:u.result>0?"green":u.result<0?"red":"black"})}," Expected Value (EV): "+(0,n.v_)(u.result.toFixed(6))+" units ",5),null!==u.unitSize&&u.unitSize>0?((0,l.uX)(),(0,l.CE)("h2",{key:0,style:(0,n.Tr)({color:u.result>0?"green":u.result<0?"red":"black"})}," Expected Value (EV): $"+(0,n.v_)((u.result*u.unitSize).toFixed(2)),5)):(0,l.Q3)("",!0)])):(0,l.Q3)("",!0)])}o(4114);var H=o(4335),j={data(){return{legs:[{hitRate:50}],payouts:[{hits:1,total:1,amount:"+100",type:"payout"}],result:null,unitSize:null,allLegsHitRate:null,showPrizepicks:!1,showUnderdog:!1,prizepicksPresets:[{name:"Prizepicks 2 power",legs:Array(2).fill({hitRate:50}),payouts:[{hits:2,type:"payout",amount:"+200",loss:0}]},{name:"Prizepicks 3 flex",legs:Array(3).fill({hitRate:50}),payouts:[{hits:3,type:"payout",amount:"+125",loss:0},{hits:2,type:"payout",amount:"-400",loss:0}]},{name:"Prizepicks 3 power",legs:Array(3).fill({hitRate:50}),payouts:[{hits:3,type:"payout",amount:"+400",loss:0}]},{name:"Prizepicks 4 flex",legs:Array(4).fill({hitRate:50}),payouts:[{hits:4,type:"payout",amount:"+400",loss:0},{hits:3,type:"payout",amount:"-200",loss:0}]},{name:"Prizepicks 4 power",legs:Array(4).fill({hitRate:50}),payouts:[{hits:4,type:"payout",amount:"+900",loss:0}]},{name:"Prizepicks 5 flex",legs:Array(5).fill({hitRate:50}),payouts:[{hits:5,type:"payout",amount:"+900",loss:0},{hits:4,type:"payout",amount:"+100",loss:0},{hits:3,type:"loss",amount:"0",loss:.6}]},{name:"Prizepicks 6 flex",legs:Array(6).fill({hitRate:50}),payouts:[{hits:6,type:"payout",amount:"+2400",loss:0},{hits:5,type:"payout",amount:"+100",loss:0},{hits:4,type:"loss",amount:"0",loss:.6}]}],underdogPresets:[{name:"Underdog 2 power",legs:Array(2).fill({hitRate:50}),payouts:[{hits:2,type:"payout",amount:"+200",loss:0}]},{name:"Underdog 3 flex",legs:Array(3).fill({hitRate:50}),payouts:[{hits:3,type:"payout",amount:"+200",loss:0},{hits:2,type:"payout",amount:"0",loss:0}]},{name:"Underdog 3 power",legs:Array(3).fill({hitRate:50}),payouts:[{hits:3,type:"payout",amount:"+500",loss:0}]},{name:"Underdog 4 flex",legs:Array(4).fill({hitRate:50}),payouts:[{hits:4,type:"payout",amount:"+500",loss:0},{hits:3,type:"payout",amount:"-200",loss:0}]},{name:"Underdog 4 power",legs:Array(4).fill({hitRate:50}),payouts:[{hits:4,type:"payout",amount:"+900",loss:0}]},{name:"Underdog 5 flex",legs:Array(5).fill({hitRate:50}),payouts:[{hits:5,type:"payout",amount:"+900",loss:0},{hits:4,type:"payout",amount:"+150",loss:0}]},{name:"Underdog 5 power",legs:Array(5).fill({hitRate:50}),payouts:[{hits:5,type:"payout",amount:"+1900",loss:0}]},{name:"Underdog 6 flex",legs:Array(6).fill({hitRate:50}),payouts:[{hits:6,type:"payout",amount:"+2400",loss:0},{hits:5,type:"payout",amount:"+160",loss:0},{hits:4,type:"loss",amount:"0",loss:.75}]},{name:"Underdog 7 flex",legs:Array(7).fill({hitRate:50}),payouts:[{hits:7,type:"payout",amount:"+3900",loss:0},{hits:6,type:"payout",amount:"+175",loss:0},{hits:5,type:"loss",amount:"0",loss:.5}]},{name:"Underdog 8 flex",legs:Array(8).fill({hitRate:50}),payouts:[{hits:8,type:"payout",amount:"+7900",loss:0},{hits:7,type:"payout",amount:"+200",loss:0},{hits:6,type:"payout",amount:"0",loss:0}]}]}},methods:{addLeg(){this.legs.push({hitRate:50})},removeLeg(t){this.legs.splice(t,1)},addPayout(){this.payouts.push({hits:1,type:"payout",amount:"+100",loss:0})},removePayout(t){this.payouts.splice(t,1)},applyPreset(t){this.legs=JSON.parse(JSON.stringify(t.legs)),this.payouts=JSON.parse(JSON.stringify(t.payouts))},togglePreset(t){"prizepicks"===t?(this.showPrizepicks=!this.showPrizepicks,this.showPrizepicks&&(this.showUnderdog=!1)):"underdog"===t&&(this.showUnderdog=!this.showUnderdog,this.showUnderdog&&(this.showPrizepicks=!1))},parseOdds(t){let e=parseFloat(t);return isNaN(e)?0:"-"===t[0]?-100/e:"+"!==t[0]&&isNaN(t[0])?0:e/100},setAllLegsHitRate(){null!==this.allLegsHitRate&&this.legs.forEach((t=>{t.hitRate=this.allLegsHitRate}))},async handleSubmit(){try{const t=this.payouts.map((t=>({hits:t.hits,type:t.type,amount:"payout"===t.type?this.parseOdds(t.amount):t.loss}))),e=await H.A.post("/calculate_ev",{legs:this.legs,payouts:t});this.result=e.data.ev}catch(t){console.error("There was an error calculating the EV!",t),this.result=void 0}}}},N=o(6262);const T=(0,N.A)(j,[["render",J]]);var W=T,Q={name:"App",components:{ParlayCalculator:W}};const I=(0,N.A)(Q,[["render",u]]);var K=I;const $="https://true-calc-backend-8e6f5ca38f13.herokuapp.com/";H.A.defaults.baseURL=$,(0,s.Ef)(K).mount("#app")}},e={};function o(s){var l=e[s];if(void 0!==l)return l.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,l,a){if(!s){var u=1/0;for(p=0;p<t.length;p++){s=t[p][0],l=t[p][1],a=t[p][2];for(var n=!0,i=0;i<s.length;i++)(!1&a||u>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[i])}))?s.splice(i--,1):(n=!1,a<u&&(u=a));if(n){t.splice(p--,1);var r=l();void 0!==r&&(e=r)}}return e}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[s,l,a]}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var l,a,u=s[0],n=s[1],i=s[2],r=0;if(u.some((function(e){return 0!==t[e]}))){for(l in n)o.o(n,l)&&(o.m[l]=n[l]);if(i)var p=i(o)}for(e&&e(s);r<u.length;r++)a=u[r],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(p)},s=self["webpackChunktrue_calc"]=self["webpackChunktrue_calc"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(9016)}));s=o.O(s)})();
//# sourceMappingURL=app.2a243d68.js.map