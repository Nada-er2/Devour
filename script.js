document.addEventListener("scroll", () =>{
    const header = document.querySelector("header");
    if(window.scrollY>0){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
});
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav__links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
