/* Zlatko69 mobile menu: burger toggle, close on link click, Esc and resize */
(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('site-nav');
  if(!b||!n)return;
  function set(o){
    document.body.classList.toggle('open',o);
    b.setAttribute('aria-expanded',o?'true':'false');
    b.setAttribute('aria-label',o?'Close menu':'Open menu');
  }
  b.addEventListener('click',function(){set(!document.body.classList.contains('open'))});
  n.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&document.body.classList.contains('open')){set(false);b.focus()}
  });
  window.addEventListener('resize',function(){if(window.innerWidth>719)set(false)});
  window.addEventListener('pageshow',function(){set(false)});
})();
