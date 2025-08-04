"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Programming Logic",
      description:
        "Dive deep into the fundamentals of programming logic and enhance your coding skills.",
      slug: "understanding-programming-logic",
      isFeatured: true,
    },
    {
      title: "The Art of Writing Clean Code",
      description:
        "Learn the craft of writing maintainable, readable, and efficient code from industry professionals.",
      slug: "the-art-of-writing-clean-code",
      isFeatured: true,
    },
    {
      title: "Mastering Your Tech Stack",
      description:
        "Advanced techniques to master your preferred programming language and tools.",
      slug: "mastering-your-tech-stack",
      isFeatured: true,
    },
    {
      title: "Web Development Essentials",
      description:
        "Get started with full-stack web development with this comprehensive overview.",
      slug: "web-development-essentials",
      isFeatured: true,
    },
    {
      title: "Ace Your Technical Interviews",
      description:
        "Enhance your coding interview skills with expert tips, algorithms, and mock sessions.",
      slug: "ace-your-technical-interviews",
      isFeatured: true,
    },
    {
      title: "Building a Developer Portfolio",
      description:
        "Learn how to effectively showcase your skills and projects to stand out in the job market.",
      slug: "building-a-developer-portfolio",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Coding Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
