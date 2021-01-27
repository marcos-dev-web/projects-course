var open = false;
const menu_buton = document.querySelector(".menu_");
const menu_label = document.querySelector(".menu_ i");
const menu_view = document.querySelector(".nav__header_banner");

const menu = {
  open() {
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

menu_buton.addEventListener("click", (e) => {
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

window.addEventListener("scroll", (e) => {
  if (open) {
    e.preventDefault();
    menu.close();
  }
});
