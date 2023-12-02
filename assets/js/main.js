const navbar = document.querySelector(`.navbar`);
const headerContentSpan = document.querySelector(`.header-content span`);
const loading = document.querySelector(`.loading`);
const scrollToTopBtn = document.querySelector(`.scroll-to-top`);
const aboutSection = document.querySelector(`.about`);
const navlinks = document.querySelectorAll(`.nav-link`);
navbar.style.transition=`0.4s background-color`;
window.addEventListener(`scroll`, function(){
    if(window.scrollY >= headerContentSpan.offsetTop){
        navbar.style.backgroundColor = "#fff";
    }
    else{
        navbar.style.backgroundColor = "transparent";
    }
    if(window.scrollY > aboutSection.offsetTop){
        scrollToTopBtn.classList.remove(`opacity-0`, `invisible`);
    } 
    else{
        scrollToTopBtn.classList.add(`opacity-0`, `invisible`);
    } 
});
window.addEventListener(`load`, function(){
    setTimeout(function(){
        loading.classList.add(`opacity-0`, `invisible`);
        document.body.style.overflow = `auto`;
    },2000)
});
scrollToTopBtn.addEventListener(`click`, function(){
    window.scroll({
        top:0,
        behavior:"smooth",
    })
});
for(let i=0; i<navlinks.length;i++){
    navlinks[i].addEventListener(`click`, function(e){
        e.preventDefault();
        for(let j=0; j<navlinks.length;j++){
            navlinks[j].classList.remove(`active`)
        }
        navlinks[i].classList.add(`active`);
        let currentId = this.getAttribute(`href`);
        let targetSection = document.querySelector(currentId);
        window.scroll({
            top:targetSection.offsetTop,
            behavior:"smooth",
        })
    })
}