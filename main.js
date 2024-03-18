// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');});
  
  // jQuery for page scrolling feature
  $(function() {$('body').on('click', 'a.scrollable', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
    event.preventDefault();
    });


    
  });
  
 
  document.addEventListener('DOMContentLoaded', function () {
    const figures = document.querySelectorAll('.gallery figure');

    figures.forEach((figure) => {
      figure.addEventListener('mouseover', function () {
        figure.classList.add('enlarged');
      });

      figure.addEventListener('mouseout', function () {
        figure.classList.remove('enlarged');
      });
    });
  });
