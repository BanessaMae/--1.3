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