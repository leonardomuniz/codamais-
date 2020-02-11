
AOS.init();

$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 54)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

//navbar scrooll turn to black
$(document).ready(function(){
          
    $(window).scroll(function(){

      if($(window).scrollTop()>50){
        $('nav').addClass('black');
      }else{
        $('nav').removeClass('black');
      }

    });

});


// JS sidenav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});


const elemsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elemsBtns,{
    direction: "left",
    hoverEnabled: false
})


//JS PARALLAX
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});


//JS CAROUSEL 
// CAROUSEL
$(document).ready(function(){
  $('.carousel').carousel(
  {
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
    duration: 100,
  }
  );
});

autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

//PRÉ LOADER
window.addEventListener("load", function () {
  const loader = document.getElementsByClassName("loader");
  loader.classList.add(" hidden") ; // class "loader hidden"
});

window.addEventListener("load", function(event) {
  console.log("Todos os recursos terminaram o carregamento!");
});

//TOOLTIP
$(document).ready(function(){
  $('.tooltipped').tooltip();
});