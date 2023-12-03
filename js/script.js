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

}

let mediaAnimation = gsap.matchMedia();

mediaAnimation.add("(min-width: 1025px)", () => {
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
  });
  tlImages.to('.promo__bottom', {
    opacity: 1,
    y: 0
  })
    .fromTo('.promo__bottom img', { y: -40 }, {
      y: 40,
    }, '<');

  //Анимация для секции choose (бегущая строка)
  const tlLines = gsap.timeline({
    scrollTrigger: {
      trigger: '.choose__wrap',
      start: 'top bottom', //начинается анимация когда верх блока choose__wrap совпадет с низом экрана
      end: 'bottom top', //закончится когда низ блока choose__wrap совпадет с верхом экрана
      scrub: true
    }
  });
  tlLines.to('.choose__wrap .top', {
    xPercent: -60
  })
    .to('.choose__wrap .bottom', {
      xPercent: 20
    }, '<');

  //Анимация карточек rates__card 
  gsap.from('.rates__card', {
    stagger: 0.3,
    opacity: 0,
    yPercent: 100,
    scrollTrigger: {
      trigger: '.rates',
      start: 'top 10%', //20% вниз от края экрана
      toggleActions: 'play none none reverse'
    }
  })

  //Анимация секции plus, горизонтальная прокрутка блоков
  const sections = gsap.utils.toArray('.plus__block'); //определяем количество блоков с классом plus__block

  gsap.to(sections, { //к каждому блоку с классом plus__block задаем след.анимацию
    xPercent: -100 * (sections.length - 1), //сдвигаем блоки на 100% минус 1 блок
    delay: 0.5, //чтобы горизонтальное перемещение блоков началось с задержкой
    scrollTrigger: {
      trigger: '.plus',
      start: 'top top',
      end: `+=${sections.length * 1000}`,// количество пикселей, которое будем скролится горизонтально(для нормальной скорости скролла)
      pin: true,
      scrub: true,
      snap: 1 / (sections.length - 1) //помогает доезжать секции самостоятельно
    }
  })

  //Анимация для цвета секции point
  const tlPoint = gsap.timeline({
    scrollTrigger: {
      trigger: '.point',
      start: 'top center',
      end: 'bottom bottom',
      toggleActions: 'play reverse play reverse'      
    }
  })
  tlPoint.to('body', {  //body для плавной смены цвета секции point
    backgroundColor: '#000',
  })
    .to('.plus-block__text', {
      color: '#fff',
    }, '<')
    .to('.plus-block__title span:last-child', {
      color: '#fff',
    }, '<')
    .to('.point__title', {
      color: '#fff',
    }, '<')
    .to('.point__descr', {
      color: '#fff',
    }, '<')

  //Анимация для фото секции point
  const tlImg = gsap.timeline({
    scrollTrigger: {
      trigger: '.point__wrapper',
      start: 'top top',
      pin: true,
      scrub: 1
    }
  })
  tlImg.to('.point__img:first-child img', {
    scale: 1
  })
    .to('.point__img:last-child img', {
      scale: 0
    }, '<')

  //Анимация с footer__point
  gsap.to('.footer__point', {
    y: 0,
    scrollTrigger: {
      trigger: '.main',
      start: 'top top',
      end: 'bottom 70%',
      scrub: true
    }
  })

  const tlFooter = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 70%',
      end: 'bottom bottom',
      scrub: 1
    }
  });
  tlFooter.to('.footer__point', {
    scale: 1
  })
    .to('.footer__point svg path', {
      fill: '#FF0027',
      opacity: 1
    }, '<')
});

