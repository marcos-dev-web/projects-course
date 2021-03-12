const menuButton = document.querySelector("#menu_button");
const menuView = document.querySelector("#menu_view");
const body = document.body;

let open = true;

const toggle = () => {
  menuView.classList.toggle("show", open);
  if (open) {
    body.style.overflow = "hidden";
  } else {
    body.removeAttribute("style");
  }
  open = !open;
};

menuButton.addEventListener("click", toggle);
