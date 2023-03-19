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
    class="flex flex-col items-center gap-16"
  >
    <h2 class="font-medium text-4xl text-pink-600">Stacks</h2>
    <div class="flex gap-4 flex-wrap justify-center">
      <img
        src="${atlassianURL}"
        class="w-28 h-28 bg-pink-100 p-4 rounded-full"
      />
      <img src="${awsec2URL}" class="w-28 h-28 bg-pink-100 p-4 rounded-full" />
      <img src="${expressURL}" class="w-28 h-28 bg-pink-100 p-4 rounded-full" />
      <img src="${gitURL}" class="w-28 h-28 bg-pink-100 p-4 rounded-full" />
      <img
        src="${javascriptURL}"
        class="w-28 h-28 bg-pink-100 p-4 rounded-full"
      />
      <img
        src="${linuxtuxURL}"
        class="w-28 h-28 bg-pink-100 p-4 rounded-full"
      />
      <img src="${mongodbURL}" class="w-28 h-28 bg-pink-100 p-4 rounded-full" />
      <img src="${nodejsURL}" class="w-28 h-28 bg-pink-100 p-4 rounded-full" />
      <img
        src="${postgresqlURL}"
        class="w-28 h-28 bg-pink-100 p-4 rounded-full"
      />
      <img src="${reactURL}" class="w-28 h-28 bg-pink-100 p-4 rounded-full" />
      <img src="${rubyURL}" class="w-28 h-28 bg-pink-100 p-4 rounded-full" />
      <img src="${slackURL}" class="w-28 h-28 bg-pink-100 p-4 rounded-full" />
      <img
        src="${tailwindcssURL}"
        class="w-28 h-28 bg-pink-100 p-4 rounded-full"
      />
      <img src="${vercelURL}" class="w-28 h-28 bg-pink-100 p-4 rounded-full" />
    </div>
  </div>`;
}
