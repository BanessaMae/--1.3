export let slide = () => {
 new Swiper ('.image-slider',{
    pagination:{
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    //слайд клавиатурой
    keyboard:{
      enabled:true,
      onlyInViewport:true,
      pageUpDown:true,
    },
    //слайд мышкой
    mousewheel:{
      sensitivity:1,
      eventsTarget: ".image-slider"
    },
    //Кол-во слайдов для показа
    slidesPerView:1,
    //Отступ между слайдами
    spaceBetween:16,
    //бесконечная прокрутка 
    //loop:true,
    slidesPerView: "auto",
        centeredSlides: false,
  
  });
}

  
  // const showMore = document.querySelector(".show-more");
  // const productsLength = document.querySelectorAll (".brands__card").length;
  // let items = 6;
  
  // showMore.addEventListener('click', ()=>{
  //   items += 6;
  //   const array = Array.from(document.querySelector(".brands__wrapper").children);
  //   const visItems = array.slice(0,items);
  
  //   visItems.forEach(el => el.classList.add('is-visible'));
  
   
  // if(visItems.length === productsLength){
  //   showMore.computedStyleMap.display = "none";
  // }
  // });
  