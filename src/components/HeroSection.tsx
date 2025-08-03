import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div className=" h-auto md:h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-30 left-0 md:-top-20 md:left-60"
        fill="BlueViolet"
      />
      <div className=" p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master The Art of Programming
        </h1>
      </div>
      <p className="mt-4 font-normal text-center text-base md:text-lg text-neutral-300 max-w-lg mx-auto p-4 md:p-0">
        Dive into our comprehensive programming courses and transform your
        carrer journey today. Whether you're a beginner or looking to refine
        your skills, join us to unlock your true potential.
      </p>
      <div className="mt-4">
        <Link href="/courses">
          <Button className=" cursor-pointer">Explore Courses</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
