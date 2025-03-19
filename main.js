// change nav style on scroll//

window.addEventListener('scroll', () =>{
 const nav = document.querySelector('nav')
 if(window.scrollY > 0){
  nav.classList.add('window-scroll')
 }
 else{
  nav.classList.remove('window-scroll')
}
});


//open the faq answers onclick//

const faqs =document.querySelectorAll('.faq');

faqs.forEach(faq =>{
faq.addEventListener('click', () => {
  faq.classList.toggle('open');

  // change icon//
  const icon =faq.querySelector('.faq_icon i')
  if(icon.className=== "fa-solid fa-plus"){
    icon.className = "fa-solid fa-minus"
  } else {
    icon.className ="fa-solid fa-plus"
  }
});
});


//show/hide nav menu//
if(window.width <= 1024){

const menu = document.querySelector('.nav_menu')

const openMenuBtn = document.querySelector('#open-menu-btn')
const closeMenuBtn = document.querySelector('#close-menu-btn')

openMenuBtn.addEventListener('click', () =>{
  menu.style.display = "flex"
  closeMenuBtn.style.display= "inline-block"
  openMenuBtn.style.display = "none"
})

closeMenuBtn.addEventListener('click', () =>{
  menu.style.display ="none"
  openMenuBtn.style.display ="inline-block"
  closeMenuBtn.style.display ="none"
})};