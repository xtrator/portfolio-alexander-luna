import atlassianURL from "../src/atlassian.svg";
import awsec2URL from "../src/aws-ec2.svg";
import expressURL from "../src/express.svg";
import gitURL from "../src/git-icon.svg";
import javascriptURL from "../src/javascript.svg";
import linuxtuxURL from "../src/linux-tux.svg";
import mongodbURL from "../src/mongodb.svg";
import nodejsURL from "../src/nodejs.svg";
import postgresqlURL from "../src/postgresql.svg";
import reactURL from "../src/react.svg";
import rubyURL from "../src/ruby.svg";
import slackURL from "../src/slack.svg";
import tailwindcssURL from "../src/tailwindcss.svg";
import vercelURL from "../src/vercel.svg";

export function setupStacks(element) {
  element.innerHTML = /* HTML */ `<div
    class="flex flex-col items-center gap-8 lg:gap-16"
  >
    <h2 class="text-4xl font-medium text-pink-600">Stacks</h2>
    <div class="flex flex-wrap justify-center gap-4">
      <img
        src="${atlassianURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${awsec2URL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${expressURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${gitURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${javascriptURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${linuxtuxURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${mongodbURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${nodejsURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${postgresqlURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${reactURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${rubyURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${slackURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${tailwindcssURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
      <img
        src="${vercelURL}"
        class="h-14 w-14 rounded-full bg-pink-100 p-1 lg:h-28 lg:w-28 lg:p-4"
      />
    </div>
  </div>`;
}
