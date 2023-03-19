import { renderProjects } from "./project";

const projects = [
  {
    title: "Shopdrink",
    description:
      "Shopdrink is a drink store built entirely with tailwindcss and vanillaJS. This store fetches drinks data from an expressJS API. Drink database is hosted in MongoDB Atlas",
    type: "web app",
    imgURL: "https://i.imgur.com/Lszk4Yd.png",
    repoURL: "https://github.com/xtrator/vanilla-shopdrink",
    siteURL: "https://vanilla-shopdrink.vercel.app/",
  },
  {
    title: "real state template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
    type: "web app",
    imgURL: "",
    link: "https://www.google.com",
  },
];

export function setupProjects(element) {
  element.innerHTML = /* HTML */ `<div
    class="flex flex-col items-center gap-16"
  >
    <h2 class="font-medium text-4xl text-pink-600">Projects</h2>
    <div id="projects" class="flex flex-col gap-8"></div>
  </div>`;

  renderProjects({ element: document.querySelector("#projects"), projects });
}
