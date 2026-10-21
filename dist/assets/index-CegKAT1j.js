(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},t=([e,n,r])=>{let i=document.createElementNS(`http://www.w3.org/2000/svg`,e);return Object.keys(n).forEach(e=>{i.setAttribute(e,String(n[e]))}),r?.length&&r.forEach(e=>{let n=t(e);i.appendChild(n)}),i},n=(n,r={})=>t([`svg`,{...e,...r},n]),r=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),i=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},a=e=>{let t=``,n=!1;for(let r of e)r===`-`||r===`_`||r<=` `?n=t.length>0:(t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t},o=e=>{let t=a(e);return t.charAt(0).toUpperCase()+t.slice(1)},s=e=>Array.from(e.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),c=e=>typeof e==`string`?e:!e||!e.class?``:e.class&&typeof e.class==`string`?e.class.split(` `):e.class&&Array.isArray(e.class)?e.class:``,l=(t,{nameAttr:a,icons:l,attrs:u})=>{let d=t.getAttribute(a);if(d==null)return;let f=l[o(d)];if(!f)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);let p=s(t),m=i(p)?{}:{"aria-hidden":`true`},h={...e,"data-lucide":d,...m,...u,...p},g=c(p),_=c(u),v=r(`lucide`,`lucide-${d}`,...g,..._);v&&Object.assign(h,{class:v});let y=n(f,h);return t.parentNode?.replaceChild(y,t)},u=[[`path`,{d:`M5 12h14`}],[`path`,{d:`m12 5 7 7-7 7`}]],d=[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`}],[`circle`,{cx:`12`,cy:`8`,r:`6`}]],f=[[`path`,{d:`M8 2v3`}],[`path`,{d:`M16 2v3`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}],[`path`,{d:`M3 9h18`}]],p=[[`path`,{d:`M20 6 9 17l-5-5`}]],m=[[`path`,{d:`m6 9 6 6 6-6`}]],h=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`m16 9-5.5 5.5L8 12`}]],g=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M12 6v6l4 2`}]],_=[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`}]],v=[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`}],[`circle`,{cx:`12`,cy:`10`,r:`3`}]],y=[[`path`,{d:`M4 5h16`}],[`path`,{d:`M4 12h16`}],[`path`,{d:`M4 19h16`}]],ee=[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`}]],te=[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`}]],b=[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`}],[`path`,{d:`m9 12 2 2 4-4`}]],x=[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`}],[`path`,{d:`M20 2v4`}],[`path`,{d:`M22 4h-4`}],[`circle`,{cx:`4`,cy:`20`,r:`2`}]],S=[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`}]],ne=[[`path`,{d:`M18 6 6 18`}],[`path`,{d:`m6 6 12 12`}]],C=({icons:e={},nameAttr:t=`data-lucide`,attrs:n={},root:r=document,inTemplates:i}={})=>{if(!Object.values(e).length)throw Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(r===void 0)throw Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${t}]`)).forEach(r=>l(r,{nameAttr:t,icons:e,attrs:n})),i&&Array.from(r.querySelectorAll(`template`)).forEach(r=>C({icons:e,nameAttr:t,attrs:n,root:r.content,inTemplates:i})),t===`data-lucide`){let t=r.querySelectorAll(`[icon-name]`);t.length>0&&(console.warn(`[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide`),Array.from(t).forEach(t=>l(t,{nameAttr:`icon-name`,icons:e,attrs:n})))}};function re(e,t,n,r,i){let a=1-i;return[a*a*a*e[0]+3*a*a*i*t[0]+3*a*i*i*n[0]+i*i*i*r[0],a*a*a*e[1]+3*a*a*i*t[1]+3*a*i*i*n[1]+i*i*i*r[1]]}function w(e,t,n,r,i){let a=1-i;return[3*a*a*(t[0]-e[0])+6*a*i*(n[0]-t[0])+3*i*i*(r[0]-n[0]),3*a*a*(t[1]-e[1])+6*a*i*(n[1]-t[1])+3*i*i*(r[1]-n[1])]}var T=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function E(e,t,n={}){let r=(n.pen??-15)*Math.PI/180,i=n.wMin??.4,a=n.wMax??4,o=n.taperIn??6,s=n.taperOut??20,c=n.endW??.08,l=n.steps??48,u=[],d=e,f=n.startW??1;t.forEach(([e,t,n,r=1],i)=>{for(let a=i===0?0:1;a<=l;a++){let i=a/l;u.push({p:re(d,e,t,n,i),d:w(d,e,t,n,i),k:f+(r-f)*T(i)})}d=n,f=r});let p=0;u.forEach((e,t)=>{if(t>0){let n=u[t-1].p;p+=Math.hypot(e.p[0]-n[0],e.p[1]-n[1])}e.len=p});let m=[],h=[];return u.forEach(e=>{let t=Math.hypot(e.d[0],e.d[1])||1,n=e.d[0]/t,l=e.d[1]/t,u=Math.atan2(l,n),d=i+(a-i)*Math.abs(Math.sin(u-r)),f=Math.min(T(e.len/o),T((p-e.len)/s)),g=d*e.k*(c+(1-c)*f)/2,_=-l,v=n;m.push(`${(e.p[0]+_*g).toFixed(2)} ${(e.p[1]+v*g).toFixed(2)}`),h.push(`${(e.p[0]-_*g).toFixed(2)} ${(e.p[1]-v*g).toFixed(2)}`)}),`M ${m.join(` L `)} L ${h.reverse().join(` L `)} Z`}var ie=[[47,22],[42,38],[37,48]],ae=[[[35,53],[27,58],[21,55.5]],[[16,53],[18,47],[25,47.5]],[[31,48],[36,51],[44,52]],[[80,61],[140,62],[170,57]],[[178,55.5],[184,53.5],[188,51]]],D={start:[39,12],curves:[[[37,11],[37.5,8],[40.5,7.5]],[[43,7],[45.5,7.5],[47,8.5]]]},oe={start:[44.4,27.4],startW:.55,curves:[[[36,22],[25,16],[25.5,10.5],.55],[[26,5.5],[32,4],[36,8.5],.6],[[39,4],[45.5,4],[47,8.5],1]]};function O(e){return E(e.start,[...e.curves,ie,...ae],{startW:e.startW??1,pen:-25,wMin:.35,wMax:4.6,taperIn:5,taperOut:150,endW:.12})}var k=E([60,58],[[[105,69],[160,67],[190,58]],[[203,54],[211,45],[217,35]]],{pen:-15,wMin:.2,wMax:1.5,taperIn:50,taperOut:40,endW:.05}),A=E([14,52],[[[6,30],[30,8],[88,5]],[[145,2],[203,6],[220,22]],[[228,30],[226,40],[218,46]]],{pen:-15,wMin:.3,wMax:1.7,taperIn:60,taperOut:40,endW:.05}),j=E([22,44],[[[17,28],[40,12],[92,9]],[[145,7],[192,10],[211,24]]],{pen:-15,wMin:.2,wMax:.9,taperIn:50,taperOut:50,endW:.05}),M={gold:{label:`シャンパンゴールド`,light:[`#7A5520`,`#A97B35`,`#D0A458`,`#C99A4E`,`#9C7030`,`#7A5520`],dark:[`#C9A25E`,`#E9CC8E`,`#F7E2B0`,`#E2C07F`,`#C39A55`,`#B88E4A`],sparkle:{light:`#D4A85A`,dark:`#F7E2B0`}},pink:{label:`ピンクゴールド`,light:[`#8C4055`,`#B35E76`,`#D58C9F`,`#C97A8F`,`#A4526A`,`#8C4055`],dark:[`#D78FA0`,`#F0B6C3`,`#FBD5DD`,`#EBA7B7`,`#CF8497`,`#C47A8D`],sparkle:{light:`#D9899D`,dark:`#FBD5DD`}}};function se(e,t){let n=[0,.28,.48,.6,.8,1];return`
    <linearGradient id="${e}" gradientUnits="userSpaceOnUse" x1="10" y1="4" x2="240" y2="72">
      ${t.map((e,t)=>`<stop offset="${n[t]}" stop-color="${e}" />`).join(``)}
    </linearGradient>`}function ce(e,t,n,r,i){let a=[-8.5,-4.25,0,4.25,8.5],o=[-15,-11.25,-7.5,-3.75,0,3.75,7.5,11.25,15],s=[`#FFFFFF`,`#D6EBFF`,`#F2F9FF`,`#B5D7F6`,`#E6F3FF`,`#C6E1FA`],c=[`#A9CEF0`,`#EAF5FF`,`#7FB1E0`,`#D3E8FB`,`#6EA5DA`,`#C2DFF8`,`#8DBCE7`,`#F4FAFF`],l=[];for(let e=0;e<4;e++)l.push([[o[2*e],0],[a[e],-7.5],[o[2*e+1],0]]),l.push([[a[e],-7.5],[a[e+1],-7.5],[o[2*e+1],0]]),l.push([[o[2*e+1],0],[a[e+1],-7.5],[o[2*e+2],0]]);let u=[];for(let e=0;e<8;e++)u.push([[o[e],0],[o[e+1],0],[0,17]]);let d=(e,t)=>`<polygon points="${e.map(e=>e.join(`,`)).join(` `)}" fill="${t}" stroke="#FFFFFF" stroke-width="0.35" stroke-opacity="0.85" stroke-linejoin="round" />`;return`
    <g transform="translate(${e} ${t}) rotate(-12) scale(${n})">
      <circle cx="0" cy="2" r="19" fill="url(#${r}-glow)" />
      <!-- 奥側のクラウン（テーブル上面とサイド） -->
      ${d([[-15,0],[-6,-10.5],[-8.5,-7.5]],`#CFE6FB`)}
      ${d([[15,0],[6,-10.5],[8.5,-7.5]],`#9CC6EC`)}
      ${d([[-8.5,-7.5],[-6,-10.5],[6,-10.5],[8.5,-7.5]],`url(#${r}-table)`)}
      <!-- 手前のクラウン -->
      ${l.map((e,t)=>d(e,s[t%s.length])).join(``)}
      <!-- パビリオン -->
      ${u.map((e,t)=>d(e,c[t])).join(``)}
      <!-- 外形線 -->
      <polygon points="-15,0 -6,-10.5 6,-10.5 15,0 0,17" fill="none"
               stroke="${i?`#CFE3F7`:`#7FA6CC`}" stroke-width="0.6" stroke-linejoin="round" />
      <!-- 煌めき -->
      <path d="M -3 -9 l 0.6 -1.6 l 0.6 1.6 l 1.6 0.6 l -1.6 0.6 l -0.6 1.6 l -0.6 -1.6 l -1.6 -0.6 Z" fill="#FFFFFF" />
      <circle cx="-5" cy="4" r="0.9" fill="#FFFFFF" />
    </g>`}function le(e,t){return`
    <radialGradient id="${e}-glow">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="${t?.55:.9}" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="${e}-table" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#D9ECFD" />
    </linearGradient>`}function N(e,t,n,r){let i=n*.12,a=(e,t)=>`M 0 ${-e} C ${t} ${-t} ${t} ${-t} ${e} 0 C ${t} ${t} ${t} ${t} 0 ${e} C ${-t} ${t} ${-t} ${t} ${-e} 0 C ${-t} ${-t} ${-t} ${-t} 0 ${-e} Z`;return`
    <g transform="translate(${e} ${t})">
      <path d="${a(n,i)}" fill="${r}" />
      <path d="${a(n*.45,i*.6)}" fill="${r}" opacity="0.7" transform="rotate(45)" />
      <circle r="${n*.18}" fill="#FFFFFF" />
    </g>`}function ue({head:e,ring:t,color:n,uidBase:r},i){let a=`${r}-${i?`d`:`l`}`,o=M[n],s=`url(#${a}-metal)`,c=i?o.sparkle.dark:o.sparkle.light;return`
    <svg viewBox="0 0 234 76" class="w-full h-full max-h-16" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LUMINA">
      <defs>
        ${se(`${a}-metal`,i?o.dark:o.light)}
        ${le(a,i)}
      </defs>

      ${t?`
      <path d="${A}" fill="${s}" opacity="0.85" />
      <path d="${j}" fill="${s}" opacity="0.45" />`:``}

      <!-- 2本目の細い光のライン -->
      <path d="${k}" fill="${s}" opacity="0.7" />

      <!-- 流麗なL -->
      <path d="${O(e===`heart`?oe:D)}" fill="${s}" />

      <!-- UMINA -->
      <text x="53" y="50" font-family="'Cinzel', 'Cormorant Garamond', serif" font-size="30" font-weight="500"
            textLength="128" lengthAdjust="spacing" fill="${s}">UMINA</text>

      <!-- ダイヤモンド（スワッシュの先端） -->
      ${ce(200,46,1.08,a,i)}

      <!-- 光のきらめき -->
      ${N(218,27,5.5,c)}
      ${N(226,37,2.2,c)}
      ${t?N(140,4.5,2.6,c):``}
    </svg>`}var P=[{id:`combo-basic-gold`,form:`basic`,color:`gold`,head:`basic`,ring:!1,name:`01. グレース・ゴールド`,badge:`★ 一番のおすすめ`,referencePos:`2枚目ゴールド ＋ 赤枠(3段目)`,concept:`2枚目のゴールド案の形をそのまま活かし、赤枠3段目のように装飾を控えたシンプルな構成。サイトのアイボリー×ゴールドに一番自然になじみます。`},{id:`combo-basic-pink`,form:`basic`,color:`pink`,head:`basic`,ring:!1,name:`02. グレース・ピンクゴールド`,badge:`💗 やさしさ重視`,referencePos:`2枚目ピンク ＋ 赤枠(3段目)`,concept:`01と同じ形をピンクゴールドに。血色のよい素肌を思わせるやわらかな色合いで、女性らしさと親しみやすさが増します。`},{id:`combo-heart-gold`,form:`heart`,color:`gold`,head:`heart`,ring:!1,name:`03. ハートL・ゴールド`,badge:`💛 赤枠(2段目)`,referencePos:`2枚目ゴールド ＋ 赤枠(2段目)`,concept:`Lの頭がそのままハートを描くデザイン。「魂のレベルで寄り添う」サロンの温かさを、文字の中にさりげなく込めました。`},{id:`combo-heart-pink`,form:`heart`,color:`pink`,head:`heart`,ring:!1,name:`04. ハートL・ピンクゴールド`,badge:`💗 赤枠(2段目)`,referencePos:`2枚目ピンク ＋ 赤枠(2段目)`,concept:`ハートのLをピンクゴールドで。いちばん甘く、やさしい印象になる組み合わせです。`},{id:`combo-ring-gold`,form:`ring`,color:`gold`,head:`basic`,ring:!0,name:`05. ルミナスリング・ゴールド`,badge:`✨ 赤枠(1段目)`,referencePos:`2枚目ゴールド ＋ 赤枠(1段目)`,concept:`文字全体を細いゴールドの光の輪がふんわり包むデザイン。ハイブランドのコスメのような、格上の高級感が出ます。`},{id:`combo-ring-pink`,form:`ring`,color:`pink`,head:`basic`,ring:!0,name:`06. ルミナスリング・ピンクゴールド`,badge:`✨ 赤枠(1段目)`,referencePos:`2枚目ピンク ＋ 赤枠(1段目)`,concept:`光の輪をピンクゴールドで。華やかさとやさしさを両立した、セレブ感のある仕上がりです。`},{id:`combo-premium-gold`,form:`premium`,color:`gold`,head:`heart`,ring:!0,name:`07. プレミアム（ハート＋リング）・ゴールド`,badge:`👑 赤枠3つ全部入り`,referencePos:`赤枠(1段目)＋(2段目)＋2枚目`,concept:`ハートのL、光の輪、スワッシュ、ダイヤをすべて組み合わせた一番華やかなバージョン。看板やショップカードなど大きく使う場面で映えます。`},{id:`combo-premium-pink`,form:`premium`,color:`pink`,head:`heart`,ring:!0,name:`08. プレミアム（ハート＋リング）・ピンクゴールド`,badge:`👑 赤枠3つ全部入り`,referencePos:`赤枠(1段目)＋(2段目)＋2枚目`,concept:`全部入りをピンクゴールドで。いちばん華やかで、いちばん女性らしい組み合わせです。`}].map(e=>({...e,fontStyle:e.head===`heart`?`ハートL ＋ Cinzel`:`カリグラフィL ＋ Cinzel`,colorName:M[e.color].label,getSvg:(t=!1)=>ue({head:e.head,ring:e.ring,color:e.color,uidBase:e.id},t)}));function F(){C({icons:{Sparkles:x,Heart:_,ShieldCheck:b,Clock:g,MapPin:v,Phone:te,Calendar:f,ArrowRight:u,CheckCircle2:h,ChevronDown:m,Menu:y,X:ne,Star:S,Award:d,MessageCircle:ee,Check:p}})}F();var I=document.getElementById(`mobile-menu-btn`),L=document.getElementById(`mobile-menu`),R=document.getElementById(`mobile-menu-close`),z=document.querySelectorAll(`.mobile-nav-link`);function B(e){e?(L.classList.remove(`hidden`),document.body.style.overflow=`hidden`):(L.classList.add(`hidden`),document.body.style.overflow=``)}I&&I.addEventListener(`click`,()=>B(!0)),R&&R.addEventListener(`click`,()=>B(!1)),z.forEach(e=>{e.addEventListener(`click`,()=>B(!1))}),document.querySelectorAll(`.faq-toggle`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.nextElementSibling,n=e.querySelector(`.faq-chevron`),r=!t.classList.contains(`hidden`);document.querySelectorAll(`.faq-content`).forEach(e=>e.classList.add(`hidden`)),document.querySelectorAll(`.faq-chevron`).forEach(e=>e.classList.remove(`rotate-180`)),r||(t.classList.remove(`hidden`),n&&n.classList.add(`rotate-180`))})});var V=document.querySelectorAll(`.menu-tab`),H=document.querySelectorAll(`.menu-group`);V.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.target;V.forEach(e=>{e.classList.remove(`bg-[#b8935a]`,`text-white`,`shadow-md`),e.classList.add(`bg-white`,`text-[#38332E]`)}),e.classList.remove(`bg-white`,`text-[#38332E]`),e.classList.add(`bg-[#b8935a]`,`text-white`,`shadow-md`),H.forEach(e=>{t===`all`||e.dataset.category===t?e.classList.remove(`hidden`):e.classList.add(`hidden`)})})});var U=document.getElementById(`reservation-modal`),de=document.querySelectorAll(`.open-reservation-btn`),fe=document.getElementById(`close-modal-btn`),pe=document.getElementById(`close-modal-btn-sub`);de.forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),U&&(U.classList.remove(`hidden`),document.body.style.overflow=`hidden`)})}),[fe,pe].forEach(e=>{e&&e.addEventListener(`click`,()=>{U&&(U.classList.add(`hidden`),document.body.style.overflow=``)})}),U&&U.addEventListener(`click`,e=>{e.target===U&&(U.classList.add(`hidden`),document.body.style.overflow=``)});var W=`combo-basic-gold`,G=!1,K=`all`,q=document.getElementById(`header-logo-container`),J=document.getElementById(`footer-logo-container`),Y=document.getElementById(`logo-gallery-container`),X=document.getElementById(`logo-theme-toggle`),Z=document.querySelectorAll(`.logo-filter-btn`);function Q(){let e=P.find(e=>e.id===W)||P[0];q&&(q.innerHTML=e.getSvg(!1)),J&&(J.innerHTML=e.getSvg(!0))}function $(){Y&&(Y.innerHTML=P.filter(e=>K===`all`?!0:K===`gold`?e.color===`gold`:K===`pink`?e.color===`pink`:K===`basic`?e.form===`basic`:K===`heart`?e.head===`heart`:K!==`ring`||e.ring===!0).map(e=>{let t=e.id===W;return`
      <div class="bg-white rounded-3xl p-6 sm:p-7 border-2 ${t?`border-[#b8935a] shadow-lg ring-2 ring-[#b8935a]/20`:`border-[#E8DEC0]/60 shadow-sm`} transition-all flex flex-col justify-between group">
        <div>
          <!-- カードヘッダー -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="inline-block text-[11px] font-bold tracking-wider px-3 py-1 rounded-full font-sans-jp bg-gradient-to-r from-[#b8935a] to-[#d8ba84] text-white shadow-xs">
              ${e.badge}
            </span>
            <span class="text-[10px] font-sans-jp px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E8DEC0] text-[#7A7169]">${e.referencePos}</span>
          </div>

          <h3 class="font-serif-jp text-base font-medium text-[#2C2724] mb-1">
            ${e.name}
          </h3>
          <div class="flex items-center justify-between text-xs font-sans-jp text-[#8C6D3E] mb-4">
            <span class="font-medium">${e.fontStyle}</span>
            <span class="text-[11px] text-[#8C827A]">${e.colorName}</span>
          </div>

          <!-- ロゴ表示プレビュー領域（ライト / ダーク切り替え可能） -->
          <div class="rounded-2xl p-5 mb-4 transition-colors duration-300 flex items-center justify-center min-h-[115px] ${G?`bg-[#2C2724] border border-[#443D37]`:`bg-[#FAF8F5] border border-[#E8E2D9]`}">
            ${e.getSvg(G)}
          </div>

          <p class="font-sans-jp text-xs text-[#5F5750] leading-relaxed mb-5">
            ${e.concept}
          </p>
        </div>

        <!-- アクションボタン -->
        <div class="pt-3 border-t border-[#F2ECE4]">
          <button class="apply-logo-btn w-full py-2.5 px-4 rounded-xl font-sans-jp text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${t?`bg-[#b8935a] text-white shadow`:`bg-[#FAF8F5] text-[#38332E] hover:bg-[#b8935a] hover:text-white border border-[#D5CBC0]`}" data-logo-id="${e.id}">
            <i data-lucide="${t?`check`:`sparkles`}" class="w-3.5 h-3.5"></i>
            <span>${t?`現在ヘッダーに適用中`:`このロゴをヘッダーに適用`}</span>
          </button>
        </div>
      </div>
    `}).join(``),document.querySelectorAll(`.apply-logo-btn`).forEach(e=>{e.addEventListener(`click`,()=>{W=e.dataset.logoId,Q(),$(),F(),window.scrollTo({top:0,behavior:`smooth`})})}),F())}Z.forEach(e=>{e.addEventListener(`click`,()=>{K=e.dataset.filter,Z.forEach(e=>{e.classList.remove(`bg-[#b8935a]`,`text-white`,`shadow-sm`),e.classList.add(`bg-white`,`text-[#38332E]`)}),e.classList.remove(`bg-white`,`text-[#38332E]`),e.classList.add(`bg-[#b8935a]`,`text-white`,`shadow-sm`),$()})}),X&&X.addEventListener(`click`,()=>{G=!G,X.innerHTML=G?`<span>☀️ 明るい背景で比較する</span>`:`<span>🌙 ダーク背景で比較する</span>`,$()}),Q(),$();