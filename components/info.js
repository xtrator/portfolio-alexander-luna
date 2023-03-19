export function setupInfo(element) {
  element.innerHTML = /* HTML */ `<div
    class="flex items-center justify-center 2xl:gap-[10%] gap-[5%]"
  >
    <div class="w-[484px] flex flex-col gap-8">
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
      <div class="flex gap-4">
        <a
          href="#projects-section"
          class="border-2 border-gray-700 hover:text-white hover:bg-pink-600 hover:border-pink-600 rounded-md px-6 py-2 font-medium"
        >
          PROJECTS
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-luna-santillan/"
          target="_blank"
          class="border-2 border-gray-700 hover:text-white hover:bg-pink-600 hover:border-pink-600 rounded-md px-6 py-2 font-medium"
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/xtrator"
          target="_blank"
          class="border-2 border-gray-700 hover:text-white hover:bg-pink-600 hover:border-pink-600 rounded-md px-6 py-2 font-medium"
        >
          GITHUB
        </a>
      </div>
    </div>
    <div class="h-[594px] w-[484px] bg-pink-600"></div>
  </div>`;
}
