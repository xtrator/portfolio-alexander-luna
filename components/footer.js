export function setupFooter(element) {
  element.innerHTML = /* HTML */ `<div
    class="bg-gray-800 text-center text-white"
  >
    <div
      class="m-auto mt-16 flex flex-col items-center justify-between gap-4 lg:flex-row 2xl:w-[1500px]"
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
    </div>
  </div>`;
}
