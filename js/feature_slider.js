var options = {
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 2000,
    },
    loop: true,
    speed: 1000,
    watchSlidesProgress: true,
    mousewheelControl: true,
    mousewheel: true,
    allowSlidePrev: true,
    slidesPerView:1,
    parallax: true,
    
  };


const swiper = new Swiper('.swiper', options);
