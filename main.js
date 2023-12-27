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
    const projectList = document.querySelector('.project-list');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const projectItems = document.querySelectorAll('.project-item');
  
    let currentIndex = 0;
    const itemsPerPage = 2;
  
    prevButton.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex -= itemsPerPage;
        updateCarousel();
      }
    });
  
    nextButton.addEventListener('click', function () {
      const totalItems = projectItems.length;
      if (currentIndex + itemsPerPage < totalItems) {
        currentIndex += itemsPerPage;
        updateCarousel();
      }
    });
  
    function updateCarousel() {
      const translateValue = -currentIndex * (100 / itemsPerPage) + '%';
      projectList.style.transform = 'translateX(' + translateValue + ')';
    }
  
    projectItems.forEach((project, index) => {
      project.addEventListener('mouseenter', function () {
        project.classList.add('active');
      });
  
      project.addEventListener('mouseleave', function () {
        project.classList.remove('active');
      });
  
      project.addEventListener('click', function () {
        // Adicione aqui a lógica para mostrar título e descrição
        const title = project.querySelector('.project-title').textContent;
        const description = project.querySelector('.project-description').textContent;
  
        // Exemplo: exiba os dados no console
        console.log('Title:', title);
        console.log('Description:', description);
      });
    });
  });
  