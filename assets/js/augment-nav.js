// Add a "物件一覧" link to header nav if missing
// Works across root (/) and /pages/* routes on GitHub Pages
(function(){
  function projectRoot(){
    try {
      var seg = (location.pathname.split('/')[1] || '').trim();
      return '/' + (seg ? seg + '/' : '');
    } catch (_) { return '/'; }
  }
  function ensureLink(){
    var nav = document.querySelector('header nav');
    if(!nav) return;
    // If any link already points to pages/properties/index.html, skip
    if(nav.querySelector('a[href*="pages/properties/index.html"]')) return;
    var a = document.createElement('a');
    a.textContent = '物件一覧';
    a.href = projectRoot() + 'pages/properties/index.html';
    a.className = 'text-gray-700 hover:text-blue-900 font-medium transition-colors';
    nav.appendChild(a);
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ensureLink);
  } else {
    ensureLink();
  }
})();

