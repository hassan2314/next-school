"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const programmingSchoolTestimonials = [
  {
    quote:
      "Joining the programming school transformed the way I think about problem-solving. The instructors are incredibly knowledgeable and approachable!",
    name: "Alex Johnson",
    title: "JavaScript Student",
  },
  {
    quote:
      "The support and community here are unmatched. I’ve grown not just as a Python programmer, but also in my ability to build complete projects from scratch.",
    name: "Samantha Lee",
    title: "Python Student",
  },
  {
    quote:
      "This school gave me the tools and confidence to become a frontend developer. The personalized coaching made a huge difference in my learning.",
    name: "Michael Chen",
    title: "React Student",
  },
  {
    quote:
      "As a backend developer, finding structured and practical courses was tough. This school matched me with a mentor who really understood my learning needs.",
    name: "Emily Taylor",
    title: "Node.js Student",
  },
  {
    quote:
      "The DevOps track here opened my eyes to how modern deployment pipelines work. Highly recommend for anyone serious about scalable development!",
    name: "Chris Morales",
    title: "DevOps Student",
  },
];

const MovingCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Code to Success: Voices of Transformation
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={programmingSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MovingCards;
