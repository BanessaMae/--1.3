
import '../scss/style.scss'

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
      //  mousewheel:{
      //    sensitivity:1,
      //    eventsTarget: ".image-slider"
      //  },
       //Кол-во слайдов для показа
       slidesPerView:1,
       //Отступ между слайдами
      //  spaceBetween:16,
       //бесконечная прокрутка 
       //loop:true,
       slidesPerView: "auto",
           centeredSlides: false,
     
     });
   




   //всплывающее меню 

    document.addEventListener('DOMContentLoaded', () => {
  
     // Кнопка по которой происходит клик
     let callBackButton = document.getElementById('checkbox_toggle');
    
     // Модальное окно, которое необходимо открыть
     let modal1 = document.getElementById('sidePanel');
    
     // Кнопка "закрыть" внутри модального окна
     let closeButton = modal1.getElementsByClassName('side-button-exit')[0];
 
     let closeModal = document.getElementsByClassName('closeModal')[0];
 
    
     callBackButton.onclick = function () {
       modal1.classList.add('side__panel__active');
       scrollController.disabledScroll();
       closeModal.classList.add('closeModal__active');
     }
    
     closeButton.onclick = function () {
       modal1.classList.remove('side__panel__active');
       scrollController.enabledScroll();
       closeModal.classList.remove('closeModal__active');
     }
 
     closeModal.onclick = function(){
       modal1.classList.remove('side__panel__active');
       scrollController.enabledScroll();
       closeModal.classList.remove('closeModal__active');
     }
   });





//всплывающее меню Заказать звонок

document.addEventListener('DOMContentLoaded', () => {
  
  // Кнопка по которой происходит клик
  let callBack = document.getElementById('buttonCirlce__phone');
  let callBack2 =  document.getElementById('buttonCirlce__phone2');
 
  // Модальное окно, которое необходимо открыть
  let modal2 = document.getElementById('callback');
  let modal1 = document.getElementById('sidePanel');
 
  // Кнопка "закрыть" внутри модального окна
  let closeCallBack = modal2.getElementsByClassName('callback-exit')[0];

  let closeModalCall = document.getElementsByClassName('closeModalCall')[0];
  let closeModal = document.getElementsByClassName('closeModal')[0];
  let btnCloseModal = document.getElementsByClassName('callback-exit__CloseModalCall')[0];
 

 
    callBack.onclick = function () {
    modal2.classList.add('callback__active');
    scrollController.disabledScroll();
    closeModalCall.classList.add('closeModalCall__active');
    btnCloseModal.classList.add('callback-exit__CloseModalCall--active');
  }

  callBack2.onclick = function () {
    modal1.classList.remove('side__panel__active');
    modal2.classList.add('callback__active');
    scrollController.disabledScroll();
    closeModalCall.classList.add('closeModalCall__active');
    closeModal.classList.remove('closeModal__active');
    btnCloseModal.classList.add('callback-exit__CloseModalCall--active');

  }
 
  closeCallBack.onclick = function () {
    modal2.classList.remove('callback__active');
    scrollController.enabledScroll();
    closeModalCall.classList.remove('closeModalCall__active');
    btnCloseModal.classList.remove('callback-exit__CloseModalCall--active');
  }

  closeModalCall.onclick = function(){
    modal2.classList.remove('callback__active');
    scrollController.enabledScroll();
    closeModalCall.classList.remove('closeModalCall__active');
    btnCloseModal.classList.remove('callback-exit__CloseModalCall--active');
  }
});




//всплывающее меню Обратная связь

document.addEventListener('DOMContentLoaded', () => {
  
  // Кнопка по которой происходит клик
  let feedback = document.getElementById('buttonCirlce__message');
  let feedback2 =  document.getElementById('buttonCirlce__message2');
 
  // Модальное окно, которое необходимо открыть
  let modal3 = document.getElementById('feedback');
  let modal1 = document.getElementById('sidePanel');
 
  // Кнопка "закрыть" внутри модального окна
  let closeSendBack = modal3.getElementsByClassName('feedback-exit')[0];

  let closeModalSend = document.getElementsByClassName('closeModalSend')[0];
  let closeModal = document.getElementsByClassName('closeModal')[0];
  let btnCloseModal = document.getElementsByClassName('feedback-exit__CloseModalSend')[0];
 

 
    feedback.onclick = function () {
    modal3.classList.add('feedback__active');
    scrollController.disabledScroll();
    closeModalSend.classList.add('closeModalSend__active');
    btnCloseModal.classList.add('feedback-exit__CloseModalSend--active');
  }

  feedback2.onclick = function () {
    modal1.classList.remove('side__panel__active');
    modal3.classList.add('feedback__active');
    scrollController.disabledScroll();
    closeModalSend.classList.add('closeModalSend__active');
    closeModal.classList.remove('closeModal__active');
    btnCloseModal.classList.add('feedback-exit__CloseModalSend--active');

  }
 
  closeSendBack.onclick = function () {
    modal3.classList.remove('feedback__active');
    scrollController.enabledScroll();
    closeModalSend.classList.remove('closeModalSend__active');
    btnCloseModal.classList.remove('feedback-exit__CloseModalSend--active');
  }

  closeModalSend.onclick = function(){
    modal3.classList.remove('feedback__active');
    scrollController.enabledScroll();
    closeModalSend.classList.remove('closeModalSend__active');
    btnCloseModal.classList.remove('feedback-exit__CloseModalSend--active');
  }
});







 
   //скролл боди
 
 const scrollController = {
     scrollPosition: 0,
     disabledScroll() {
       scrollController.scrollPosition = window.scrollY;
       document.body.style.cssText = `
         overflow: hidden;
         position:fixed;
         top: -${scrollController.scrollPosition}px;
         left: 0;
         height: 100vh;
         width: 100vw;
         padding-right: ${window.innerWidth - document.body.offsetWidth}px
       `;
       // document.documentElement.style.side__panel = 'unset';
     },
     enabledScroll() {
       document.body.style.cssText = '';
       window.scroll({top: scrollController.scrollPosition})
       document.documentElement.style.scrollBehavior = '';
     },
   }
  
  
 
   
 
 
   //показать все Ремонт различных видов техники
   

   let showMore = document.getElementById('show-more');
   showMore.addEventListener('click', seeMore);
   showMore.addEventListener('click', hide);


