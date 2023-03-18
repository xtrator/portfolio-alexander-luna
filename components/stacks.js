import atlassianURL from "../public/atlassian.svg";
import awsec2URL from "../public/aws-ec2.svg";
import expressURL from "../public/express.svg";
import gitURL from "../public/git-icon.svg";
import javascriptURL from "../public/javascript.svg";
import linuxtuxURL from "../public/linux-tux.svg";
import mongodbURL from "../public/mongodb.svg";
import nodejsURL from "../public/nodejs.svg";
import postgresqlURL from "../public/postgresql.svg";
import reactURL from "../public/react.svg";
import rubyURL from "../public/ruby.svg";
import slackURL from "../public/slack.svg";
import tailwindcssURL from "../public/tailwindcss.svg";
import vercelURL from "../public/vercel.svg";

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
