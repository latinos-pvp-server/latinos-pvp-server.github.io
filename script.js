const copyBtn = document.getElementById('copyServer');
const toast = document.getElementById('toast');
copyBtn?.addEventListener('click', async () => {
  const text = copyBtn.dataset.server || 'LATINOSPVP-X5';
  try { await navigator.clipboard.writeText(text); }
  catch { const t=document.createElement('textarea');t.value=text;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove(); }
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1800);
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
document.querySelectorAll('[data-lightbox]').forEach(el => {
  el.addEventListener('click', () => {
    lightboxImage.src = el.dataset.lightbox;
    lightbox.showModal();
  });
});
document.querySelector('.lightbox-close')?.addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
