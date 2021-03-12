const depoimentsList = [
  {
    id: 0,
    text:
      "by name of author, amet consectetur adipisicing elit. Nulla sunt, consequuntur nobis aliquid quaerat error praesentium esse saepe, ad architecto molestias.",
    name: "Filipe deschamps",
  },
  {
    id: 1,
    text:
      "by mark zuckerberg, amet consectetur adipisicing elit. Nulla sunt, consequuntur nobis aliquid quaerat error praesentium esse saepe, ad architecto molestias.",
    name: "Mark zuckerberg",
  },
  {
    id: 2,
    text:
      "by toni ramos, Nulla sunt, nobis aliquid quaerat error praesentium esse saepe, ad architecto molestias.",
    name: "toni ramos",
  },
];

const slider = document.querySelector(".slider");
const nameAuthor = document.querySelector("#name_author");
const text = document.querySelector("#text_depoiment");

function init() {
  slider.setAttribute("data-id", 0);
  text.textContent = depoimentsList[0].text;
  nameAuthor.textContent = depoimentsList[0].name;
}

function changeSlide(s) {
  const side = `to_${s}`;

  setTimeout(() => {
    slider.classList.add(side);
    nameAuthor.classList.add("hide_name");
  }, 100);
  setTimeout(() => {
    let id = parseInt(slider.getAttribute("data-id"));
    if (s == "right") {
      id = id < depoimentsList.length - 1 ? id + 1 : 0;
    } else {
      id = id > 0 ? id - 1 : depoimentsList.length - 1;
    }
    slider.setAttribute("data-id", id);
    text.textContent = depoimentsList[id].text;
    nameAuthor.textContent = depoimentsList[id].name;
    slider.classList.remove(side);
    nameAuthor.classList.remove("hide_name");
  }, 400);
}

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

prev.onclick = () => changeSlide("left");
next.onclick = () => changeSlide("right");

init();
