export function setupNav(element) {
  element.innerHTML = /* HTML */ `<div
    class="justify-between py-4 text-center lg:flex"
  >
    <h1 class="font-[Papyrus] text-4xl text-pink-600 ">Alexander Luna</h1>
    <div class="hidden gap-4 text-2xl lg:flex xl:gap-12">
      <a class="hover:text-pink-600" href="#info">About Me</a>
      <a class="hover:text-pink-600" href="#projects-section">Projects</a>
      <a class="hover:text-pink-600" href="#experience-section">Experience</a>
      <a class="hover:text-pink-600" href="#footer">Contact</a>
    </div>
  </div>`;
}
