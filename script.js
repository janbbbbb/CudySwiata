let slideIndex = 1;
showSlides(slideIndex);

window.onload = function() {
  var slides = document.getElementsByClassName('mySlides');
  if (slides.length > 0) {
    slides[0].classList.add('active');
  }
};

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
    n = 1; // Reset n to 1
  }
  if (n < 1) {
    slideIndex = slides.length;
    n = slides.length; // Reset n to the number of slides
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n-1].style.display = "block";
  dots[n-1].className += " active";
}
