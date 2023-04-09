const imgList = document.querySelectorAll(".fullscreen-img");
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

const burgerMenu = document.getElementById("burger-menu");
const overlay2 = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay2.classList.toggle("overlay2");
});
