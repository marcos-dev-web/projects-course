var URL = "https://picsum.photos/200/200";

function createImage(url) {
  let img_item = document.createElement("div");
  let img = document.createElement("img");

  img.src = url;
  img.alt = "photo";
  img_item.classList.add("img_item");
  img_item.appendChild(img);

  return img_item;
}

function addImages() {
  const box_images = document.querySelector("div.container_photos");
  for (let i = 0; i < 10; i++) {
    let img = createImage(URL);
    box_images.appendChild(img);
  }
}

addImages()