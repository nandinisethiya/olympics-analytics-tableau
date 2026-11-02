const EMBED='https://public.tableau.com/views/global_olympic_sports_performance_analytics/';
const OPEN='https://public.tableau.com/app/profile/nandini.sethiya5900/viz/global_olympic_sports_performance_analytics/';
const data={dashboards:[
{title:'Global Sports Performance Analytics',tag:'DASHBOARD 01',desc:'Medal map, medal trend, medals per athlete by sport category and country medals with a Total / Gold / Silver / Bronze selector.',view:'GLOBALSPORTSPERFORMANCEANALYTICSDASHBOARD'},
{title:'Olympic Performance and Regional Efficiency',tag:'DASHBOARD 02',desc:'Medal efficiency by region, investment against medals, host-country medals and the regional split by sport.',view:'OLYMPICPERFORMANCEANDREGIONALEFFICIENCYDASHBOARD'}],
stories:[
{title:'Olympic Performance Story',tag:'STORY 01',desc:'Two scenes: global medal performance, then regional efficiency and investment.',view:'OLYMPICPERFORMANCESTORY'}]};
let group='dashboards',selected=0;
function showViz(src){
  box.innerHTML='';
  const msg=document.createElement('div');msg.className='vizmsg';msg.textContent='Loading Tableau view...';box.appendChild(msg);
  const viz=document.createElement('tableau-viz');
  viz.setAttribute('src',src);viz.setAttribute('width','100%');viz.setAttribute('height',window.innerWidth<551?'560':'750');
  viz.setAttribute('toolbar','bottom');viz.setAttribute('hide-tabs','');
  viz.addEventListener('firstinteractive',()=>msg.remove());
  box.appendChild(viz);
  setTimeout(()=>{if(msg.isConnected)msg.textContent='Still loading. If nothing appears, select "Open in Tableau" above.'},9000);
}
const list=document.getElementById('viewList'),box=document.getElementById('vizBox');
function load(){const v=data[group][selected];list.innerHTML='';data[group].forEach((item,i)=>{const b=document.createElement('button');b.className='choice'+(i===selected?' active':'');b.innerHTML=`<small>${item.tag}</small><strong>${item.title}</strong><span>${item.desc}</span>`;b.onclick=()=>{selected=i;load()};list.appendChild(b)});document.getElementById('kind').textContent=group==='dashboards'?'DASHBOARD':'TABLEAU STORY';document.getElementById('viewTitle').textContent=v.title;document.getElementById('viewDesc').textContent=v.desc;document.getElementById('openLink').href=OPEN+v.view;showViz(EMBED+v.view)}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{group=b.dataset.group;selected=0;document.querySelectorAll('.tabs button').forEach(x=>x.classList.toggle('active',x===b));load()});load();
