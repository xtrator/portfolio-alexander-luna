export function setupNav(element) {
  element.innerHTML = /* HTML */ `<div
    class="justify-between items-end py-4 lg:flex text-center"
  >
    <h1 class="text-4xl text-pink-600 ">Alexander Luna</h1>
    <div class="text-2xl gap-4 xl:gap-12 hidden lg:flex">
      <p>About Me</p>
      <p>Projects</p>
      <p>Experience</p>
      <p>Contact</p>
    </div>
  </div>`;
}
