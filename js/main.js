$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        initialSlide: 2,
        dragable: false,
        centerMode: true,
        variableWidth: true
    });
});

$(document).ready(function(){
    $('.slider-2').slick({
        arrows: false,
        slidesToShow: 1,
        initialSlide: 2,
        dragable: false,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500
    });
});

/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(event) {
    if (!event.target.matches('.burger-1, .burger-2, .burger-3')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }