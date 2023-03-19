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
    title: "Tweetable",
    description:
      "Tweetable is a lite app based off Twitter. This was my final project for the bootcamp Codeable that I was enrolled in. It features a backend built with NestJS and a frontend built with ReactJS",
    type: "web app",
    imgURL: "https://i.imgur.com/x7eLWGw.png",
    siteURL: "https://tailwind-tweetable.vercel.app/",
    repoURL: "https://github.com/xtrator/tailwind-tweetable",
  },
];

export function setupProjects(element) {
  element.innerHTML = /* HTML */ `<div
    class="flex flex-col items-center gap-8 lg:gap-16"
  >
    <h2 class="text-4xl font-medium text-pink-600">Projects</h2>
    <div id="projects" class="flex flex-col gap-8 lg:gap-16"></div>
  </div>`;

  renderProjects({ element: document.querySelector("#projects"), projects });
}
