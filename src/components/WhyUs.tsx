"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import courses from "../data/courses.json";

// const featuredContent = courses.courses
//   .filter((course) => course.isFeatured)
//   .slice(0, 2)
//   .map((course) => ({
//     title: course.title,
//     description: course.description,
//     content: (
//       <div className="flex h-full w-full items-center justify-center text-white">
//         <img
//           src={course.image}
//           width={200}
//           height={200}
//           className="h-full w-full object-cover"
//           alt={course.title}
//         />
//       </div>
//     ),
//   }));
type ProgrammingContent = {
  title: string;
  description: string;
};

export const programmingSchoolContent: ProgrammingContent[] = [
  {
    title: "Code Your Future: A Personal Journey in Programming Mastery",
    description:
      "Begin a coding journey that’s tailored just for you. Our personalized instruction adapts to your unique learning style and goals, helping you build strong foundations and unlock creative potential in the world of software development.",
  },
  {
    title: "Build Real-World Skills, One Line at a Time",
    description:
      'Whether you\'re learning your first "Hello World" or deploying full-stack applications, our platform supports your growth every step of the way with hands-on projects and expert guidance.',
  },
  {
    title: "Your Learning, Your Pace, Your Code",
    description:
      "Learn how and when you want. Our flexible platform empowers you to progress at your own pace while mastering everything from algorithms to app development—without the pressure.",
  },
  {
    title: "Live Feedback & Collaborative Coding",
    description:
      "Engage in interactive coding sessions with immediate feedback—just like real-time pair programming. Understand errors, improve logic, and build confidence with every keystroke.",
  },
  {
    title: "Industry-Relevant Curriculum",
    description:
      "Our course content evolves with the tech landscape, covering the latest languages, frameworks, and best practices. Stay ahead with skills that employers are looking for today—and tomorrow.",
  },
  {
    title: "Unlimited Growth with Expansive Resources",
    description:
      "From beginner tutorials to advanced system design, our vast library of resources ensures you’re always learning something new. Expand your expertise and prepare for real-world challenges.",
  },
];

const WhyUs = () => {
  return (
    <div className="w-full ">
      <StickyScroll content={programmingSchoolContent} />
    </div>
  );
};

export default WhyUs;
