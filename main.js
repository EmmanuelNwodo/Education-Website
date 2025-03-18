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