/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss"
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".df1234342")) {
    new Swiper(".df12324234", {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      //autoHeight: true,
      speed: 800,

      // lazyPreloaderClass: 'preloader',

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      /*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // Події
      on: {},
    })
  }

  // if (document.querySelector(".hero__slider")) {
  //   let heroSliders = document.querySelectorAll(".hero__slider")
  //   heroSliders.forEach(slider => {
  //     let speed = slider.getAttribute("data-speed") ? slider.getAttribute("data-speed") : 2000

  //     new Swiper(slider, {
  //       modules: [Autoplay],
  //       observer: true,
  //       observeParents: true,
  //       direction: "vertical",
  //       speed: speed,
  //       loop: true,
  //       slidesPerView: "auto",
  //       spaceBetween: 10,
  //       autoplay: {
  //         delay: 0,
  //         disableOnInteraction: false,
  //       },
  //     })
  //   })
  // }

  for (const mobileSlider of document.querySelectorAll(".hero__slider")) {
    if (mobileSlider) {
      let speed = mobileSlider.getAttribute("data-speed") ? mobileSlider.getAttribute("data-speed") : 1100
      ;(function () {
        "use strict"

        const breakpoint = window.matchMedia("(min-width:768px)")
        let sliderPC
        let sliderMOB

        const enableSwiperPC = function () {
          sliderPC = new Swiper(mobileSlider, {
            modules: [Autoplay],
            observer: true,
            observeParents: true,
            direction: "vertical",
            speed: speed,
            loop: true,
            // loopAdditionalSlides: 3,
            // loopedSlides: 6,
            slidesPerView: "auto",
            spaceBetween: 10,
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
            },
          })
        }
        const enableSwiperMOB = function () {
          sliderMOB = new Swiper(mobileSlider, {
            modules: [Autoplay],
            observer: true,
            observeParents: true,
            speed: speed,
            loop: true,
            // loopAdditionalSlides: 3,
            loopedSlides: 3,
            slidesPerView: 2.5,
            spaceBetween: 10,
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
            },

            // breakpoints: {
            //   320: {
            //     slidesPerView: 2,
            //     spaceBetween: 10,
            //   },
            //   460: {
            //     slidesPerView: 3,
            //     spaceBetween: 10,
            //   },
            //   768: {
            //     slidesPerView: 3,
            //     spaceBetween: 10,
            //   },
            //   992: {
            //     slidesPerView: 3,
            //     spaceBetween: 10,
            //   },
            //   1268: {
            //     slidesPerView: 3,
            //     spaceBetween: 10,
            //   },
            // },
          })
        }

        const breakpointChecker = function () {
          if (breakpoint.matches === true) {
            if (sliderMOB !== undefined) {
              sliderMOB.destroy(true, true)
            }
            return enableSwiperPC()
          } else if (breakpoint.matches === false) {
            if (sliderPC !== undefined) {
              sliderPC.destroy(true, true)
            }
            return enableSwiperMOB()
          }
        }

        breakpoint.addListener(breakpointChecker)
        breakpointChecker()
      })()
    }
  }

  if (document.querySelector(".service-hero__slider")) {
    new Swiper(".service-hero__slider", {
      modules: [Autoplay, Pagination],
      observer: true,
      observeParents: true,
      speed: 800,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      lazyPreloaderClass: "preloader",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".service-hero__slider .pagination",
        clickable: true,
      },

      // breakpoints: {
      //   320: {
      //     slidesPerView: 2,
      //     spaceBetween: 15,
      //   },
      //   600: {
      //     slidesPerView: 3,
      //     spaceBetween: 15,
      //   },
      //   768: {
      //     slidesPerView: 4,
      //     spaceBetween: 20,
      //   },
      //   992: {

      //   },
      // },
    })
  }
  if (document.querySelector(".wagons__slider")) {
    new Swiper(".wagons__slider", {
      modules: [Autoplay, Pagination, Navigation],
      observer: true,
      observeParents: true,
      speed: 800,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 25,

      lazyPreloaderClass: "preloader",

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".wagons__pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".wagons__slider .button-prev",
        nextEl: ".wagons__slider .button-next",
      },
    })
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar")
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders()
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
})
