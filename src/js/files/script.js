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

// quizItems.forEach((quizItem, quizItemIndex) => {
//   if (quizItemIndex === 0) {
//     quizItem.classList.add('_active');
//   } else {
//     quizItem.classList.remove('_active');
//   }

//   // quizItems[0].classList.add('_active');
//   // quizItem.addEventListener('change', (e) => {

//   // })

//   quizItem.addEventListener('change', (e) => {
//     const target = e.target;
//     const inputsChecked = quizItem.querySelectorAll('input:checked');

//     // console.log(inputsChecked);

//     const buyTarget = document.querySelector('input:checked').value;

//     console.log(buyTarget);


//     if (buyTarget === 'Для инвестиций с доходностью 8%') {
//       btnsNext.forEach((btn) => {
//         btn.addEventListener('click', (e) => {
//           e.preventDefault();

//           quizItems[2].classList.add('_active');
//           quizItem.classList.remove('_active');
//           console.log(buyTarget);

//         });
//       });
//     };

//     if (buyTarget === 'comfort') {
//       btnsNext.forEach((btn) => {
//         btn.addEventListener('click', (e) => {
//           e.preventDefault();
//           quizItems[1].classList.add('_active');
//           quizItem.classList.remove('_active');
//           console.log(buyTarget);
//         });
//       });
//     };


//     // if (buyTarget === 'Новостройка' || 'Вторичное жильё' || 'Апартаменты в управление') {
//     //   btnsNext.forEach((btn) => {
//     //     btn.addEventListener('click', (e) => {
//     //       e.preventDefault();
//     //       quizItems[3].classList.add('_active');
//     //       quizItem.classList.remove('_active');
//     //       console.log(buyTarget);
//     //     });
//     //   });
//     // }

//     // if (buyTarget === 'Таунхаус/Вилла') {
//     //   btnsNext.forEach((btn) => {
//     //     btn.addEventListener('click', (e) => {
//     //       e.preventDefault();
//     //       quizItems[4].classList.add('_active');
//     //       quizItem.classList.remove('_active');
//     //       console.log(buyTarget);

//     //     });
//     //   });
//     // };








//     // let quizItemIndex = 2;
//     // console.log(quizItemIndex);


//     if (inputsChecked.length > 0) {
//       // разблокировать кнопку именно эту
//       btnsNext[quizItemIndex].disabled = false;
//     } else {
//       // заблокировать эту кнопку
//       btnsNext[quizItemIndex].disabled = true;
//     }
//   })
// });

// btnsNext.forEach((btn, btnIndex) => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // quizItems[btnIndex].classList.remove('_active');
//     // quizItems[btnIndex + 1].classList.add('_active');
//   });

//   btn.disabled = true;

// });

// quizItems.forEach((quizItem, quizItemIndex) => {


// });




let count = 0;
quizItems[count].classList.add('_active');

