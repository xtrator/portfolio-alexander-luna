import "./style.css";
import { setupNav } from "./components/nav";
import { setupInfo } from "./components/info";
import backgroundURL from "./public/background.svg";
import { setupStacks } from "./components/stacks";
import { setupProjects } from "./components/projects";

document.querySelector("#app").innerHTML = /* HTML */ `
  <img src="${backgroundURL}" class="absolute -z-10 right-0 top-0 w-[50%]" />
  <div
    class="text-gray-700 px-20 flex flex-col gap-32 2xl:w-[70%] w-[90%] m-auto"
  >
    <nav id="nav"></nav>
    <section id="info"></section>
    <section id="stacks"></section>
    <section id="projects-section"></section>
  </div>
  <footer class="bg-gray-800 h-[100px] mt-16"></footer>
`;

setupNav(document.querySelector("#nav"));
setupInfo(document.querySelector("#info"));
setupStacks(document.querySelector("#stacks"));
setupProjects(document.querySelector("#projects-section"));
