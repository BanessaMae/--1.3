
// function myFunction() {
//     let dots = document.getElementById("dots");
//     let moreText = document.querySelectorAll(".hidden");
//     let item1 = moreText[0];
//     let item2 = moreText[1];
//     let item3 = moreText[2];
//     let item4 = moreText[3];
//     let item5 = moreText[4];
 
//     let btnText = document.getElementById("show-more");
//     let img = document.getElementById("show-more-img");
    

    
//     if (dots.style.display === "none") {
//       dots.style.display = "flex";
//       btnText.innerHTML = "Показать всё"; 
//       item1.style.display = "none";
//       item2.style.display = "none";
//       item3.style.display = "none";
//       item4.style.display = "none";
//       item5.style.display = "none";
//       img.style.transform = "rotate(0deg)";
//       img.style.padding = "0 0 0 35px ";
    

//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Скрыть"; 
//       item1.style.display = "flex";
//       item2.style.display = "flex";
//       item3.style.display = "flex";
//       item4.style.display = "flex";
//       item5.style.display = "flex";
//       img.style.transform = "rotate(180deg)";
//       img.style.padding = "0 35px 0 0";
//     }
//   }

//   function bigSize(){
//     let dots = document.getElementById("dots");
//     let moreText = document.querySelectorAll(".hidden");
//     let item1 = moreText[0];
//     let item2 = moreText[1];
//     let item3 = moreText[2];
//     let item4 = moreText[3];
//     let item5 = moreText[4];
 
//     let btnText = document.getElementById("show-more");
//     let img = document.getElementById("show-more-img");
    
//     if (window.innerWidth >= 1120) {
     
//       item1.style.display = "flex";
//       item2.style.display = "flex";
      
//     } 
// }

 
 // При нажатии на "Показать еще", появляются все card
const btn = document.querySelector('.btn');
const cards = Array.from(document.querySelectorAll('.brands__card'));
// const btn2 = Array.from(document.querySelectorAll('.btn'));


window.addEventListener('resize', event => {
    if (event.target.window.innerWidth > 767) response1();
    if (event.target.window.innerWidth <= 1119 && event.target.window.innerWidth > 766) response2();
    if (event.target.window.innerWidth <= 659) response3();
    // if (event.target.window.innerWidth > 770) response4();
})

function openCatalog() {
    btn.addEventListener('click', () => {
        cards.forEach(item => item.classList.remove('hidden'));
        // btn.classList.add('hidden'); //добавляем класс у кнопки
        btn.textContent = 'Скрыть';
    })
    
    }


function response1() {
    if (window.innerWidth > 767) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            //удаляем класс если меньше индекса
            if (index <= 7) {
                item.classList.remove('hidden')
            // удаляем класс  у кнопки , если карточек больше индекса
            } else if (index > 7) {
                btn.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response1()


function response2() {
    if (window.innerWidth <= 1119 && window.innerWidth > 766) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 5) {
                item.classList.remove('hidden')
            } else if (index > 5) {
                btn.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response2()


// function myFunction() {
//   const x = document.querySelector('.brands__card').style;
//   if (x.style.display === "none") {
//     item.style.display = "flex";
//   } else {
//     x.style.display = "none";
//   }
// }

// function response3() {
//     if (window.innerWidth <= 659) {

//         cards.forEach((item, index) => {
//             item.classList.add('hidden')
//             if (index <= 2) {
//                 item.classList.remove('hidden')
//             } else if (index > 2) {
//                 btn.classList.remove('hidden');
//             }
//             openCatalog()
//         })
//     }
// }
// response3()




// function closeCatalog() {
//   btn.addEventListener('click', () => {
//     cards.forEach(item <= item.classList.add('hidden'));
//     btn.textContent = 'Показать все';
//   }
//   )}


//   function response4() {
//     if (btn2.includes('Скрыть') && window.innerWidth > 770){
//         cards.forEach((item, index) => {
//             item.classList.remove('hidden')
//             if (index < 5) {
//                 item.classList.add('hidden')
//             } 
//             closeCatalog()
//         })
//     }
// }
// response4()

// function close() {
//   let style = getComputedStyle(cards); // получаем его стили
//   btn.addEventListener('click', () => {
//   if (style.display === 'none') {
//     item.classList.remove('hidden')
//     } 
//     close()
//  })
//   }
 
