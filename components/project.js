export function renderProjects({ element, projects }) {
  const projectsHTML = projects.map((p, i) => {
    let output;

    if (i % 2 == 0 /* even */) {
      output = /* HTML */ `<div
        class="flex flex-col xl:flex-row justify-center 2xl:gap-[10%] gap-[5%]"
      >
        <img class=" w-[440px] sm:w-[590px] sm:h-[490px] bg-pink-300 rounded-3xl shadow-lg" src="${
          p.imgURL
        }"></img>
        <div
          class="w-[440px] sm:w-[590px] sm:h-[490px] flex flex-col justify-center items-start"
        >
          <p class="text-xl font-medium text-pink-600">
            ${p.title.toUpperCase()}
          </p>
          <p class="mt-4 text-2xl">
            <span class="font-thin"
              >${p.description.slice(0, p.description.indexOf(".") + 1)}</span
            >
            <span>${p.description.slice(p.description.indexOf(".") + 1)}</span>
          </p>
          <p class="mt-6">${p.type.toUpperCase()}</p>
          <div class="mt-8 flex gap-4">
          <a
            href="${p.repoURL}"
            target="_blank"
            class="border border-gray-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 rounded-full px-6 py-2 font-medium"
          >
            VIEW REPO >
          </a>
          <a
            href="${p.siteURL}"
            target="_blank"
            class="border border-gray-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 rounded-full px-6 py-2 font-medium"
          >
            VIEW SITE >
          </a></div>
        </div>
      </div>`;
    } else {
      output = /* HTML */ `<div
        class="flex flex-col-reverse xl:flex-row justify-center 2xl:gap-[10%] gap-[5%]"
      >
        <div class="w-[440px] sm:w-[590px] sm:h-[490px] flex flex-col justify-center items-end">
          <p class="text-xl font-medium text-pink-600">
            ${p.title.toUpperCase()}
          </p>
          <p class="mt-4 text-2xl text-end">
            <span class="font-thin"
              >${p.description.slice(0, p.description.indexOf(".") + 1)}</span
            >
            <span>${p.description.slice(p.description.indexOf(".") + 1)}</span>
          </p>
          <p class="mt-6">${p.type.toUpperCase()}</p>
          <div class="mt-8 flex gap-4">
          <a
            href="${p.repoURL}"
            target="_blank"
            class="border border-gray-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 rounded-full px-6 py-2 font-medium"
          >
            VIEW REPO >
          </a>
          <a
            href="${p.siteURL}"
            target="_blank"
            class="border border-gray-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 rounded-full px-6 py-2 font-medium"
          >
            VIEW SITE >
          </a></div>
        </div>
        <img class=" w-[440px] sm:w-[590px] sm:h-[490px] bg-pink-300 rounded-3xl shadow-lg" src="${
          p.imgURL
        }"></img>
      </div>`;
    }

    return output;
  });

  element.innerHTML = /* HTML */ `<div class="flex flex-col gap-16">
    ${projectsHTML.join("")}
  </div>`;
}
