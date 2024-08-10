// Inicializa o índice do slide como 1
let slideIndex = 1;
showSlides(slideIndex); // Exibe o slide inicial

// Função para avançar ou retroceder slides
function plusSlides(n) {
  showSlides((slideIndex += n)); // Atualiza o índice do slide e exibe o slide correspondente
}

// Função para definir o slide atual baseado no número
function currentSlide(n) {
  showSlides((slideIndex = n)); // Atualiza o índice do slide para o especificado e exibe o slide correspondente
}

// Função para mostrar o slide baseado no índice fornecido
function showSlides(n) {
  let i;
  // Obtém todos os elementos com a classe 'mySlides'
  let slides = document.getElementsByClassName("mySlides");
  // Obtém todos os elementos com a classe 'dot'
  let dots = document.getElementsByClassName("dot");

  // Se o índice do slide é maior que o número de slides, retorna ao primeiro slide
  if (n > slides.length) {
    slideIndex = 1;
  }
  // Se o índice do slide é menor que 1, vai para o último slide
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Remove a classe 'active' de todos os pontos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostra o slide atual
  slides[slideIndex - 1].style.display = "block";
  // Adiciona a classe 'active' ao ponto correspondente ao slide atual
  dots[slideIndex - 1].className += " active";
}
