import "./style.css";
import { setupNav } from "./components/nav";
import { setupInfo } from "./components/info";
import backgroundURL from "./src/background.svg";
import { setupStacks } from "./components/stacks";
import { setupProjects } from "./components/projects";
import { setupExperience } from "./components/experience";
import { setupFooter } from "./components/footer";

document.querySelector("#app").innerHTML = /* HTML */ `
  <img
    src="${backgroundURL}"
    class="absolute -z-10 right-0 top-0 w-full] lg:w-[50%]"
  />
  <div
    class="text-gray-700 lg:px-5 scale-75 -translate-y-[10%] sm:-translate-y-0  sm:scale-100 xl:px-20 flex flex-col gap-32 2xl:w-[70%] lg:w-[90%] m-auto"
  >
    <nav id="nav"></nav>
    <section class="" id="info"></section>
    <section class="" id="stacks"></section>
    <section class="" id="projects-section"></section>
    <section class="" id="experience-section"></section>
  </div>
  <footer class="hidden" id="footer"></footer>
`;

setupNav(document.querySelector("#nav"));
setupInfo(document.querySelector("#info"));
setupStacks(document.querySelector("#stacks"));
setupProjects(document.querySelector("#projects-section"));
setupExperience(document.querySelector("#experience-section"));
setupFooter(document.querySelector("#footer"));