btnsNext.forEach((btn) => {
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

    // console.log(quizItem);

    // function initQuiz() {
    //   quizItems.forEach((element, i) => {
    //     element.classList.remove('_active')
    //     if (i === count) {
    //       element.classList.add('_active')
    //     }
    //   })
    // }

    // if (buyTarget === 'Для инвестиций с доходностью 8%') {
    //   btnsNext[quizItemIndex].disabled = false;
    //   console.log(buyTarget);
    //   btnsNext.forEach((btn) => {
    //     btn.addEventListener('click', (e) => {
    //       e.preventDefault();

    //       quizItems[2].classList.add('_active');
    //       quizItem.classList.remove('_active');

    //     });
    //   });
    // };

    // const buyTarget = document.querySelector('input:checked').value;

    inputsChecked.forEach((i) => { // Это я перебираю все радио инпуты
      console.log(i.value);

      btnsNext.forEach((btn) => {    // Перебираю все кнопки Далее
        btn.addEventListener('click', (e) => {   // Отлавливаю событие по кнопке
          e.preventDefault();

          if (i.value === 'Для инвестиций с доходностью 8%') {
            quizItems[2].classList.add('_active');
            quizItem.classList.remove('_active');

            console.log('Удаляем предыдущий слайд');
            console.log('Переходим на 2a слайд');
          }

          else
            if (i.value === 'comfort') {
              quizItems[1].classList.add('_active');
              quizItem.classList.remove('_active');
              console.log('Удаляем предыдущий слайд');

              console.log('Переходим на 2 слайд');
            } else

              if (i.value === 'Новостройка' || 'Вторичное жильё' || 'Апартаменты в управление') {
                quizItems[3].classList.add('_active');
                quizItem.classList.remove('_active');
                console.log('Переходим на 3 слайд');
              }
              else
                if (i.value === 'Таунхаус/Вилла') {
                  quizItems[4].classList.add('_active');
                  quizItem.classList.remove('_active');
                  console.log('Переходим на 3a слайд');
                }


          // if (i.value === 'comfort') {
          //   quizItems[1].classList.add('_active');
          //   quizItem.classList.remove('_active');
          //   console.log('Переходим на 2 слайд');
          // }


        });
      });



    });


    // if (buyTarget === 'comfort') {
    //   btnsNext.forEach((btn) => {
    //     btn.addEventListener('click', (e) => {
    //       e.preventDefault();
    //       quizItems[1].classList.add('_active');
    //       quizItem.classList.remove('_active');
    //       console.log(buyTarget);
    //     });
    //   });
    // };

    // if (buyTarget === 'Новостройка' || 'Вторичное жильё' || 'Апартаменты в управление') {
    //   btnsNext.forEach((btn) => {
    //     btn.addEventListener('click', (e) => {
    //       e.preventDefault();
    //       quizItems[3].classList.add('_active');
    //       quizItem.classList.remove('_active');
    //       console.log(buyTarget);
    //     });
    //   });
    // };

    // if (buyTarget === 'Таунхаус/Вилла') {
    //   btnsNext.forEach((btn) => {
    //     btn.addEventListener('click', (e) => {
    //       e.preventDefault();
    //       quizItems[4].classList.add('_active');
    //       quizItem.classList.remove('_active');
    //       console.log(buyTarget);

    //     });
    //   });
    // };


  })
});

const objects = document.querySelector('.object-popup__media');

const objectItems = objects.querySelectorAll('.object-popup__image');
const btnImageNext = objects.querySelectorAll('.button-media-next');
const btnImagePrev = objects.querySelectorAll('.button-media-prev');



let countImage = 0;
objectItems[countImage].classList.add('_active');



console.log(objectItems);
console.log(objectItems.length);

btnImageNext.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    countImage++;
    initObjectMedia();
    console.log(objectItems.length);

    if (countImage >= objectItems.length) {
      console.log('!!!!');
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
    console.log(countImage);
  });
});

btnImagePrev.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    countImage--;
    initObjectMedia();
  });
});

function initObjectMedia() {
  objectItems.forEach((element, i) => {
    element.classList.remove('_active')
    if (i === countImage) {
      element.classList.add('_active')
    }

    if (i >= objectItems.length) {
      btnImageNext.disabled = true;
      console.log('Куда погнал?');
    }
  })
}




// objectItems.forEach((objectItem, objectItemIndex) => {
//   if (objectItemIndex === 0) {
//     objectItem.classList.add('_active');
//   } else {
//     objectItem.classList.remove('_active');
//   }
// });

// btnImageNext.forEach((btn, btnIndex) => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     quizeItems[btnIndex].classList.remove('_active');
//     quizeItems[btnIndex + 1].classList.add('_active');
//   });

// });

// btnsPrev.forEach((btn, btnIndex) => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     quizeItems[btnIndex].classList.remove('_active');
//     quizeItems[btnIndex].classList.add('_active');
//   });

// });

