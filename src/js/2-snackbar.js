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
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then((message) => {
      iziToast.success({
        title: 'OK',
        message: message,
      });
    })
    .catch((message) => {
      iziToast.error({
        title: 'Error',
        message: message,
      });
    });
}
