const menuIcon = document.getElementById('menuIcon');
const mainSideBar = document.getElementById('mainSideBar');
const closeMenuIcon = document.getElementById('closeMenuIcon');
const slides = document.querySelectorAll('.slide');
const setaEsquerda = document.getElementById('setaEsquerda');
const setaDireita = document.getElementById('setaDireita');
let contador = 0;
let boolean = true;
let intervaloSlider;

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

// função de slider automático 
function sliderMain(){
  intervaloSlider = setInterval(function(){
      contador++
      slides.forEach(slide =>{
        slide.style.right = `${contador}px`
      })
      if (contador > 1000){
        boolean = true
        while (boolean){
          contador--
          slides.forEach(slide =>{
            slide.style.right = `${contador}px`
          })
          if (contador == -150){
            boolean = false
          }
        }
      }
  }, 20)
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