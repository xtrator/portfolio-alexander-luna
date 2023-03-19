import { renderProjects } from "./project";

const projects = [
  {
    title: "real state template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
    type: "web app",
    imgURL: "",
    link: "https://www.google.com",
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
