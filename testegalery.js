document.addEventListener('DOMContentLoaded', () => {
  const imgPrincipal = document.querySelector(".imgPrincipal img");
  const overlay = document.querySelector(".overlay");
  const overlayContent = overlay.querySelector(".overlay-content");
  const thumbnails = document.querySelectorAll('.thumbnails img');

  const images = [
    "assets/newtaref2.PNG",
    "assets/tempo2.png",
    "assets/ecomerce2024.png"
  ];

  const infos = [
    {
      title: "Projeto Lista de tarefas",
      description: "adicionar, remover, marcar como completo.",
      buttons: [
        { text: "Site", link: "https://arthurmax9.github.io/produtive/" },
        { text: "Github", link: "https://github.com/Arthurmax9/produtive" }
      ]
    },
    {
      title: "Previsão do tempo",
      description: "Site de previsão de tempo com uso de API em tempo real",
      buttons: [
        { text: "Site", link: "https://arthurmax9.github.io/tempojs/" },
        { text: "Github", link: "https://github.com/Arthurmax9/tempojs" }
      ]
    },
    {
      title: "E-commerce",
      description: "Site com todas funcionalidades Front-End.",
      buttons: [
        { text: "Site", link: "https://arthurmax9.github.io/newecmerce2024/" },
        { text: "Github", link: "https://github.com/Arthurmax9/newecmerce2024"  }
      ]
    }
  ];

  function renderInitialImage() {
    imgPrincipal.src = images[0];
    imgPrincipal.classList.add('selected');

    const currentInfo = infos[0];
    overlayContent.querySelector("h3").textContent = currentInfo.title;
    overlayContent.querySelector("p").textContent = currentInfo.description;
    
    const overlayButtons = overlayContent.querySelectorAll(".overlay-button");
    overlayButtons.forEach((button, i) => {
      button.textContent = currentInfo.buttons[i].text;
      button.href = currentInfo.buttons[i].link;
      button.addEventListener('click', () => {
        window.open(currentInfo.buttons[i].link, "_blank");
      });
    });
  }

  renderInitialImage();

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      imgPrincipal.src = thumbnail.dataset.full;
      imgPrincipal.classList.add('selected');

      const currentInfo = infos[index];
      overlayContent.querySelector("h3").textContent = currentInfo.title;
      overlayContent.querySelector("p").textContent = currentInfo.description;

      const overlayButtons = overlayContent.querySelectorAll(".overlay-button");
      overlayButtons.forEach((button, i) => {
        button.textContent = currentInfo.buttons[i].text;
        button.href = currentInfo.buttons[i].link;
        button.addEventListener('click', () => {
          window.open(currentInfo.buttons[i].link, "_blank");
        });
      });

      overlay.style.opacity = 0;
    });
  });

  const galeria = document.querySelector('.imgPrincipal');

  galeria.addEventListener('mouseenter', () => {
    overlay.style.opacity = 1;
  });

  galeria.addEventListener('mouseleave', () => {
    overlay.style.opacity = 0;
  });

  galeria.addEventListener('click', () => {
    overlay.style.opacity = overlay.style.opacity === '1' ? 0 : 1;
  });
});
