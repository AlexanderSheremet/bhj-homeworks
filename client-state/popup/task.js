const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', ()=>{
  if(!document.cookie){
    modal.classList.add('modal_active')
  } else {return}
})

modalClose.addEventListener('click',()=>{
  modal.classList.remove('modal_active')
  document.cookie = 'flag=true'
})
