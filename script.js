document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselExampleControls");

  const carouselItems = carousel.querySelectorAll(".carousel-item");

  let currentItem = 0;

  const intervalo = 5000;

  function proximoItem() {
    carouselItems[currentItem].classList.remove("active");

    currentItem++;

    if (currentItem >= carouselItems.length) {
      currentItem = 0;
    }

    carouselItems[currentItem].classList.add("active");
  }

  setInterval(proximoItem, intervalo);
});

/*SCROLL*/

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserver.observe(element));

/*FOOTER*/

document.addEventListener("DOMContentLoaded", function () {
  const anoAtual = new Date().getFullYear();
  const spanAno = document.getElementById("ano-atual");
  spanAno.textContent = anoAtual;
});
