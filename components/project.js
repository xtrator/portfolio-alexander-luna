export function renderProjects({ element, projects }) {
  const projectsHTML = projects.map((p, i) => {
    let output;
    let img_styles = "lg:w-[50%] shadow-lg";
    let container_styles = "flex flex-col justify-center lg:flex-row";
    let description_styles = "flex flex-col justify-center lg:w-[50%] p-8";

    if (i % 2 == 1) {
      container_styles += " lg:flex-row-reverse";
      description_styles += " items-end text-end";
    }

    output = /* HTML */ `<div
        class="${container_styles}"
      >
        <img class="${img_styles}" src="${p.imgURL}"></img>
        <div
          class="${description_styles}"
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

    return output;
  });

  element.innerHTML = /* HTML */ projectsHTML.join("");
}
