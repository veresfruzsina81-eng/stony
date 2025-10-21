
(function(){
  const box=document.getElementById('lang'); if(box){
    const btn=box.querySelector('.langbtn');
    btn.addEventListener('click',e=>{e.stopPropagation();box.classList.toggle('open')});
    document.addEventListener('click',()=>box.classList.remove('open'));
  }
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active')); t.classList.add('active');
  }));
  (function(){
    var b=document.getElementById('hamb'); if(!b) return;
    b.addEventListener('click', function(e){ e.stopPropagation(); document.body.classList.toggle('nav-open'); });
    document.addEventListener('click', function(){ document.body.classList.remove('nav-open'); });
  })();
  (function(){
    var t = document.querySelector('[data-open="search"]');
    var box = document.querySelector('.glass-collapsible');
    if(t && box){
      box.classList.remove('open');
      t.addEventListener('click', function(e){
        e.preventDefault();
        box.classList.toggle('open');
        if(box.classList.contains('open')){ box.scrollIntoView({behavior:'smooth', block:'start'}); }
      });
    }
  })();
  (function(){
    var back = document.querySelector('.back-btn');
    if(back){
      back.addEventListener('click', function(e){
        e.preventDefault();
        if(history.length > 1) history.back(); else window.location.href = 'index.html';
      });
    }
  })();
})();
