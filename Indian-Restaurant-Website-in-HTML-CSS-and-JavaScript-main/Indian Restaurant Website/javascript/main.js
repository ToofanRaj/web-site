//Script for Slideshow on homepage
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




////////////////////

// Script for button on Home page //
 function mOver(obj) {
  obj.innerHTML = "Established 2004"
  
}

 function mOut(obj) {
  obj.innerHTML = "Welcome to Family restaurant"
  
}


/////////////////////

// Script for logo //
document.getElementById("logo").src="../img/spiceclub2";

////////////////////

// Script for date on Homepage//
var d = new Date();
document.getElementById("date").innerHTML = d.toString();


////////////////////
