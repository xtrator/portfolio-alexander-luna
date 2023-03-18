import "./style.css";
import { setupNav } from "./components/nav";
import { setupInfo } from "./components/info";
import backgroundURL from "./public/background.svg";

document.querySelector("#app").innerHTML = /* HTML */ `
  <img src="${backgroundURL}" class="absolute -z-10 right-0 top-0 w-[50%]" />
  <div class="text-gray-700 px-20">
    <nav id="nav"></nav>
    <section id="info"></section>
  </div>
`;

setupNav(document.querySelector("#nav"));
setupInfo(document.querySelector("#info"));
