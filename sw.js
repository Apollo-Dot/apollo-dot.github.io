if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),l={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-a3dd8ead.css",revision:null},{url:"assets/index-f9a02be3.js",revision:null},{url:"index.html",revision:"96907310dd0c6f22121c909a3426044f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"4c8104ea87c68aa25b0558ddf3816b0b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
