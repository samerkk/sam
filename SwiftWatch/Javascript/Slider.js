var slides = document.getElementsByClassName("slide");
var index = 0;


function goLeft() {
if(index == 0) index = slides.length - 1 ;
else index--;

slides[0].style.marginLeft = "-" + index * 600 + "px";
} 



function goRight() {
if(index == slides.length -1) index = 0 ;
else index++;

slides[0].style.marginLeft = "-" + index * 600 + "px";
}


setInterval(goRight,5000); //1000= 1s