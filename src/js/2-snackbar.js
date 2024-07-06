import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  form: document.querySelector(".form"),
  delay: document.querySelector('input[name="delay"]'),
  state: document.querySelectorAll('input[name="state"]'),
};

refs.form.addEventListener("submit", handler);
function handler(event) {
  event.preventDefault();
  const delay = Number(refs.delay.value);
  const state = document.querySelector('input[name="state"]:checked').value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(`${delay}ms`);
      } else {
        reject(`${delay}ms`);
      }
    }, delay);
  });

  promise
    .then((message) => {
      console.log(`✅ Fulfilled promise in ${delay}ms`)
      iziToast.success({
        title: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((message) => {
      console.log(`❌ Rejected promise in ${delay}ms`)
      iziToast.error({
        title: '',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
}
