'use strict';

window.addEventListener('DOMContentLoaded', () => {
  fix100vh();
  findHeight();
  animation();
  window.addEventListener('resize', () => {
    fix100vh();
    findHeight();
  })
})

let promo = document.querySelector('.promo');


function fix100vh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function findHeight() {
  let fullHeight = document.documentElement.clientHeight,
    fullWidth = document.documentElement.clientWidth;
  if (fullWidth > 768 && fullWidth <= 1024) {
    if (fullHeight < 730) {
      promo.classList.add('no-full');
    } else {
      if (promo.classList.contains('no-full')) {
        promo.classList.remove('no-full');
      }
    }
  } else if (fullWidth > 576 && fullWidth <= 768) {
    if (fullHeight < 700) {
      promo.classList.add('no-full');
    } else {
      if (promo.classList.contains('no-full')) {
        promo.classList.remove('no-full');
      }
    }
  } else if (fullWidth <= 576) {
    if (fullHeight < 700) {
      promo.classList.add('no-full');
    } else {
      if (promo.classList.contains('no-full')) {
        promo.classList.remove('no-full');
      }
    }
  }
}

function animation() {
  gsap.registerPlugin(ScrollTrigger);

  //Таймлайн для заголовка страницы(анимация)
  const tlPromo = gsap.timeline({})
  tlPromo.to('.promo__title span:first-child', {
    duration: 1.2,
    x: 0,
    ease: "back.out(1.1)"
  })
  .to('.promo__title span:last-child', {
    duration: 1.2,
    x: 0,
    ease: "back.out(1.1)",
  }, '<');

  //Анимация для картинок promo и блока header
  const tlImages = gsap.timeline({
    scrollTrigger: {
      trigger: '.promo',
      start: 'top top',
      end: '+=50%',
      scrub: 1,
      pin: true
    }
  })
  tlImages.to('.promo__bottom', {
    opacity:1,
    y: 0
    })
  .fromTo('.promo__bottom img', {y: -40}, {
  y: 40,
  }, '<')

  const tlLines = gsap.timeline({
    scrollTrigger: {
      trigger: '.choose__wrap',
      start: 'top bottom', //начинается анимация когда верх блока choose__wrap совпадет с низом экрана
      end: 'bottom top', //закончится когда низ блока choose__wrap совпадет с верхом экрана
      scrub: true
    }
  })
  tlLines.to('.choose__wrap .top', {
    xPercent: -60
  })
  .to('.choose__wrap .bottom', {
    xPercent: 20
  }, '<')
}