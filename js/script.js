
// mudar imagem com jQuery
$(document).ready(function () {

  $('.color-choose input').on('click', function () {
    var headphonesColor = $(this).attr('data-image');

    $('.active').removeClass('active');
    $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
    $(this).addClass('active');
  });

});


// carrossel - henrique

let slideIndex = 1;
showSlides(slideIndex);

// antes/depois
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* Filtragem por nome do produto com Jquery - Felipe*/
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

/* Animação nas perguntas - Dany */


$(document).ready(function () {
  $('.accordion a').click(function () {
  $(this).toggleClass('active');
  $(this).next('.content').slideToggle(400);
  });
});

