/* const img = document.querySelectorAll(".fullscreen-img");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

img.forEach((image) => {
  image.addEventListener("click", () => {
    overlay.style.display = "block";
    overlay.innerHTML = `<img src="${img.src}">`;
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
 */ const imgList = document.querySelectorAll(".fullscreen-img");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

imgList.forEach((img) => {
  img.addEventListener("click", () => {
    const imgSrc = img.getAttribute("src");
    const overlayImage = document.createElement("img");
    overlayImage.setAttribute("src", imgSrc);
    overlay.appendChild(overlayImage);
    overlay.style.display = "flex";
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  overlay.innerHTML = "";
});
