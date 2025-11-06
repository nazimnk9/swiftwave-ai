import ModuleCard from "./module-card";

const ModulesSection = () => {
  return (
    <section className="my-8 rounded-md bg-background px-4 py-12 md:px-8 lg:my-16 lg:px-16">
      <h2 className="mb-10 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%]">
        Our AI Modules
      </h2>
      <p className="mb-8 text-text">
        Our AI-powered solutions significantly reduce your overhead costs while
        accelerating hiring by 100% with full compliance. We enhance efficiency
        across your operations, and with our upcoming sales modules and advanced
        technology, you will grow your business faster than ever. Explore our
        modules below to place your order.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <ModuleCard key={index} {...module} />
        ))}
      </div>
    </section>
  );
};

const modules = [
  {
    uid: "AI-Phone-Call-Recruiter",
    tabid: "AIPhoneCallRecruiter",
    title: "AI Phone Call Recruiter",
    description:
      "When applicants don't respond to WhatsApp, this revolutionary technology calls them directly. If the applicant meets all qualification criteria, they receive a secure link to upload their ID & certificates directly to your CRM system.",
    imageSrc: "/apps/ai-telephone-call.png",
    imageAlt: "AI Telephone Call Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-WhatsApp-Recruiter",
    tabid: "AIWhatsAppRecruiter",
    title: "AI WhatsApp Recruiter",
    description:
      "Our seamless automated workflow ensures smooth transitions throughout the entire recruitment journey, from initial candidate selection to onboarding productive employees.",
    imageSrc: "/apps/ai-whatsapp-chatbot.png",
    imageAlt: "AI WhatsApp Chatbot Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-SMS-Recruiter",
    tabid: "AISMSRecruiter",
    title: "AI SMS Recruiter",
    description:
      "AI messages new applicants instantly, checking skills and right-to-work info. If qualified, it texts a secure link for ID and document upload straight into your CRM 24/7, while you sleep.",
    imageSrc: "/apps/ai_sms.png",
    imageAlt: "AI SMS Recruiter",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-Client-Lead-Generation",
    tabid: "AIClientLeadGeneration",
    title: "AI Client Lead Generation",
    description:
      "Intelligently identifies new opportunities and rekindles old connections within your CRM. automatically. It sends content, messages, and meeting invites 24/7, warming leads so a human can focus on closing.",
    imageSrc: "/apps/ai-client-lead-generation.png",
    imageAlt: "AI Client Lead Generation",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-Candidate-Skill-Search",
    tabid: "AICandidateSkillSearch",
    title: "AI Candidate Skill Search",
    description:
      "AI scans your CRM to rediscover skilled candidates you already own. Reduce ad spend and time-to-hire with automated skill matching to job vacancy.",
    imageSrc: "/apps/ai-ocr-skill-search.png",
    imageAlt: "AI Candidate Skill Search",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-CV-Formatter",
    tabid: "AICVFormatter",
    title: "AI CV Formatter",
    description:
      "Automatically remove applicants' contact details, enhance wording for professionalism, and add your company logo. This enables consultants to send polished CVs to companies faster, increasing sales.",
    imageSrc: "/apps/ai-cv-formatting.png",
    imageAlt: "AI CV Formatting Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-GDPR-Compliance",
    tabid: "AIGDPRCompliance",
    title: "AI GDPR Compliance",
    description:
      "Achieve 100% GDPR compliance with our comprehensive data protection solution. Our AI works around the clock to automatically contact candidates and update your database in accordance with all current regulations.",
    imageSrc: "/apps/ai-gdpr.png",
    imageAlt: "AI GDPR Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  {
    uid: "AI-AWR-Compliance",
    tabid: "AIAWRCompliance",
    title: "AI AWR Compliance",
    description:
      "Maintain complete Agency Workers Regulations compliance effortlessly. Our intelligent system proactively communicates with companies, ensuring your business remains fully compliant while reducing your administrative burden.",
    imageSrc: "/apps/ai-awr.png",
    imageAlt: "AI AWR Illustration",
    buttonText1: "See More",
    buttonText2: "Pricing",
  },
  // {
  //   title: "AI Candidate Skill Search",
  //   commingSoon: true,
  //   imageSrc: "/apps/candidate_skill.webp",
  //   imageAlt: "AI Candidate Skill Search Illustration",
  //   buttonText1: "Pre-Order",
  // },
  // {
  //   title: "AI Verifier",
  //   commingSoon: true,
  //   imageSrc: "/apps/ai_verifier.webp",
  //   imageAlt: "AI Verifier Illustration",
  //   buttonText1: "Pre-Order",
  // },
];

export default ModulesSection;
