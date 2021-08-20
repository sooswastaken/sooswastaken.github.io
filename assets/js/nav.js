const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
var id = null;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    var elem = document.getElementsByClassName("mobile-nav")[0]
    var pos = -30;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos = pos + 0.5; 
        elem.style.right = pos + 'em'; 
      }
    }

  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    var elem = document.getElementsByClassName("mobile-nav")[0]
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == -30) {
        clearInterval(id);
      } else {
        pos = pos - 0.5; 
        elem.style.right = pos + 'em'; 
      }
    }

  }
});