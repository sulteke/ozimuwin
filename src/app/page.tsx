import { Hero } from "@/components/sections/hero";
import { Works } from "@/components/sections/works";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { WhyMe } from "@/components/sections/why-me";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Works />
      <Pricing />
      <Process />
      <WhyMe />
      <Faq />
      <Contact />
    </>
  );
}
