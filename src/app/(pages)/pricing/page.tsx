"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Create a client component that uses useSearchParams
function TabSelector({
  setActiveTab,
}: {
  setActiveTab: (tab: string) => void;
}) {
  const searchParams = useSearchParams();
  const validTabs = Object.keys(tabData);

  // Update activeTab when the query parameter changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && validTabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams, validTabs, setActiveTab]);

  return null; // This component just handles the params, doesn't render anything
}

export default function PricingPage() {
  const validTabs = Object.keys(tabData);
  const [activeTab, setActiveTab] = useState<string>(validTabs[0]);
  const router = useRouter();

  // Function to handle tab changes - updates both state and URL
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/pricing?tab=${tab}`);
  };

  return (
    <div className="my-2 flex min-h-screen w-full items-start justify-center px-1 py-4 text-text sm:my-4 md:my-6 lg:my-12 lg:px-2 lg:py-8">
      {/* Wrap the component using useSearchParams in Suspense */}
      <Suspense fallback={null}>
        <TabSelector setActiveTab={setActiveTab} />
      </Suspense>

      <div className="w-full max-w-7xl">
        <h1 className="mb-3 bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:mb-6 lg:text-5xl">
          Straightforward Plans. Powerful Results
        </h1>
        <p className="mx-auto mb-6 max-w-2xl px-2 text-center text-sm opacity-60 sm:mb-8 sm:text-base lg:mb-[50px]">
          Whether you&apos;re just starting out or scaling to millions of
          WhatsApp messages, we offer flexible plans tailored to your needs—so
          you can focus on impact, not complexity.
        </p>

        <div className="mb-4 px-2 sm:px-0 lg:mb-8">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 lg:px-2 ${
                  activeTab === tab
                    ? "primary-button text-black shadow-lg"
                    : "bg-primary/20 hover:bg-primary/30"
                }`}
              >
                {tab
                  .replace(/AI|WhatsApp|Whatsapp/g, " $& ")
                  .replace(
                    /([A-Z][a-z]+|[A-Z]{2,}(?=[A-Z][a-z]|\d|\W|$))/g,
                    " $1",
                  )
                  .replace(/Whats App/g, "WhatsApp")
                  .trim()}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-primary/5 p-4 shadow-xl sm:p-6 lg:rounded-2xl lg:p-8 lg:shadow-2xl">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:mb-6">
              {tabData[activeTab].title}
            </h2>
            <p className="mb-6 text-base opacity-80 lg:mb-8 lg:text-lg">
              {tabData[activeTab].description}
            </p>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tabData[activeTab].plans.map((plan, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-primary/10 p-6 transition-all duration-300 hover:bg-primary/20 sm:rounded-xl sm:p-8"
                >
                  <h3 className="mb-4 text-lg font-semibold sm:text-xl">
                    {plan.name}
                  </h3>
                  <p className="mb-4 text-xl font-bold sm:text-2xl">
                    {plan.price}
                  </p>
                  <p className="mb-4 text-xs sm:text-sm">{plan.limit}</p>
                  <p className="mb-6 text-xs opacity-70 sm:mb-8 sm:text-sm">
                    {plan.description}
                  </p>
                  {plan.features && (
                    <ul className="mb-6 space-y-3 text-xs opacity-80 sm:mb-8 sm:space-y-4 sm:text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  )}
                  {plan.cta && (
                    <a
                      href="#"
                      className="primary-button inline-block rounded-lg px-4 py-2 text-sm text-black transition hover:bg-primary sm:px-6 sm:py-3"
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Plan {
  name: string;
  price: string;
  limit?: string;
  description: string;
  features?: string[];
  cta?: string;
}

interface TabData {
  [key: string]: {
    title: string;
    description: string;
    plans: Plan[];
  };
}

const tabData: TabData = {
  AIWhatsAppRecruiter: {
    title: "AI WhatsApp Recruiter",
    description:
      "Automate WhatsApp-based recruitment interviews with AI-driven workflows.",
    plans: [
      {
        name: "Starter",
        price: "$99/Month",
        limit: "120 WhatsApp Recruit Interviews",
        description:
          "For individuals or small teams just getting started with WhatsApp messaging.",
        features: [
          "AI sends automated WhatsApp messages to job applicants",
          "Interview questions generated instantly from your job ad",
          "Fully automated WhatsApp interview process",
          "Pre-application link sent to successful applicants",
          "Change Job Application status automatically based on Interview result.",
          "Attached ID & qualifications go straight to your CRM",
          "Option to integrate with AI CV Formatter – saving up to 70% of recruiter admin time",
        ],
      },
      {
        name: "Growth",
        price: "$199/Month",
        limit: "250 WhatsApp Recruit Interviews",
        description:
          "Ideal for growing businesses that need more messaging power and automation features.",
        features: ["All the features of Starter package, with more interviews"],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },

  AIPhoneCallRecruiter: {
    title: "AI Phone Call Recruiter",
    description:
      "Automate phone call recruitment interviews with AI-driven workflows.",
    plans: [
      {
        name: "Starter",
        price: "$199/Month",
        limit: "200 Phone Call Recruit Interviews",
        description:
          "For individuals or small teams just getting started with WhatsApp messaging.",
        features: [
          "AI sends automated Phone call to job applicants",
          "Interview questions generated instantly from your job ad",
          "Fully automated Phone call interview process",
          "Pre-application link sent to successful applicants through phone sms",
          "Change Job Application status automatically based on Interview result.",
          "Attached ID & qualifications go straight to your CRM",
          "Option to integrate with AI CV Formatter – saving up to 70% of recruiter admin time",
        ],
      },
      {
        name: "Growth",
        price: "$299/Month",
        limit: "350 Phone Call Recruit Interviews",
        description:
          "Ideal for growing businesses that need more messaging power and automation features.",
        features: [
          "All the features of Starter package, with more interviews",
          "Connect your own Elevenlabs API, and your custom Voice ID from Elevenlabs",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },

  AICVFormatter: {
    title: "AI CV Formatter",
    description:
      "Format CVs with powerful AI models to highlight key information and remove clutter.",
    plans: [
      {
        name: "Starter",
        price: "$49/Month",
        limit: "120 formatted CVs",
        description:
          "For individuals or small teams just getting started with CV formatting.",
        features: [
          "Format CV with powerful AI models",
          "Gather necessary information which you need to see first",
          "Clear out extra things from CVs and give you what you need to know",
        ],
      },
      {
        name: "Growth",
        price: "$99/Month",
        limit: "250 formatted CVs",
        description:
          "Ideal for growing businesses that need more formatting power and advanced features.",
        features: [
          "Format CV with powerful AI models",
          "Gather necessary information which you need to see first",
          "Clear out extra things from CVs and give you what you need to know",
          "Mark or unmark information points to include or exclude in the CV",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },

  AIGDPRCompliance: {
    title: "AI GDPR Compliance",
    description: "Ensure compliance with GDPR regulations effortlessly.",
    plans: [
      {
        name: "Starter",
        price: "$49/Month",
        limit: "200 GDPR Compliance Cases",
        description:
          "For individuals or small teams just getting started with GDPR compliance.",
        features: [
          "Send compliant consent requests via email",
          "Capture YES/NO replies instantly",
          "Maintain an immutable audit trail",
          "Sync consent status with JobAdder records",
        ],
      },
      {
        name: "Growth",
        price: "$99/Month",
        limit: "500 GDPR Compliance Cases",
        description:
          "Ideal for growing businesses that need more compliance management features.",
        features: [
          "All the features of Starter package, with more cases",
          "Automated follow-ups for non-responders or unclear replies",
          "Multi-domain sending with branded templates",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },

  AIAWRCompliance: {
    title: "AWR Compliance",
    description: "Assist with AWR compliance processes efficiently.",
    plans: [
      {
        name: "Starter",
        price: "$49/Month",
        limit: "200 AWR Compliance Cases",
        description:
          "For individuals or small teams just getting started with AWR compliance.",
        features: [
          "Automatic tracking of qualifying periods",
          "Proactive alerts for upcoming compliance deadlines",
          "Sync AWR status with JobAdder records",
          "Immutable audit trail for compliance",
        ],
      },
      {
        name: "Growth",
        price: "$99/Month",
        limit: "500 AWR Compliance Cases",
        description:
          "Ideal for growing businesses that need more compliance management features.",
        features: [
          "All the features of Starter package, with more cases",
          "Configurable AWR rules and alert thresholds",
          "Multi-brand placement tracking and reporting",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Price & Features",
        cta: "Request a call",
        description:
          "Built for high-volume senders and enterprises that demand performance, reliability, and advanced support.",
      },
    ],
  },
};
