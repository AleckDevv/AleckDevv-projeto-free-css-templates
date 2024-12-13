const slides = document.querySelectorAll(".heroi");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

// Função para mostrar o slide atual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

// Troca automática de slides
function startAutoSlide() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 1500); // Troca a cada 5 segundos
}

// Clique nos dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Inicializa o primeiro slide e o loop automático
showSlide(currentSlide);
startAutoSlide();