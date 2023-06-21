

// function showMore () {
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

function myFunction() {
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

  function bigSize(){
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

 

// const btn = document.querySelector("#show-more");
// const content = document.querySelectorAll(".hidden");

// btn.addEventListener("click", btnClick);

// function btnClick() {
//     console.log(content.classList);

//     if (content.classList.contains("hidden")) {
//         btn.textContent = "Скрыть элемент";
//     } else {
//         btn.textContent = "Показать элемент";
//     }

//     content.classList.toggle("hidden");
// }