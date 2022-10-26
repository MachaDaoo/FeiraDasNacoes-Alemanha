//ANIMAÇÃO SCROLL

const target = document.querySelectorAll('[data-anime]')
const animacao = 'animacao'

function animeSite(){
  const windonTop = window.pageYOffset + ((window.innerHeight *3)/4)
  target.forEach((elemento)=>{
    if((windonTop)>elemento.offsetTop){
      elemento.classList.add(animacao)
    }else{
      elemento.classList.remove(animacao)
    }

    console.log(elemento.offsetTop)
  })
}

window.addEventListener('scroll', ()=>{
  animeSite()
})