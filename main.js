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
    class="absolute right-0 top-0 -z-10 w-full lg:w-[50%]"
  />
  <div
    class="m-auto flex w-[350px] flex-col gap-16 text-gray-700 sm:w-[600px] lg:w-[1024px] lg:gap-24 2xl:w-[1500px]"
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
