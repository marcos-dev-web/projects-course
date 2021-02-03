const menuButton = document.querySelector('.menu__hamburger-mobile');
const viewMenu = document.querySelector('.header__menu');
var visible = false;
const breakPoint = 790;

const menu = {
  open() {
    viewMenu.classList.remove('hide');
    viewMenu.classList.add('show');
    visible = true;
  },
  close() {
    viewMenu.classList.add('hide');
    viewMenu.classList.remove('show');
    visible = false;
  },
  reset() {
    viewMenu.classList.remove('hide');
    viewMenu.classList.remove('show');
    visible = false;
  }
}

menuButton.addEventListener('click', () =>  {
  if (visible) {
    menu.close()
  } else {
    menu.open()
  }
})

const verifyMenu = () => {
  let width = window.innerWidth;
  if (width <= breakPoint) {
    menu.close()
  } else {
    menu.reset()
  }
}

window.addEventListener('resize', () => {
  verifyMenu()
})

window.addEventListener('onscroll', () => {
  if (visible) {
    menu.close();
  }
})

verifyMenu()
