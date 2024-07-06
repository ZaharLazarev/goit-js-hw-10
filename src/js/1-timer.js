import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  input: document.querySelector("#datetime-picker"),
  button: document.querySelector('button[data-start="start"]'),
  days: document.querySelector('span[data-days="days"]'),
  hours: document.querySelector('span[data-hours="hours"]'),
  minutes: document.querySelector('span[data-minutes="minutes"]'),
  seconds: document.querySelector('span[data-seconds="seconds"]'),
};

let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate && selectedDate > new Date()) {
      refs.button.removeAttribute("disabled");
    } else {
      refs.button.setAttribute("disabled", "");  
      iziToast.error({
        title: 'Error',
        message: "Please choose a date in the future",
    });
    }
  },
};

flatpickr(refs.input, options);

refs.button.addEventListener("click", startTimer);

function startTimer() {
  refs.button.setAttribute("disabled", "");
  refs.input.setAttribute("disabled", "");

  const intervalId = setInterval(() => {
    const now = new Date();
    const timeDifference = selectedDate - now;

    if (timeDifference <= 0) {
      clearInterval(intervalId);
    refs.input.removeAttribute("disabled");
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    refs.days.textContent = String(days).padStart(2, '0');
    refs.hours.textContent = String(hours).padStart(2, '0');
    refs.minutes.textContent = String(minutes).padStart(2, '0');
    refs.seconds.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
console.log("Hello world");




