const nav=document.getElementById('navLinks');
document.getElementById('menuBtn').addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const header=document.querySelector('.nav-wrap'), bar=document.getElementById('progressBar');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',scrollY>30); const h=document.documentElement.scrollHeight-innerHeight; bar.style.width=(scrollY/h*100)+'%';});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const gallery=document.getElementById('galleryGrid');
for(let i=1;i<=14;i++){const b=document.createElement('button');b.innerHTML=`<img src="assets/page-${i}.jpg" alt="Dokumentasi profil halaman ${i}" loading="lazy">`;b.addEventListener('click',()=>openLightbox(i));gallery.appendChild(b)}
function openLightbox(i){const box=document.createElement('div');box.className='lightbox';box.innerHTML=`<div class="lightbox-inner"><button class="close">×</button><img src="assets/page-${i}.jpg" alt="Dokumentasi halaman ${i}"><div>Halaman ${i} dari profil Puskesmas Sungai Rangit</div></div>`;document.body.appendChild(box);box.addEventListener('click',e=>{if(e.target===box||e.target.classList.contains('close'))box.remove()});}
const s=document.createElement('style');s.textContent='.lightbox{position:fixed;inset:0;background:rgba(3,24,20,.88);z-index:200;display:grid;place-items:center;padding:25px}.lightbox-inner{position:relative;max-width:1100px;width:100%;color:#dceae4;font-size:.8rem}.lightbox img{display:block;width:100%;max-height:82vh;object-fit:contain;border-radius:18px;box-shadow:0 25px 80px #000}.lightbox .close{position:absolute;right:0;top:-45px;border:0;background:none;color:#fff;font-size:2rem;cursor:pointer}';document.head.appendChild(s);
