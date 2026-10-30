(function(){
var VERSION="1.14.0";
var LOGO='<defs><linearGradient id="@ID@" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3ec6fd"/><stop offset="1" stop-color="#2594fc"/></linearGradient></defs><path fill="url(#@ID@)" d="M81.9,81.9 81.8,82.2 81.9,83.2 84.4,90.8 84.6,91.2 85.5,94 87.3,98.4 88.4,101.8 89,103 89.2,103.9 89.8,105.2 90.1,106.4 92.6,112.8 93.7,116.2 95.8,121.3 96.7,122 103,122 103.4,121.8 103.9,121.2 105.2,118.1 105.2,117.8 106.4,115 107.7,110.9 108.3,109.6 110.9,102.1 111.5,100.9 111.7,99.9 112.3,98.7 113,96.5 113.2,96.2 116.5,86.9 116.7,86.5 118,82.8 118,82.3 117.8,81.7 117.3,81.4 107.7,81.4 107.3,81.7 106.3,84.7 106,85 104.9,88.6 104.7,88.9 101.7,97.7 101.1,98.9 100.1,102 99.8,102.4 99.5,102.2 97.7,96.8 97.5,96.4 92.7,81.9 92.3,81.4 82.5,81.4zM122.3,74.3 121.4,74.7 120.7,75.4 120.4,76.2 120.3,84 120.4,84.6 121.1,85.7 121.4,86.1 125.1,88.5 143.4,99.3 142.7,99.9 132.8,105.6 121.7,112.3 121.1,112.9 120.4,114.2 120.4,124.1 120.7,124.7 121.4,125.4 122,125.7 123.1,125.7 125.4,124.6 129,122.2 140.5,115.4 141.1,115 147,111.7 149.5,110.1 150.7,108.9 151.7,107.5 152,106 152,94 151.8,92.9 151.4,92.1 150.9,91.3 149.3,89.9 124.6,74.9 123.6,74.5zM77.1,74.3 75.4,75 69.4,78.6 68.8,79 68.3,79.2 57.1,86.2 53.9,88 50.7,90 50.2,90.3 48.8,91.5 48.3,92.3 48,93.8 48,106.2 48.1,106.3 48.1,107.2 48.6,108.5 49.1,109.3 50.2,110.1 67.2,119.9 75.8,125.1 77.1,125.7 78.3,125.7 79.1,125.3 79.4,125 80,123.8 80,114.4 79.5,113.4 78.4,112.3 59.9,101.3 57.2,99.8 56.5,99.3 57.6,98.5 62.8,95.5 70.1,91.1 76.3,87.5 78.8,85.9 79.5,85.3 80,84.2 80,76.5 79.7,75.7 79.1,74.8 78,74.3z"/><path fill="#0e64f0" d="M100.7,103.8 100.6,104.6 104.7,116.3 105.5,116.9 107.2,112.7 107.7,110 105.1,107zM143,99.7 137.2,103.2 136.8,103.9 137.3,105.2 142.9,111.3 145.4,112.2 148.9,110.4 151,108.6 151.9,106.5 151.8,103.6 151.4,103.1 149.5,102.9 144.4,99.8zM56.6,99.5 55.4,99.8 49.9,103.1 48.9,104 48.1,105.9 48.3,107.9 49.6,109.6 55.7,112.9 56.8,112.8 59,111.2 64.8,105.3 64.4,104.2z"/>';
var uid=0;
function logo(cls){var id="vg"+(uid++);return '<svg class="'+cls+'" viewBox="44 70 112 60" role="img" aria-label="Vcode" xmlns="http://www.w3.org/2000/svg">'+LOGO.replace(/@ID@/g,id)+'</svg>'}
var de=document.documentElement;de.classList.add("js");
var LINKS=[["/guide","Guide"],["/documentation","Docs"],["/plugins","Plugins"],["/themes","Themes"],["/languages","Languages"],["/changelog","Changelog"]];
var path=location.pathname.replace(/\/+$/,"")||"/";
var nav=LINKS.map(function(l){var on=path===l[0]||(l[0]==="/plugins"&&path.indexOf("/plugin")===0);return '<a href="'+l[0]+'"'+(on?' class="on" aria-current="page"':'')+'>'+l[1]+'</a>'}).join("");
if(!document.querySelector(".skip")){var sk=document.createElement("a");sk.className="skip";sk.href="#main";sk.textContent="Skip to content";document.body.insertBefore(sk,document.body.firstChild)}
var h=document.getElementById("site-header");
if(h){
 h.innerHTML='<div class="wrap"><nav class="top" aria-label="Main"><a class="brand" href="/">'+logo("")+'<span>Vcode</span><span class="ver">v'+VERSION+'</span></a><button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button><div class="links" id="nav-links">'+nav+'<a class="btn small" href="https://github.com/Christianzz4603/Vcode">GitHub</a><a class="btn small primary" href="/download">Download</a></div></nav></div>';
 var b=h.querySelector(".burger"),l=h.querySelector(".links");
 b.addEventListener("click",function(){var o=l.classList.toggle("open");b.setAttribute("aria-expanded",o?"true":"false")});
 l.addEventListener("click",function(e){if(e.target.tagName==="A"){l.classList.remove("open");b.setAttribute("aria-expanded","false")}});
 var st=function(){h.classList.toggle("stuck",window.scrollY>8)};st();addEventListener("scroll",st,{passive:true});
}
var f=document.getElementById("site-footer");
if(f)f.innerHTML='<footer class="site"><div class="wrap foot"><div><strong style="color:var(--text)">Vcode</strong> v'+VERSION+'<br>A modified version of <a href="https://github.com/massivemadness/Squircle-CE">Squircle CE</a> by Blacksquircle.<br>Licensed under Apache 2.0.</div><div class="fl"><a href="/guide">Guide</a><a href="/documentation">Documentation</a><a href="/plugins">Plugins</a><a href="/download">Download</a><a href="https://github.com/Christianzz4603/Vcode">Source</a><a href="https://github.com/Christianzz4603/Vcode/blob/main/PRIVACY-POLICY.md">Privacy policy</a><a href="https://github.com/Christianzz4603/Vcode/blob/main/LICENSE">License</a></div></div></footer>';
[].forEach.call(document.querySelectorAll("[data-logo]"),function(el){el.innerHTML=logo(el.getAttribute("data-logo")||"")});
var still=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
/* reveal on scroll */
var rv=[].slice.call(document.querySelectorAll(".rv"));
function count(el){var to=parseFloat(el.getAttribute("data-count")),suf=el.getAttribute("data-suffix")||"",dec=(String(to).split(".")[1]||"").length;if(still){el.textContent=to.toFixed(dec)+suf;return}var t0=null;function step(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/1200),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec)+suf;if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)}
var cnt=[].slice.call(document.querySelectorAll("[data-count]"));
if("IntersectionObserver" in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");if(e.target.hasAttribute("data-count"))count(e.target);io.unobserve(e.target)}})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});
 rv.forEach(function(el){io.observe(el)});cnt.forEach(function(el){io.observe(el)});
}else{rv.forEach(function(el){el.classList.add("in")});cnt.forEach(count)}
/* pointer glow on cards */
document.addEventListener("pointermove",function(e){var c=e.target.closest&&e.target.closest(".bc,.card");if(!c)return;var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")},{passive:true});
/* app rail arrows */
[].forEach.call(document.querySelectorAll("[data-rail]"),function(btn){btn.addEventListener("click",function(){var r=document.querySelector(".rail");if(r)r.scrollBy({left:parseInt(btn.getAttribute("data-rail"),10)*r.clientWidth*.7,behavior:still?"auto":"smooth"})})});
/* docs table of contents highlight */
var toc=[].slice.call(document.querySelectorAll(".toc a[href^='#']"));
if(toc.length&&"IntersectionObserver" in window){
 var map={};toc.forEach(function(a){var t=document.getElementById(a.getAttribute("href").slice(1));if(t)map[t.id]=a});
 var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){toc.forEach(function(a){a.classList.remove("on")});if(map[e.target.id])map[e.target.id].classList.add("on")}})},{rootMargin:"-15% 0px -75% 0px"});
 Object.keys(map).forEach(function(k){so.observe(document.getElementById(k))});
}
/* TV and remote control: D-pad focus movement */
var tv=/SmartTV|SMART-TV|Tizen|Web0S|WebOS|NetCast|NETTV|AFT[A-Z]|Android TV|BRAVIA|CrKey|GoogleTV|HbbTV|VIDAA|Hisense/i.test(navigator.userAgent)||/[?&]tv(=1|&|$)/.test(location.search);
if(tv){
 de.classList.add("tv");rv.forEach(function(el){el.classList.add("in")});
 var SEL='a[href],button,summary,input,select,textarea,[tabindex]:not([tabindex="-1"])';
 var vis=function(e){var r=e.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(e).visibility!=="hidden"};
 addEventListener("keydown",function(ev){
  var k=ev.key;if(!/^Arrow(Up|Down|Left|Right)$/.test(k))return;
  var a=document.activeElement;if(a&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))return;
  var els=[].slice.call(document.querySelectorAll(SEL)).filter(vis);if(!els.length)return;
  if(!a||a===document.body||els.indexOf(a)<0){els[0].focus();ev.preventDefault();return}
  var r=a.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,best=null,bs=1e9;
  els.forEach(function(e){if(e===a)return;var q=e.getBoundingClientRect(),dx=q.left+q.width/2-cx,dy=q.top+q.height/2-cy,ok,pri,sec;
   if(k==="ArrowRight"){ok=dx>4;pri=dx;sec=Math.abs(dy)}else if(k==="ArrowLeft"){ok=dx<-4;pri=-dx;sec=Math.abs(dy)}else if(k==="ArrowDown"){ok=dy>4;pri=dy;sec=Math.abs(dx)}else{ok=dy<-4;pri=-dy;sec=Math.abs(dx)}
   if(!ok)return;var s=pri+sec*2.2;if(s<bs){bs=s;best=e}});
  if(best){best.focus();best.scrollIntoView({block:"center",inline:"center"});ev.preventDefault()}
 });
}
})();
