function t(t){const e=new Image;return new Promise(n=>{e.onload=(()=>n(e)),e.src=t})}const e=document.createElement("canvas");e.width=60,e.height=20;const n=e.getContext("2d");n.imageSmoothingEnabled=!0;const r={};const a=document.createElement("canvas"),i=a.getContext("2d");i.imageSmoothingEnabled=!0;const o={};function c(e,n,{IMAGES:r,ICON_SIZE:c,IMG_W:h,IMG_H:u}){return new Promise(function(l,d){let g,s,m;return n=Math.round(n),o[e+n]?l(o[e+n]):function(e,n){const r=n[e];return r||console.error("no image status",e),t(r)}(e,r).then(function(r){try{return g=r,a.width=c,a.height=c,i.clearRect(0,0,a.width,a.height),i.save(),i.translate(a.width/2,a.height/2),i.rotate(n*Math.PI/180),i.drawImage(g,0,0,g.naturalWidth,g.naturalHeight,-h/2,-u/2,h,u),i.restore(),t(s=a.toDataURL()).then(function(t){try{return o[e+n]=m=t,l(m)}catch(t){return d(t)}},d)}catch(t){return d(t)}},d)})}const h=52,u=h,l=Math.round(.4*h),d=h+l,g=h/2,s=document.createElement("canvas");s.width=u,s.height=d;const m=s.getContext("2d");m.imageSmoothingEnabled=!0;const w={};module.exports=function(a,i,o,f){return new Promise(function(x,I){let y,E,S;return w[a+(i%=360)+o]?x(w[a+i+o]):c(a,i,f).then(function(c){try{return y=c,m.clearRect(0,0,s.width,s.height),m.drawImage(y,0,0,y.naturalWidth,y.naturalHeight,0,0,h,h),function(a){return new Promise(function(i,o){let c,h;return r[a]?i(r[a]):(n.fillStyle="white",n.fillRect(0,0,e.width,e.height),n.textAlign="center",n.textBaseline="top",n.fillStyle="black",n.font="bold 18px Arial",n.fillText(a,e.width/2,0,e.width),t(c=e.toDataURL()).then(function(t){try{return r[a]=h=t,i(h)}catch(t){return o(t)}},o))})}(o).then(function(t){try{return m.drawImage(E=t,0,0,E.naturalWidth,E.naturalHeight,0,d-l,s.width,l),S={url:s.toDataURL(),origin:{x:0,y:0},anchor:{x:g,y:g},scaledSize:{width:u,height:d}},w[a+i+o]=S,x(S)}catch(t){return I(t)}},I)}catch(t){return I(t)}},I)})};
//# sourceMappingURL=index.js.map