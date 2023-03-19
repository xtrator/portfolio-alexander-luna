export function renderProjects({ element, projects }) {
  const projectsHTML = projects.map((p, i) => {
    let output;

    if (i % 2 == 0 /* even */) {
      output = /* HTML */ `<div
        class="flex justify-center 2xl:gap-[10%] gap-[5%]"
      >
        <div class="w-[590px] h-[490px] bg-pink-300 rounded-3xl"></div>
        <div
          class="w-[590px] h-[490px] flex flex-col justify-center items-start"
        >
          <p>${p.title}</p>
          <p class="mt-4 text-2xl">
            <span class="font-thin"
              >Lorem ipsum dolor sit amet, consectetur</span
            >
            <span
              >adipiscing elit. Ultrices lorem non feugiat egestas amet.</span
            >
          </p>
          <p class="mt-6">Web App</p>
          <button
            class="mt-8 border border-gray-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 rounded-full px-6 py-2 font-medium"
          >
            VIEW WORK >
          </button>
        </div>
      </div>`;
    } else {
      output = /* HTML */ `<div
        class="flex justify-center 2xl:gap-[10%] gap-[5%]"
      >
        <div class="w-[590px] h-[490px] flex flex-col justify-center items-end">
          <p>${p.title}</p>
          <p class="mt-4 text-2xl text-end">
            <span class="font-thin"
              >Lorem ipsum dolor sit amet, consectetur</span
            >
            <span
              >adipiscing elit. Ultrices lorem non feugiat egestas amet.</span
            >
          </p>
          <p class="mt-6">Web App</p>
          <button
            class="mt-8 border border-gray-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 rounded-full px-6 py-2 font-medium"
          >
            VIEW WORK >
          </button>
        </div>
        <div class="w-[590px] h-[490px] bg-pink-300 rounded-3xl"></div>
      </div>`;
    }

    return output;
  });

  element.innerHTML = projectsHTML.join("");
}
