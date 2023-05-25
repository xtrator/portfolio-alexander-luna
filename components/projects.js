import { renderProjects } from "./project";

const projects = [
  {
    title: "Kitchen Display System",
    description: "A barebones tool for kitchen staff to update orders and keep track of orders as they change status. Technologies used to build this project are React, Redux, styled-components, Typescrit and Firebase.",
    type: "web app",
    imgURL: "https://i.imgur.com/PrzYHrV.png",
    repoURL: "https://github.com/xtrator/kitchen-display-system",
    siteURL: "https://kitchen-display-system.vercel.app/"
  },
  {
    title: "Shopdrink",
    description:
      "Shopdrink is a drink store built entirely with tailwindcss and vanillaJS. This store fetches drinks data from an expressJS API. Drink database is hosted in MongoDB Atlas",
    type: "web app",
    imgURL: "https://i.imgur.com/Lszk4Yd.png",
    repoURL: "https://github.com/xtrator/vanilla-shopdrink",
    siteURL: "https://vanilla-shopdrink.vercel.app/",
  }
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
