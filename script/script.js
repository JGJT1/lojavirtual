const menuIcon = document.getElementById('menuIcon');
const mainSideBar = document.getElementById('mainSideBar');
const closeMenuIcon = document.getElementById('closeMenuIcon');
const slides = document.querySelectorAll('.slide');
const setaEsquerda = document.getElementById('setaEsquerda');
const setaDireita = document.getElementById('setaDireita');
const carrinho = document.getElementById('carrinho');
const carrinhoSideBar = document.getElementById('carrinhoSideBar');
const closeMenuCarrinhoIcon = document.getElementById('closeMenuCarrinhoIcon');
const main = document.getElementById('main');
let contador = 0;
let boolean = true;
let intervaloSlider;

main.addEventListener('click', function(){
  carrinhoSideBar.style.width = '0'
  mainSideBar.style.width = '0'
})

carrinho.addEventListener('click', function(){
  carrinhoSideBar.style.width = '250px'
})
closeMenuCarrinhoIcon.addEventListener('click', function(){
  carrinhoSideBar.style.width = '0'
})
// clique do burguer para ativar a side bar principal
menuIcon.addEventListener('click', function(){
  mainSideBar.style.width = '250px'
})

// fechar todas as sides bars
closeMenuIcon.addEventListener('click', function(){
  mainSideBar.style.width = '0'
})


setaDireita.addEventListener('click', function(){
  contador += 200;
  slides.forEach(slide =>{
    slide.style.right = `${contador}px`
  })
})
setaEsquerda.addEventListener('click', function(){
  if (contador >= 100 ){
    contador -= 200;
    slides.forEach(slide => {
      slide.style.right = `${contador}px`
    })
  }
})


window.addEventListener('load', function() {
  if (window.innerWidth >= 1024) {
    // Se a largura da tela for maior que 1024px
    limiteContador = 800; // Altere o limite do contador para 500
  } else {
    // Caso contrário, a largura da tela é menor ou igual a 1024px
    limiteContador = 1000; // Mantenha o limite do contador como 1000
  }
});

// função de slider automático 
function sliderMain(){
  intervaloSlider = setInterval(function(){
      contador++;
      slides.forEach(slide =>{
        slide.style.right = `${contador}px`;
      });
      if (contador > limiteContador){
        boolean = true;
        while (boolean){
          contador--;
          slides.forEach(slide =>{
            slide.style.right = `${contador}px`;
          });
          if (contador == -100){
            boolean = false;
          }
        }
      }
  }, 20);
}
function pausarSlider() {
  clearInterval(intervaloSlider);
}

// Função para reiniciar o slider
function reiniciarSlider() {
  clearInterval(intervaloSlider);
  sliderMain()
}

// Adiciona ouvintes de eventos para os eventos 'mouseover' e 'mouseleave' nos slides
slides.forEach(slide => {
  slide.addEventListener('mouseenter', pausarSlider);
  slide.addEventListener('mouseleave', reiniciarSlider);
});