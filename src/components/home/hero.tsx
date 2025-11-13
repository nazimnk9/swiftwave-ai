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
    title: "AI Lead Generator",
    description:
      "Sales team sleeping → 24/7 warm lead capture → auto to CRM → +50% more sales ✓",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/1_edited_noor_v1.png",  // hero/caro_1.png
    imageAlt: "AI Professional",
  },
  {
    title: "AI Recruiter",
    description:
      "24/7 auto-screen → auto CV format → auto docs to CRM → submission-ready ✓",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/new_edited_noor_v3.png",    // /hero.png
    imageAlt: "AI Professional",
  },
  {
    title: "AI Skill Search",
    description:
      "Instant skill search → auto docs updated → CRM-ready → 100% compliance ✓",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/new_pics/4_edit_noor.png",  // /hero/hero2.png
    imageAlt: "AI Professional",
  },
  {
    title: "AI Cost Savings",  // Revolutionising Recruitment
    description:
      "AI 24/7 → 50% less admin → fewer staff needed → lower costs → higher profit ✓",
    buttonText1: "Start Free Trial",
    buttonText2: "Check Apps",
    imageSrc: "/hero/hero2.png",
    imageAlt: "AI Professional",
  },
];
