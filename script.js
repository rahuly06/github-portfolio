const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -40px'});document.querySelectorAll('.reveal').forEach(e=>o.observe(e));document.getElementById('year').textContent=new Date().getFullYear();

document.querySelectorAll('.result-viewer').forEach(viewer=>{
  const tabs=viewer.querySelectorAll('[data-result]');
  const panels=viewer.querySelectorAll('.result-panel');
  tabs.forEach(tab=>tab.addEventListener('click',()=>{
    tabs.forEach(button=>{const selected=button===tab;button.classList.toggle('active',selected);button.setAttribute('aria-selected',String(selected))});
    panels.forEach(panel=>{const selected=panel.id===tab.dataset.result;panel.hidden=!selected;panel.classList.toggle('active',selected)});
  }));
});
