import "./style.css";
import { setupNav } from "./components/nav";

document.querySelector("#app").innerHTML = `
  <div class="text-gray-700 px-20">
    <nav id="nav"></nav>
  </div>
`;

setupNav(document.querySelector("#nav"));
