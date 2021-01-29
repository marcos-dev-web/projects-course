var open = false;

const q = (e) => document.querySelector(e);
const qa = (e) => document.querySelectorAll(e);

const menu_buton = q(".menu_");
const menu_label = q(".menu_ i");
const menu_view = q(".nav__header_banner");

const menu = {
  open() {
    window.scroll(0, 0);
    menu_view.style.left = "0px";
    menu_label.style = "color: rgb(100, 142, 219) !important;";
    open = true;
  },
  close() {
    menu_view.style.left = "-200px";
    menu_label.style = "color: white !important";
    open = false;
  },
};

menu_buton.addEventListener("click", () => {
  if (!open) {
    menu.open();
  } else {
    menu.close();
  }
});

menu_buton.addEventListener("mouseenter", () => {
  if (!open) {
    menu_label.style = "color: #0abde3 !important;";
  }
});

menu_buton.addEventListener("mouseout", () => {
  if (!open) {
    menu_label.style = "color: white !important;";
  }
});

window.addEventListener("scroll", () => {
    menu.close();
});

const links = qa('.link_menu');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    q('.link_menu.active').classList.remove('active');
    e.target.classList.add('active')
  })
})

q('.top').addEventListener('click', () => {
  window.scroll(0,0);
})