// Підключення функціоналу "Чертоги Фрілансера"
import {
  isMobile
} from "./functions.js";
// Підключення списку активних модулів
import {
  flsModules
} from "./modules.js";


let scrollpos = window.scrollY
let lastScroll = 0;
const scrollChange = 80
const defaultOffset = 80;
const add_class_on_scroll = () => header.classList.add("_header-bg")
const remove_class_on_scroll = () => header.classList.remove("_header-bg")
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('_hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //scroll down
    header.classList.add('_hide');
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove('_hide');
  }

  lastScroll = scrollPosition();
})

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll()
  } else {
    remove_class_on_scroll()
  }
})

// Скрипт квиза

const quiz = document.getElementById('quiz-form');
const quizItems = quiz.querySelectorAll('.quiz-form__fieldset');
const btnsNext = quiz.querySelectorAll('.button_next');

quizItems.forEach((quizItem, quizeItemIndex) => {
  if (quizeItemIndex === 0) {
    quizItem.classList.add('_active');
  } else {
    quizItem.classList.remove('_active');
  }
});

btnsNext.forEach((btn, btnIndex) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    quizItems[btnIndex].classList.remove('_active');
    quizItems[btnIndex + 1].classList.add('_active');
  });

  btn.disabled = true;

});

quizItems.forEach((quizItem, quizItemIndex) => {

  quizItem.addEventListener('change', (e) => {
    const target = e.target;
    const inputsChecked = quizItem.querySelectorAll('input:checked');

    if (inputsChecked.length > 0) {
      // разблокировать кнопку именно эту
      btnsNext[quizItemIndex].disabled = false;
    } else {
      // заблокировать эту кнопку
      btnsNext[quizItemIndex].disabled = true;
    }
  })
});
