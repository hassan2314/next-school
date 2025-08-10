"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/courses.json";

const page = () => {
  return (
    <div className=" min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-8 text-white">
        All courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center"></div>
    </div>
  );
};

export default page;
