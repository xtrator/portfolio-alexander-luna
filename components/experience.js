export function setupExperience(element) {
  element.innerHTML = /* HTML */ `<div class="flex flex-col">
    <h2 class="font-medium text-4xl text-pink-600 text-center">Experience</h2>
    <div class="flex justify-center">
      <div class="w-[40%]"></div>
      <div class="w-1 h-16 bg-pink-600"></div>
      <div class="w-[40%]"></div>
    </div>
    <div class="flex justify-center">
      <div
        class="w-full sm:w-[40%] text-start border-t-2 border-pink-600 rounded-l-md pb-16 pr-16"
      >
        <p class="text-lg font-medium text-pink-600">Full Stack Engineer</p>
        <p class="text-xl">Garage Labs | Full-time</p>
        <p class="text-sm text-gray-400">Jul 2021 - Nov 2021 | 5 mos</p>
        <br />
        <p class="">
          Garage Labs is a chilean startup focused on developing scalable
          e-commerce sites for clients all around the globe.
        </p>
        <br />
        <p class="">
          Among my responsabilities were developing new features based off user
          stories, collaborating with QA and Design members, attending weekly
          scrum meetings and learning new tech stacks such as DevOps with AWS.
        </p>
      </div>
      <div class="w-1 bg-pink-600"></div>
      <div class="w-[40%] text-start relative bottom-3 left-3 sm:block hidden">
        Jul 2021
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-[40%] text-end relative bottom-3 right-3 sm:block hidden">
        Oct 2020
      </div>
      <div class="w-1 bg-pink-600"></div>
      <div
        class="w-full sm:w-[40%] border-t-2 border-pink-600 rounded-r-md pb-16 pl-16 text-end"
      >
        <p class="text-lg font-medium text-pink-600">Freelance Web Developer</p>
        <p class="text-xl">UpWork - Contract</p>
        <p class="text-sm text-gray-400">Oct 2020 - Jun 2021 | 8 mos</p>
        <br />
        <p class="">
          UpWork is a platform for freelancers and clients to meet.
        </p>
        <br />
        <p class="">
          Worked as a freelance full stack engineer for various companies across
          the US. Mainly employing stacks such as React and Ruby on Rails.
          Developed new features using TDD methodologies and worked with teams
          remotely effectively through agile kanban practices and Github.
        </p>
      </div>
    </div>
  </div>`;
}
