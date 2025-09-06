(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{3630:(e,s,n)=>{Promise.resolve().then(n.t.bind(n,5234,23)),Promise.resolve().then(n.t.bind(n,326,23)),Promise.resolve().then(n.t.bind(n,1954,23)),Promise.resolve().then(n.t.bind(n,8619,23)),Promise.resolve().then(n.t.bind(n,1063,23)),Promise.resolve().then(n.t.bind(n,7939,23)),Promise.resolve().then(n.t.bind(n,5125,23)),Promise.resolve().then(n.t.bind(n,1483,23))}},e=>{var s=s=>e(e.s=s);e.O(0,[497,954],()=>(s(8499),s(3630))),_N_E=e.O()}]);
// augment: ensure "物件一覧" link exists in header nav across pages
;(function(){
  function root(){try{var p=location.pathname.split('/');return'/' + (p[1]?p[1]+'/':'')}catch(e){return'/'}}
  function run(){var nav=document.querySelector('header nav');if(!nav) return; if(nav.querySelector('a[href*="pages/properties/index.html"]')) return; var a=document.createElement('a'); a.href=root()+"pages/properties/index.html"; a.textContent='物件一覧'; a.className='text-gray-700 hover:text-blue-900 font-medium transition-colors'; nav.appendChild(a);} 
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);} else {run();}
})();
