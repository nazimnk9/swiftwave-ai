"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSectionCard from "./hero-card";
import Slider from "react-slick";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass:
      "slick-dots  [&>li>button:before]:!text-primary [&>li.slick-active>button:before]:!text-accent",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="relative my-4 w-full lg:my-16">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <HeroSectionCard
              title={slide.title}
              description={slide.description}
              buttonText1={slide.buttonText1}
              buttonText2={slide.buttonText2}
              imageSrc={slide.imageSrc}
              imageAlt={slide.imageAlt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

const slides = [
  {
    title: "Take Your Sales to the Next Level.\nWhile your sales team sleeps, ",
    description:
      "Swiftwave.AI finds warm leads, books meetings, and syncs them into your CRM — ready to close.",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/1_edited_noor_v1.png",  // hero/caro_1.png
    imageAlt: "AI Professional",
  },
  {
    title: "Swiftwave.AI Platform\nSmart AI Automation\nfor Recruitment & HR",
    description:
      "Achieve 50% cost savings and 50% business growth through our intelligent automation platform.",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/new_edited_noor_v3.png",    // /hero.png
    imageAlt: "AI Professional",
  },
  {
    title: "Boost Your\nBusiness with\nSwiftwave.AI Modules",
    description:
      "Automate Repetitive Tasks. Increase Profitability. Ensure 100% Compliance.",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/4_edit_noor.png",  // /hero/hero2.png
    imageAlt: "AI Professional",
  },
  {
    title: "Revolutionising\nRecruitment",  // Revolutionising Recruitment
    description:
      "Meet Your 24/7 Recruiter — Driving Sales Higher!\nSwiftwave.AI works while you sleep — verifying applicants, formatting CVs, and loading ID & qualifications straight into your CRM. Faster submissions - Less admin.",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/hero/hero2.png",
    imageAlt: "AI Professional",
  },
];