mediaAnimation.add("(min-width: 577px) and (max-width: 1024px)", () => {
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
      scrub: 1
    }
  });
  tlImages.to('.promo__bottom', {
    opacity: 1,
    y: 0
  })
    .fromTo('.promo__bottom img', { y: -40 }, {
      y: 40,
    }, '<');

  //Анимация для секции choose (бегущая строка)
  const tlLines = gsap.timeline({
    scrollTrigger: {
      trigger: '.choose__wrap',
      start: 'top bottom', //начинается анимация когда верх блока choose__wrap совпадет с низом экрана
      end: 'bottom top', //закончится когда низ блока choose__wrap совпадет с верхом экрана
      scrub: true
    }
  });
  tlLines.to('.choose__wrap .top', {
    xPercent: -60
  })
    .to('.choose__wrap .bottom', {
      xPercent: 20
    }, '<');

  //Анимация карточек rates__card 
  gsap.from('.rates__wrap', {
    yPercent: 50,
    scrollTrigger: {
      trigger: '.rates',
      start: 'top 80%', //20% вниз от края экрана
      end: 'bottom bottom',
      scrub: true
    }
  })


  //Анимация для цвета секции point
  const tlPoint = gsap.timeline({
    scrollTrigger: {
      trigger: '.point',
      start: 'top center',
      end: '+=400',
      toggleActions: 'play reverse play reverse'      
    }
  })
  tlPoint.to('body', {  //body для плавной смены цвета секции point
    backgroundColor: '#000',
  })
    .to('.plus-block__text', {
      color: '#fff',
    }, '<')
    .to('.plus-block__title span:last-child', {
      color: '#fff',
    }, '<')
    .to('.point__title', {
      color: '#fff',
    }, '<')
    .to('.point__descr', {
      color: '#fff',
    }, '<')

  //Анимация для фото секции point
  const tlImg = gsap.timeline({
    scrollTrigger: {
      trigger: '.point__wrapper',
      start: 'top center',
      end: 'bottom top',
      scrub: 1
    }
  })
  tlImg.to('.point__img:first-child img', {
    scale: 1
  })
    .to('.point__img:last-child img', {
      scale: 0
    }, '<')

  //Анимация с footer__point
  gsap.to('.footer__point', {
    y: 0,
    scrollTrigger: {
      trigger: '.main',
      start: 'top top',
      end: 'bottom 70%',
      scrub: true
    }
  })

  const tlFooter = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 70%',
      end: 'bottom bottom',
      scrub: 1
    }
  });
  tlFooter.to('.footer__point', {
    scale: 1
  })
    .to('.footer__point svg path', {
      fill: '#FF0027',
      opacity: 1
    }, '<')
});

mediaAnimation.add("(max-width: 576px)", () => {
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
      scrub: 1
    }
  });
  tlImages.to('.promo__bottom', {
    opacity: 1,
    y: 0
  })
    .fromTo('.promo__bottom img', { y: -40 }, {
      y: 40,
    }, '<');

  //Анимация для секции choose (бегущая строка)
  const tlLines = gsap.timeline({
    scrollTrigger: {
      trigger: '.choose__wrap',
      start: 'top bottom', //начинается анимация когда верх блока choose__wrap совпадет с низом экрана
      end: 'bottom top', //закончится когда низ блока choose__wrap совпадет с верхом экрана
      scrub: true
    }
  });
  tlLines.to('.choose__wrap .top', {
    xPercent: -60
  })
    .to('.choose__wrap .bottom', {
      xPercent: 20
    }, '<');

  //Анимация карточек rates__card 
  gsap.from('.rates__wrap', {
    yPercent: 50,
    scrollTrigger: {
      trigger: '.rates',
      start: 'top 80%', //20% вниз от края экрана
      end: 'bottom bottom',
      scrub: true
    }
  })


  //Анимация для цвета секции point
  const tlPoint = gsap.timeline({
    scrollTrigger: {
      trigger: '.point',
      start: 'top center',
      end: '+=400',
      toggleActions: 'play reverse play reverse'      
    }
  })
  tlPoint.to('body', {  //body для плавной смены цвета секции point
    backgroundColor: '#000',
  })
    .to('.plus-block__text', {
      color: '#fff',
    }, '<')
    .to('.plus-block__title span:last-child', {
      color: '#fff',
    }, '<')
    .to('.point__title', {
      color: '#fff',
    }, '<')
    .to('.point__descr', {
      color: '#fff',
    }, '<')

  //Анимация для фото секции point
  const tlImg = gsap.timeline({
    scrollTrigger: {
      trigger: '.point__wrapper',
      start: 'top center',
      end: 'bottom top',
      scrub: 1
    }
  })
  tlImg.to('.point__img:first-child img', {
    scale: 1
  })
    .to('.point__img:last-child img', {
      scale: 0
    }, '<')

  //Анимация с footer__point
  gsap.to('.footer__point', {
    y: 0,
    scrollTrigger: {
      trigger: '.main',
      start: 'top top',
      end: 'bottom 70%',
      scrub: true
    }
  })

  const tlFooter = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 70%',
      end: 'bottom bottom',
      scrub: 1
    }
  });
  tlFooter.to('.footer__point', {
    scale: 1
  })
    .to('.footer__point svg path', {
      fill: '#FF0027',
      opacity: 1
    }, '<')
});