import { Courses } from "@/components/Courses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructor";
import MovingCards from "@/components/MovingCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Courses />
      <WhyUs />
      <MovingCards />
      <UpcomingWebinars />
      <Instructors />
    </main>
  );
}
