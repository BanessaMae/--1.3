// / function showMore () {
  //     let dots = document.querySelector(".dots");
  //     let more = document.querySelector(".more");
  //     let btn = document.querySelector(".show-more");
  
  
  //     if(dots.style.display === "none"){
  //         dots.style.display = "block";
  //         btn.innerHTML = "Показать всё";
  //         more.style.display = "none";
  //         } else {
  //             dots.style.display = "none";
  //             btn.innerHTML = "Скрыть";
  //             more.style.display = "block";
  //         } 
  // }

  // let checkboxBtn = document.getElementsByClassName('.checkbox')
  // let menuOpen = document.querySelector('body')

  // document.getElementById('checkbox_toggle').onclick = function() {
  // document.querySelector('body').classList.toggle('.menu-opened');
  // }



  // const scrollController = {
  //   scrollPosition: 0,
  //   disabledScroll() {
  //     scrollController.scrollPosition = window.scrollY;
  //     document.body.style.cssText = `
  //       overflow: hidden;
  //       position:fixed;
  //       top: -${scrollController.scrollPosition}px;
  //       left: 0;
  //       height: 100vh;
  //       width: 100vw;
  //       padding-right: ${window.innerWidth - document.body.offsetWidth}px
  //     `;
  //     document.documentElement.style.side__panel = 'unset';
  //   },
  //   enabledScroll() {
  //     document.body.style.cssText = '';
  //     window.scroll({top: scrollController.scrollPosition})
  //     document.documentElement.style.scrollBehavior = '';
  //   },
  // }
 

  //всплывающее меню 
  export let navMenu = () => {
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
}


 

  //скролл боди

  export const scrollController = {
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
 
 

  


  //показать все
  
export function seeMore() {
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
      
      if (window.innerWidth >= 1120) {
       
        item1.style.display = "flex";
        item2.style.display = "flex";
        
      } 
  }
  
 
   
  let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];
  console.log(arr.filter(inRange(3, 6)));
  
const inRange = (a, b) => {
  //code here
  if(a<arr.length<b){
      return true;
  } else if(a > b){
      return false;
  }
 return inRange;
};

const inArray = arr => {
  //code here
};

const notInArray = arr =>  {
  //code here
};
