

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
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("show-more");
    let img = document.getElementById("show-more-img");

  
    if (dots.style.display === "none") {
      dots.style.display = "block";
      btnText.innerHTML = "Показать всё"; 
      moreText.style.display = "none";
      img.style.transform = "rotate(0deg)";
      img.style.padding = "0 0 0 35px ";
    

    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Скрыть"; 
      moreText.style.display = "grid";
      img.style.transform = "rotate(180deg)";
      img.style.padding = "0 35px 0 0";
    }
  }







