import { Link } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
  return [
    { title: "Kanwar's portflio" },
    { name: "description", content: "Welcome to Kanwar's simple portfolio!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      <div className="bg-white px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Hi there! 👋
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-l">
            I'm Kanwar Gill—a designer, engineer, and builder passionate about
            crafting intuitive experiences. Let's connect and create something
            great together.
          </p>
        </div>
      </div>

      <div className="pt-32 mx-auto max-w-2xl text-center max-lg:pt-20">
        <h3 className="text-3xl font-medium">Professional</h3>
        <div className="mt-6 gap gap-7 flex items-center justify-center">
          <Link
            to="https://www.linkedin.com/in/kanwarg/"
            className="flex items-center text-sm"
            target="_blank"
          >
            <img src="/LI-In-Bug.png" width={50} alt="LinkedIn profile" />
            <div className="text-left ml-1 font-normal">
              <p>View my</p>
              <p>LinkedIn Profile</p>
            </div>
          </Link>
          <Link
            to="https://drive.google.com/file/d/1MAtzUkmU4LzFNg9u9NNKvMY04CpcsyVK/view?usp=sharing"
            target="_blank"
            className="flex items-center text-sm"
          >
            <img src="/pdf_logo.png" width={36} alt="My Resume" />
            <div className="text-left ml-2 font-normal">
              <p>View my</p>
              <p>Resume</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Projects & Roles */}
      <div className="pt-32 max-lg:pt-20">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-medium tracking-tight text-balance text-gray-950">
            Projects & Roles
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                    Automatebnb
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 ">
                    In 2018, after leaving Netflix, my co-founder and I acquired
                    a vacation rental in Oakhurst, CA. Living in Sunnyvale at
                    the time, we needed a better way to manage cleaning
                    schedules remotely. After searching for solutions, we built
                    our own—later expanding to help hosts across the U.S.
                  </p>
                  <div className="mt-3">
                    <p className="text-sm/6 text-gray-600">
                      <span className="font-semibold">My role: </span>
                      Researcher, product designer, and front-end engineer.
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm/6 text-gray-600">
                      <span className="font-semibold">Tech stack: </span>
                      ReactJS, React Native, RoR, PostgreSQL, OneSignal, Twilio,
                      Stripe, Sentry
                    </p>
                  </div>
                  <div className="pb-8 mt-4">
                    <Link
                      to="https://automatebnb.com"
                      target="_blank"
                      className="rounded-full px-4 py-2.5 text-sm font-semibold border shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                    Gleamly.ai
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    Gleamly.ai is an independent product designed to enhance
                    short-term rental (STR) management with AI-powered
                    communication tools. It provides an intelligent chat
                    experience for operational teams and guests, streamlining
                    workflows and making property management more efficient.
                  </p>
                  <div className="mt-3">
                    <p className="text-sm/6 text-gray-600">
                      <span className="font-semibold">My role: </span>
                      Researcher, product designer, and full-stack engineer.
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm/6 text-gray-600">
                      <span className="font-semibold">Tech stack: </span>
                      NextJS, React Native, NodeJS, PostgreSQL, Pinecone,
                      Twilio, WebSockets API, OpenAI
                    </p>
                  </div>
                  <div className="my-3 flex">
                    <Link
                      to="https://gleamly.ai"
                      target="_blank"
                      className="rounded-full px-4 py-2.5 text-sm font-semibold border shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
