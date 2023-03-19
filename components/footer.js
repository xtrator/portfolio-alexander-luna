export function setupFooter(element) {
  element.innerHTML = /* HTML */ `<div
    class="bg-gray-800 h-[100px] mt-16 text-white flex justify-center gap-32 items-center"
  >
    <div>
      <p>Made with ❤️ by Alexander Luna</p>
    </div>
    <div>
      <p>Contact:</p>
      <p class="text-sm">+51 991 862 100</p>
      <a class="text-sm" href="mailto: alexander.luna.santillan@outlook.com"
        >alexander.luna.santillan@outlook.com</a
      >
    </div>

    <div>
      <p>Inspired from designs by:</p>
      <p class="text-sm">Sergio González Sánchez</p>
      <p class="text-sm">Srinivas Dezign</p>
    </div>
  </div>`;
}
