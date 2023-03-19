export function setupModal(element) {
  element.innerHTML = /* HTML */ `<button
      id="burguer"
      class="absolute top-5 right-5 z-10 text-2xl lg:hidden"
    >
      M
    </button>
    <div
      id="modal-nav"
      class="fixed top-0 right-0 flex hidden h-full w-screen flex-col items-center justify-center bg-white text-2xl"
    >
      <a class="hover:text-pink-600" href="#info">About Me</a>
      <a class="hover:text-pink-600" href="#projects-section">Projects</a>
      <a class="hover:text-pink-600" href="#experience-section">Experience</a>
      <a class="hover:text-pink-600" href="#footer">Contact</a>
    </div>`;

  const burguer = document.querySelector("#burguer");
  const modalNav = document.querySelector("#modal-nav");
  burguer.addEventListener("click", (e) => {
    if (modalNav.classList.contains("hidden")) {
      modalNav.classList.remove("hidden");
    } else {
      modalNav.classList.add("hidden");
    }
  });
  modalNav.addEventListener("click", (e) => {
    burguer.click();
  });
}
