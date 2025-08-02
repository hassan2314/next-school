"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export function Courses() {
  return (
    <div className=" py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn from industry experts and take your career to the next level
          </p>
        </div>
      </div>
      <div></div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <Button className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 cursor-pointer">
            View All courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
