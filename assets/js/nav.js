const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.getElementsByClassName("mobile-nav")[0].style.display = "initial";

  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.getElementsByClassName("mobile-nav")[0].style.display = "none";

  }
});