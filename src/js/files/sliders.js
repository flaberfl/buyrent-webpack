// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.projects__slider_new')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.projects__slider_new', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 118,
			slidesPerView: 'auto',
			// autoHeight: true,
			speed: 800,

			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1.05,
					spaceBetween: 15,
				},
				340: {
					slidesPerView: 1.1,
					spaceBetween: 15,
				},
				510: {
					slidesPerView: 1.5,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 1.8,
					spaceBetween: 30,
				},
				850: {
					slidesPerView: 2,
					spaceBetween: 60,
				},

				1280: {
					slidesPerView: 2,
					spaceBetween: 118,
				},
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.projects__slider_old')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.projects__slider_old', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 118,
			slidesPerView: 'auto',
			// autoHeight: true,
			speed: 800,

			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1.05,
					spaceBetween: 15,
				},
				340: {
					slidesPerView: 1.1,
					spaceBetween: 15,
				},
				510: {
					slidesPerView: 1.5,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 1.8,
					spaceBetween: 30,
				},
				850: {
					slidesPerView: 2,
					spaceBetween: 60,
				},

				1280: {
					slidesPerView: 2,
					spaceBetween: 118,
				},
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.proj__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.proj__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 15,
			// slidesPerView: 'auto',
			// autoHeight: true,
			speed: 800,

			navigation: {
				prevEl: '.button-media-prev',
				nextEl: '.button-media-next',
			},

			// Брейкпоінти
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1.05,
			// 		spaceBetween: 15,
			// 	},
			// 	340: {
			// 		slidesPerView: 1.1,
			// 		spaceBetween: 15,
			// 	},
			// 	510: {
			// 		slidesPerView: 1.5,
			// 		spaceBetween: 30,
			// 	},
			// 	768: {
			// 		slidesPerView: 1.8,
			// 		spaceBetween: 30,
			// 	},
			// 	850: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 60,
			// 	},

			// 	1280: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 118,
			// 	},
			// },

			// Події
			on: {

			}
		});
	}

}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});