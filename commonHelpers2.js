import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";const s={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),state:document.querySelectorAll('input[name="state"]')};s.form.addEventListener("submit",n);function n(o){o.preventDefault();const t=Number(s.delay.value),m=document.querySelector('input[name="state"]:checked').value;new Promise((e,i)=>{setTimeout(()=>{m==="fulfilled"?e(`Fulfilled promise in ${t}ms`):i(`Rejected promise in ${t}ms`)},t)}).then(e=>{r.success({title:"OK",message:e})}).catch(e=>{r.error({title:"Error",message:e})})}
//# sourceMappingURL=commonHelpers2.js.map
