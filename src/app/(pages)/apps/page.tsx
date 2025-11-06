import { FC } from "react";
import AppsHero from "@/components/(pages)/apps/apps-hero";
import AppsCard from "@/components/(pages)/apps/apps-card";

const AppsPage: FC = () => {
  return (
    <>
      <AppsHero />
      <div>
        <p className="mx-auto my-8 text-center text-2xl font-bold text-cyan-300 md:my-10 md:text-4xl">
          Choose the AI app that you want
          <br />
          to start with!
        </p>
        <div className="space-y-10">
          {appInfo.map((item) => (
            <AppsCard key={item.id} id={item.id} cardInfo={item} />
          ))}
        </div>
      </div>
    </>
  );
};

const appInfo = [
  {
    id: "1",
    uid: "AI-WhatsApp-Recruiter",
    title: "AI WhatsApp Recruiter",
    description:
      "Turn WhatsApp into your smartest recruiter. Our AI WhatsApp Recruiter engages candidates the moment they apply for a job — conducting structured, real-time interview conversations via WhatsApp. It asks qualifying questions, assesses suitability, collects required documents, and syncs the entire process with Business CRM automatically. No more phone-tag or email delays — just instant, 24/7 recruitment on the platform candidates already use. Perfect for modern recruitment teams seeking speed, consistency, and engagement at scale.",
    image: "/apps/ai-whatsapp-chatbot.png",
  },
  {
    id: "2",
    uid: "AI-Phone-Call-Recruiter",
    title: "AI Phone Call Recruiter",
    description:
      "Revolutionize interviews with our AI-powered phone call bot. As soon as a candidate applies, the system places a professional, natural-sounding call to the applicant's phone and conducts a live automated interview — just like a recruiter would. It asks pre-configured screening questions, captures responses, and logs everything back into Business CRM. This tool not only saves time, but ensures no applicant is ever missed. It's like having a 24/7 voice-based recruiter handling your first-round interviews automatically.",
    image: "/apps/ai-telephone-call.png",
  },
  {
    id: "3",
    uid: "AI-CV-Formatter",
    title: "AI CV Formatter",
    description:
      "Say goodbye to time-consuming manual CV formatting. Our AI CV Formatter takes raw candidate resumes and instantly transforms them into professionally branded, client-ready templates. Whether you're standardizing layout, hiding personal details, or matching client preferences, our system does it all in seconds. Integrated with Business CRM, formatted CVs can be pushed directly to client submissions, helping your team look polished and consistent — every time.",
    image: "/apps/ai-cv-formatting.png",
  },
  {
    id: "4",
    uid: "AI-GDPR-Compliance",
    title: "AI GDPR Compliance",
    description:
      "Managing GDPR obligations manually is risky and time-consuming. Our AI GDPR makes compliance effortless by automating consent tracking, right-to-erasure workflows, data retention policies, and audit logs. It continuously monitors candidate interactions and flags any actions that could breach data protection rules. Integrated tightly with your Business CRM data, it ensures your recruitment operations remain secure, compliant, and fully transparent.",
    image: "/apps/ai-gdpr.png",
  },
  {
    id: "5",
    uid: "AI-AWR-Compliance",
    title: "AWR Compliance",
    description:
      "Stay ahead of AWR (Agency Worker Regulations) compliance without lifting a finger. Our AI-powered AWR Compliance automatically tracks qualifying periods for each candidate, manages alerts for upcoming compliance deadlines, and ensures your Business CRM records are up to date. Whether you're handling temporary workers, contractors, or hybrid placements — this tool gives you full visibility and control over every assignment's legal status.",
    image: "/apps/ai-awr.png",
  },
];

export default AppsPage;
