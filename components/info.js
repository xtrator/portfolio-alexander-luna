export function setupInfo(element) {
  element.innerHTML = /* HTML */ ` <div
    class="flex flex-col-reverse items-center justify-around lg:flex-row"
  >
    <div class="flex flex-col gap-8 sm:w-[512px]">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium text-pink-600">Full Stack Developer</p>
        <p class="text-4xl">Hey, I'm Alexander Luna</p>
      </div>
      <p class="text-xl">
        A self-taught full stack developer from Peru. Started my journey in
        early 2020 out of passion for coding. I enjoy building scalable frontend
        and backend applications. I hugely believe in team-work and cooperation,
        hence why I focus greatly on writing clean and readable code.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="#projects-section"
          class="rounded-md border-2 border-gray-700 px-6 py-2 font-medium hover:border-pink-600 hover:bg-pink-600 hover:text-white"
        >
          PROJECTS
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-luna-santillan/"
          target="_blank"
          class="rounded-md border-2 border-gray-700 px-6 py-2 font-medium hover:border-pink-600 hover:bg-pink-600 hover:text-white"
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/xtrator"
          target="_blank"
          class="rounded-md border-2 border-gray-700 px-6 py-2 font-medium hover:border-pink-600 hover:bg-pink-600 hover:text-white"
        >
          GITHUB
        </a>
      </div>
    </div>
    <img
      class="w-full shadow-xl sm:w-[512px]"
      src="https://i.imgur.com/nLw9E02.png"
    />
  </div>`;
}