function seeMore() {
       let dots = document.getElementById("dots");
       let moreText = document.querySelectorAll(".hidden");
       let item1 = moreText[0];
       let item2 = moreText[1];
       let item3 = moreText[2];
       let item4 = moreText[3];
       let item5 = moreText[4];
    
       let btnText = document.getElementById("show-more");
       let img = document.getElementById("show-more-img");
       
   
       
       if (dots.style.display === "none") {
         dots.style.display = "flex";
         btnText.innerHTML = "Показать всё"; 
         item1.style.display = "none";
         item2.style.display = "none";
         item3.style.display = "none";
         item4.style.display = "none";
         item5.style.display = "none";
         img.style.transform = "rotate(0deg)";
         img.style.padding = "0 0 0 35px ";
       
   
       } else {
         dots.style.display = "none";
         btnText.innerHTML = "Скрыть"; 
         item1.style.display = "flex";
         item2.style.display = "flex";
         item3.style.display = "flex";
         item4.style.display = "flex";
         item5.style.display = "flex";
         img.style.transform = "rotate(180deg)";
         img.style.padding = "0 35px 0 0";
       }
     }
  
   
  function hide(){
       let dots = document.getElementById("dots");
       let moreText = document.querySelectorAll(".hidden");
       let item1 = moreText[0];
       let item2 = moreText[1];
       let item3 = moreText[2];
       let item4 = moreText[3];
       let item5 = moreText[4];
 
    
       let btnText = document.getElementById("show-more");
       let img = document.getElementById("show-more-img");
       
       if (window.innerWidth >= 1020) {
        
         item1.style.display = "flex";
         item2.style.display = "flex";
       
         
       } 
   }
 

  //  показать все Ремонт различных видов техники
   
  let showMore2 = document.getElementById('show-more2');
  showMore2.addEventListener('click', seeMore2);
  showMore2.addEventListener('click', hide2);
function seeMore2() {
       let dots2 = document.getElementById("dots2");
       let moreText2 = document.querySelectorAll(".hidden");
       let item1 = moreText2[5];
       let item2 = moreText2[6];
       let item3 = moreText2[7];
       let item4 = moreText2[8];
       let item5 = moreText2[9];
       let item6 = moreText2[10];
       let item7 = moreText2[11];
       let item8 = moreText2[12];
    
       let btnText2 = document.getElementById("show-more2");
       let img2 = document.getElementById("show-more-img2");
       
       
       if (dots2.style.display === "none") {
         dots2.style.display = "flex";
         btnText2.innerHTML = "Показать всё"; 
         item1.style.display = "none";
         item2.style.display = "none";
         item3.style.display = "none";
         item4.style.display = "none";
         item5.style.display = "none";
         item6.style.display = "none";
         item7.style.display = "none";
         item8.style.display = "none";
         img2.style.transform = "rotate(0deg)";
         img2.style.padding = "0 0 0 35px ";
       
   
       } else {
         dots2.style.display = "none";
         btnText2.innerHTML = "Скрыть"; 
         item1.style.display = "flex";
         item2.style.display = "flex";
         item3.style.display = "flex";
         item4.style.display = "flex";
         item5.style.display = "flex";
         item6.style.display = "flex";
         item7.style.display = "flex";
         item8.style.display = "flex";
         img2.style.transform = "rotate(180deg)";
         img2.style.padding = "0 35px 0 0";
       }
     }
  
   
  function hide2(){
       let dots2 = document.getElementById("dots2");
       let moreText2 = document.querySelectorAll(".hidden");
       let item1 = moreText2[5];
       let item2 = moreText2[6];
       let item3 = moreText2[7];
       let item4 = moreText2[8];
       let item5 = moreText2[9];
       let item6 = moreText2[10];
       let item7 = moreText2[11];
       let item8 = moreText2[12];
       let btnText2 = document.getElementById("show-more2");
       let img2 = document.getElementById("show-more-img2");
       
       if (window.innerWidth >= 1120) {
        
        item1.style.display = "flex";
      
       
         
       } 
   }