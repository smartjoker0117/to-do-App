(()=>{const t=document.getElementById("list-container"),e="task.lists";let n=JSON.parse(localStorage.getItem(e))||[];const a=document.getElementById("list-input"),d=document.querySelector("[data-list-new]"),l=document.getElementById("list-title"),s=document.getElementById("tasks"),o=document.getElementById("tasks-list"),i=document.getElementById("add-task"),c=document.getElementById("task-input"),r=document.getElementById("task-input-modal"),u=document.getElementById("date-modal"),m=document.getElementById("option-modal"),g=document.getElementById("description-modal"),p=document.getElementById("save-btn-modal"),y=document.getElementById("task-render"),k=document.getElementById("date"),v=document.getElementById("option"),E=document.getElementById("description"),I=document.getElementById("task-count");let f=n[n.length-1]||"";const x=document.getElementById("modal-parent");function B(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function h(){localStorage.setItem(e,JSON.stringify(n)),localStorage.setItem("selected.list",JSON.stringify(f))}function C(){B(t),n.forEach((e=>{const n=document.createElement("li");n.setAttribute("class","text-2xl cursor-pointer my-2 text-gray-100 uppercase"),n.dataset.listId=e.id,n.textContent=e.name,n.insertAdjacentHTML("beforeend",`\n    <i data-element = ${e.id} class="fa cursor-pointer fa-times-circle" aria-hidden="true"></i>`),t.appendChild(n)}))}function L(){B(o),f.tasks.forEach(((t,e)=>{const n=document.importNode(y.content,!0);n.querySelector("#task-title").textContent=t.name,n.getElementById("due-date-display").textContent=t.dueDate;const a=n.getElementById("priority-display");var d;a.textContent=t.priority,"low"===(d=a).textContent?d.classList.add("text-gray-500","font-bold"):"medium"===d.textContent?d.classList.add("text-yellow-500","font-bold"):d.classList.add("text-red-500","font-bold"),n.querySelector("#description-para").textContent=t.description;const l=n.querySelector("input");l.classList.add("checked"),l.checked=t.complete,[l,n.getElementById("edit"),n.getElementById("delete")].forEach((t=>{t.dataset.taskIndex=e})),o.appendChild(n)}))}function S(){const t=f.tasks.filter((t=>1==!t.complete)).length;return 1===t?`${t} task remaining`:`${t} tasks remaining`}function b(){h(),C()}s.classList.remove(".hidden"),t.addEventListener("click",(t=>{f=n.find((e=>e.id===t.target.dataset.listId)),h(),"li"===t.target.tagName.toLowerCase()&&(s.classList.remove("hidden"),l.textContent=t.target.textContent,I.textContent=S()),L()})),d.addEventListener("submit",(t=>{t.preventDefault();const e=a.value;if(null===e||""===e)return;const d=(l=e,{id:Date.now().toString(),name:l,tasks:[]});var l;a.value="",n.push(d),b()})),i.addEventListener("click",(()=>{const t=c.value,e=k.value,n=E.value,a=v.value;if(null===t||""===t)return;const d=function(t,e,n,a){return{id:Date.now().toString(),name:t,complete:!1,description:a,dueDate:n,priority:e}}(t,a,e,n);c.value="",E.value="",k.value=null,f.tasks.push(d),h(),L(),I.textContent=S()})),t.addEventListener("click",(t=>{n=n.filter((e=>e.id!==t.target.dataset.element)),b()})),window.addEventListener("click",(t=>{"delete"===t.target.id?(f.tasks.splice(t.target.dataset.listId,1),h(),L()):"checkbox"===t.target.id?(t.target.checked?f.tasks[t.target.dataset.taskIndex].complete=!0:f.tasks[t.target.dataset.taskIndex].complete=!1,h(),C(),L(),I.textContent=S()):"edit"!==t.target.id&&"close-btn"!==t.target.id||(x.classList.toggle("center"),p.addEventListener("click",(()=>{!function(t){const e=r.value;null!==e&&""!==e&&(t.name=e,null===m.value&&""===m.value||(t.priority=m.value),null===g.value&&""===g.value||(t.description=g.value),null===u.value&&""===u.value||(t.dueDate=u.value))}(f.tasks[t.target.dataset.taskIndex]),x.classList.toggle("center"),L(),h()})))})),localStorage&&(C(),L())})();