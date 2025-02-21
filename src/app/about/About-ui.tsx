import { CheckCircleIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const teamMembers = [
  { name: "Alice Johnson", role: "Product Manager" },
  { name: "Bob Smith", role: "Software Engineer" },
  { name: "Ella Brown", role: "UX Designer" },
];

const AboutPreview = () => {
  return (
    <main className="flex-1 md:py-5">
      <div className="container space-y-12 px-4 md:px-6">
        {/* Section: Title */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            About Us
          </h1>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 md:text-lg">
            We&apos;re on a mission to help teams build, deploy, and scale the
            best web experiences.
          </p>
        </div>

        {/* Section: Story & Mission */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {[
            {
              title: "Our Story",
              text: "Founded in 2020, our company started as a small team of passionate developers who believed in building a better web. Over the years, we have grown into a global platform that powers millions of websites, applications, and e-commerce experiences.",
              points: [
                "Started with a small but dedicated team.",
                "Grew into a global platform in just a few years.",
                "Empowering developers and businesses worldwide.",
              ],
            },
            {
              title: "Our Mission",
              text: "We believe in the power of technology to bring people together, drive innovation, and create meaningful experiences. Our mission is to provide developers with the tools and resources they need to build the future of the internet.",
              points: [
                "Deliver high-quality, scalable solutions.",
                "Support open-source development and collaboration.",
                "Continuously innovate to meet evolving digital needs.",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 lg:items-start lg:text-left"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">{item.title}</h2>
              <p className="max-w-prose text-neutral-600 dark:text-neutral-300 md:text-lg">
                {item.text}
              </p>
              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section: Team Members */}
        <div className="grid max-w-5xl mx-auto gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <img
                src="/dinosaur-svgrepo-com.svg"
                width="300"
                height="300"
                alt={`${member.name}`}
                className="mx-auto rounded-full border dark:border-neutral-700 aspect-square object-cover"
              />
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Contact */}
        <div className="flex flex-col space-y-4 text-center">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="flex items-center justify-center space-x-2">
            <MapPinIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            <address className="text-sm not-italic text-neutral-600 dark:text-neutral-300">
              225 Bush St, San Francisco, CA 94104
            </address>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <PhoneIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            <a
              href="#"
              className="text-sm underline text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
            >
              +1 (415) 555-2671
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MailIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            <Link
              href="#"
              className="text-sm underline text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
              prefetch={false}
            >
              info@example.com
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPreview;
