const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
}
  
handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="norris-full.jpeg" alt="$picture">
      </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;
    const imgSrc = clickedElement.src.split("-")[0] + "-full.jpeg"; 
  
    const viewerHTML = viewerTemplate(imgSrc, clickedElement.alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);
  
    const closeViewer = document.querySelector(".close-viewer");
    closeViewer.addEventListener("click", () => {
      document.querySelector(".viewer").remove();
    });
}
  
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);