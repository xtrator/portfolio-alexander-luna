let experience = [
  {
    title: "Full Stack Engineer",
    company: "Garage Labs",
    modality: "Full-time",
    duration: "Jun 2021 - Nov 2021 | 5 mos",
    description: `Garage Labs is a chilean startup focused on developing scalable
    e-commerce sites for clients all around the global.Among my responsabilities were developing new features based off user
    stories, collaborating with QA and Design members, attending weekly
    scrum meetings and learning new tech stacks such as DevOps with AWS.`,
  },
  {
    title: "Freelance Web Developer",
    company: "UpWork",
    modality: "Contract",
    duration: "Oct 2020 - Jun 2021 | 8 mos",
    description: `UpWork is a platform for freelancers and clients to meet.\nWorked as a freelance full stack engineer for various companies across
    the US. Mainly employing stacks such as React and Ruby on Rails.
    Developed new features using TDD methodologies and worked with teams
    remotely effectively through agile kanban practices and Github.`,
  },
];

export function setupExperience(element) {
  element.innerHTML = /* HTML */ `<div class="flex flex-col">
    <h2 class="text-center text-4xl font-medium text-pink-600">Experience</h2>
    <div class="flex justify-center">
      <div class="w-[40%]"></div>
      <div class="h-16 w-1 bg-pink-600"></div>
      <div class="w-[40%]"></div>
    </div>
    ${experience
      .map((exp, i) => {
        let container_styles = "flex justify-center";
        if (i % 2 == 1) {
          container_styles += " flex-row-reverse text-end";
        }
        return /* HTML */ `<div class="${container_styles}">
          <div
            class="w-full rounded-l-md border-t-2 border-pink-600 pb-16 pr-16 lg:w-[40%]"
          >
            <p class="text-lg font-medium text-pink-600">${exp.title}</p>
            <p class="text-xl">${exp.company} | ${exp.modality}}</p>
            <p class="text-sm text-gray-400">${exp.duration}</p>
            <br />
            <p class="">${exp.description}</p>
          </div>
          <div class="w-1 bg-pink-600"></div>
          <div class="relative bottom-3 hidden w-[40%] lg:block">Jul 2021</div>
        </div>`;
      })
      .join("")}
  </div>`;
}
