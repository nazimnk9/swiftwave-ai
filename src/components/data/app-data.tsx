import { CheckCircleIcon, GlobeIcon, MenuIcon, ShieldIcon } from "lucide-react";

export const appData = [
  {
    uid: "AI-Phone-Call-Recruiter",
    hero: {
      badge: "App • AI Phone Call",
      title: "Instant Phone Interviews on Autopilot",
      //highlight: "Automatically",
      description:
        "Call applicants the moment they apply. Our AI conducts structured voice interviews, transcribes answers in real time, scores candidates, and updates your Business CRM records—so your team advances the right people faster.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/apps/ai-telephone-call.png",
          alt: "Phone interview preview",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle:
        "Use AI Phone Call Recruiter with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect Voice",
          description:
            "Link your Twilio Voice (or SIP) numbers. Choose caller IDs, call windows, retries, and country rules.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Authorize once to sync candidates & applications. Select the jobs or stages to auto-interview.",
        },
        {
          number: "3",
          title: "Design the Script",
          description:
            "Pick questions, scoring weights, knockouts, consent text, and fallback prompts for voicemail.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "We place calls, handle speech-to-text & text-to-speech, generate transcripts, scorecards, and Business CRM updates.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Natural, structured phone interviews",
        description:
          "Conversational AI asks role-specific questions, confirms key facts (visa, notice, shift availability), and adapts follow-ups—all by voice. Candidates don’t need apps or links.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Live transcription & scoring",
        description:
          "We transcribe in real time, map answers to your rubric, apply knockouts, and produce a red/amber/green scorecard plus highlights.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Scheduling & voicemail fallback",
        description:
          "Offer time slots, confirm interviews, and send reminders. If unavailable, leave a tailored voicemail and auto-retry within your window.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Full Business CRM sync",
        description:
          "Create/update candidates, attach recordings & transcripts, push notes/tags, move stages, and update custom fields automatically.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI Phone Call Recruiter",
      subtitle: "Included",
      items: [
        {
          title: "Outbound dialer & retries",
          description:
            "Configurable attempts, pacing, time-zones, do-not-call lists, and warm transfer to humans.",
        },
        {
          title: "Multilingual voices",
          description:
            "Natural TTS in many languages; auto-detect and switch language within a call when needed.",
        },
        {
          title: "Compliance & consent",
          description:
            "Built-in GDPR prompts, opt-out handling, and suppression that mirrors your policy.",
        },
        {
          title: "Quality assurance",
          description:
            "Recordings, transcripts, sentiment & talk-ratio analytics, and supervisor review queues.",
        },
        {
          title: "Analytics & exports",
          description:
            "Contact rates, completion rates, time-to-screen, conversion by source, and CSV/JSON exports.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit scripts, place calls, review recordings, or export data.",
        },
      ],
    },
    cta: {
      title: "Speak with applicants right away",
      description:
        "Turn on AI Phone Call Recruiter to screen at scale, reduce time-to-hire, and deliver a great candidate experience.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-WhatsApp-Recruiter",
    hero: {
      badge: "App • AI WhatsApp Recruiter",
      title: "Automated WhatsApp Interviews — Instantly.",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI connects with every applicant in real time, running structured chat interviews that screen, score, and schedule candidates automatically while your consultant sleeps! It asks knockout questions, texts a secure link for applicants to submit ID and qualifications, extracts key data, and syncs everything straight into your Business CRM — enabling faster CV submissions, quicker placements, and measurable sales growth.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/apps/ai-whatsapp-chatbot.png",
          alt: "WhatsApp interview preview",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI WhatsApp Recruiter with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect WhatsApp",
          description:
            "Link your WhatsApp Business API (Meta or Twilio). We’ll verify your number and templates for compliant messaging.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Authorize once to sync candidates & applications. Pick the jobs or pipelines you want to automate.",
        },
        {
          number: "3",
          title: "Choose Questions",
          description:
            "Select your screening set: eligibility, skills, availability, salary, location, and knockout logic. Add GDPR notice.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "We auto-invite applicants, run interviews, score results, book calendars, and write everything back to Business CRM.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Structured chat interviews",
        description:
          "Conversational, yet standardized. The bot adapts follow-ups, validates formats (e.g., visa type, years of experience), and collects files like CVs—without leaving WhatsApp.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Scoring, knockouts & shortlists",
        description:
          "Define weighted scores, knockout conditions, and auto-shortlist rules. Generate red/amber/green recommendations per candidate and job.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Calendar booking & handoff",
        description:
          "Offer time slots, confirm meetings, and send reminders. When ready, hand off to a recruiter or hiring manager in your chosen stage.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Full Business CRM sync",
        description:
          "Create/update candidates, attach transcripts & files, push notes and tags, move stages, and update custom fields—fully traceable.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI WhatsApp Recruiter",
      subtitle: "Included",
      items: [
        {
          title: "Template approval support",
          description:
            "Pre-approved message templates and variables for Meta/Twilio, plus fallbacks when sessions expire.",
        },
        {
          title: "Multilingual interviews",
          description:
            "Auto-detect language and run localized flows with consistent scoring across locales.",
        },
        {
          title: "GDPR consent capture",
          description:
            "Built-in consent prompts and logging; sync status to Business CRM and suppress when withdrawn.",
        },
        {
          title: "Media & file support",
          description:
            "Receive CVs, portfolios, and IDs. Virus-scan and attach to candidate profiles automatically.",
        },
        {
          title: "Analytics & exports",
          description:
            "Funnel metrics, conversion by source, time-to-screen, and CSV/JSON exports for reporting.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit flows, send campaigns, or export data across teams and brands.",
        },
      ],
    },
    cta: {
      title: "Interview applicants the moment they apply",
      description:
        "Switch on AI WhatsApp Recruiter to screen at scale, cut time-to-hire, and improve candidate experience.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-SMS-Recruiter",
    hero: {
      badge: "App • AI SMS Recruiter",
      title: "Smart, Automated Text Recruiting",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI engages applicants automatically — running structured SMS interviews, asking key screening questions, scoring responses, and scheduling candidates while your consultants sleep! Automatically sends a secure link to upload ID and qualifications, syncing verified data straight into your CRM for faster placements, stronger conversions, enabling faster CV submissions, quicker placements and measurable sales growth 24/7.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/apps/ai-whatsapp-chatbot.png",
          alt: "WhatsApp interview preview",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI WhatsApp Recruiter with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect WhatsApp",
          description:
            "Link your WhatsApp Business API (Meta or Twilio). We’ll verify your number and templates for compliant messaging.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Authorize once to sync candidates & applications. Pick the jobs or pipelines you want to automate.",
        },
        {
          number: "3",
          title: "Choose Questions",
          description:
            "Select your screening set: eligibility, skills, availability, salary, location, and knockout logic. Add GDPR notice.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "We auto-invite applicants, run interviews, score results, book calendars, and write everything back to Business CRM.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Structured chat interviews",
        description:
          "Conversational, yet standardized. The bot adapts follow-ups, validates formats (e.g., visa type, years of experience), and collects files like CVs—without leaving WhatsApp.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Scoring, knockouts & shortlists",
        description:
          "Define weighted scores, knockout conditions, and auto-shortlist rules. Generate red/amber/green recommendations per candidate and job.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Calendar booking & handoff",
        description:
          "Offer time slots, confirm meetings, and send reminders. When ready, hand off to a recruiter or hiring manager in your chosen stage.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Full Business CRM sync",
        description:
          "Create/update candidates, attach transcripts & files, push notes and tags, move stages, and update custom fields—fully traceable.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI WhatsApp Recruiter",
      subtitle: "Included",
      items: [
        {
          title: "Template approval support",
          description:
            "Pre-approved message templates and variables for Meta/Twilio, plus fallbacks when sessions expire.",
        },
        {
          title: "Multilingual interviews",
          description:
            "Auto-detect language and run localized flows with consistent scoring across locales.",
        },
        {
          title: "GDPR consent capture",
          description:
            "Built-in consent prompts and logging; sync status to Business CRM and suppress when withdrawn.",
        },
        {
          title: "Media & file support",
          description:
            "Receive CVs, portfolios, and IDs. Virus-scan and attach to candidate profiles automatically.",
        },
        {
          title: "Analytics & exports",
          description:
            "Funnel metrics, conversion by source, time-to-screen, and CSV/JSON exports for reporting.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit flows, send campaigns, or export data across teams and brands.",
        },
      ],
    },
    cta: {
      title: "Interview applicants the moment they apply",
      description:
        "Switch on AI WhatsApp Recruiter to screen at scale, cut time-to-hire, and improve candidate experience.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-Client-Lead-Generation",
    hero: {
      badge: "App • AI Client Lead Generation",
      title: "Automated Client Engagement — 24/7",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI identifies warm leads from your CRM and candidate data, messaging prospects automatically with brochures, service literature, and meeting links. It tracks replies, syncs every interaction straight into CRM Opportunities, and keeps your consultants supplied with pre-warmed leads ready to close. The result — faster meetings, stronger conversions, and measurable sales growth 24/7.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/apps/ai-whatsapp-chatbot.png",
          alt: "WhatsApp interview preview",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI WhatsApp Recruiter with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect WhatsApp",
          description:
            "Link your WhatsApp Business API (Meta or Twilio). We’ll verify your number and templates for compliant messaging.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Authorize once to sync candidates & applications. Pick the jobs or pipelines you want to automate.",
        },
        {
          number: "3",
          title: "Choose Questions",
          description:
            "Select your screening set: eligibility, skills, availability, salary, location, and knockout logic. Add GDPR notice.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "We auto-invite applicants, run interviews, score results, book calendars, and write everything back to Business CRM.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Structured chat interviews",
        description:
          "Conversational, yet standardized. The bot adapts follow-ups, validates formats (e.g., visa type, years of experience), and collects files like CVs—without leaving WhatsApp.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Scoring, knockouts & shortlists",
        description:
          "Define weighted scores, knockout conditions, and auto-shortlist rules. Generate red/amber/green recommendations per candidate and job.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Calendar booking & handoff",
        description:
          "Offer time slots, confirm meetings, and send reminders. When ready, hand off to a recruiter or hiring manager in your chosen stage.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Full Business CRM sync",
        description:
          "Create/update candidates, attach transcripts & files, push notes and tags, move stages, and update custom fields—fully traceable.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI WhatsApp Recruiter",
      subtitle: "Included",
      items: [
        {
          title: "Template approval support",
          description:
            "Pre-approved message templates and variables for Meta/Twilio, plus fallbacks when sessions expire.",
        },
        {
          title: "Multilingual interviews",
          description:
            "Auto-detect language and run localized flows with consistent scoring across locales.",
        },
        {
          title: "GDPR consent capture",
          description:
            "Built-in consent prompts and logging; sync status to Business CRM and suppress when withdrawn.",
        },
        {
          title: "Media & file support",
          description:
            "Receive CVs, portfolios, and IDs. Virus-scan and attach to candidate profiles automatically.",
        },
        {
          title: "Analytics & exports",
          description:
            "Funnel metrics, conversion by source, time-to-screen, and CSV/JSON exports for reporting.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit flows, send campaigns, or export data across teams and brands.",
        },
      ],
    },
    cta: {
      title: "Interview applicants the moment they apply",
      description:
        "Switch on AI WhatsApp Recruiter to screen at scale, cut time-to-hire, and improve candidate experience.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-Candidate-Skill-Search",
    hero: {
      badge: "App • AI Candidate Skill Search",
      title: "Smart, Automated Talent Matching",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI activates instantly when a new job goes live — searching your CRM automatically to identify candidates with the right skills, qualifications, and availability while your consultants sleep! It analyses location and distance to match candidates closest to the job, ranking profiles and preparing client-ready shortlists automatically. Verified matches flow straight into your CRM, enabling faster placements, stronger client delivery, and measurable sales growth 24/7.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/apps/ai-whatsapp-chatbot.png",
          alt: "WhatsApp interview preview",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI WhatsApp Recruiter with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect WhatsApp",
          description:
            "Link your WhatsApp Business API (Meta or Twilio). We’ll verify your number and templates for compliant messaging.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Authorize once to sync candidates & applications. Pick the jobs or pipelines you want to automate.",
        },
        {
          number: "3",
          title: "Choose Questions",
          description:
            "Select your screening set: eligibility, skills, availability, salary, location, and knockout logic. Add GDPR notice.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "We auto-invite applicants, run interviews, score results, book calendars, and write everything back to Business CRM.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Structured chat interviews",
        description:
          "Conversational, yet standardized. The bot adapts follow-ups, validates formats (e.g., visa type, years of experience), and collects files like CVs—without leaving WhatsApp.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Scoring, knockouts & shortlists",
        description:
          "Define weighted scores, knockout conditions, and auto-shortlist rules. Generate red/amber/green recommendations per candidate and job.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Calendar booking & handoff",
        description:
          "Offer time slots, confirm meetings, and send reminders. When ready, hand off to a recruiter or hiring manager in your chosen stage.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Full Business CRM sync",
        description:
          "Create/update candidates, attach transcripts & files, push notes and tags, move stages, and update custom fields—fully traceable.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI WhatsApp Recruiter",
      subtitle: "Included",
      items: [
        {
          title: "Template approval support",
          description:
            "Pre-approved message templates and variables for Meta/Twilio, plus fallbacks when sessions expire.",
        },
        {
          title: "Multilingual interviews",
          description:
            "Auto-detect language and run localized flows with consistent scoring across locales.",
        },
        {
          title: "GDPR consent capture",
          description:
            "Built-in consent prompts and logging; sync status to Business CRM and suppress when withdrawn.",
        },
        {
          title: "Media & file support",
          description:
            "Receive CVs, portfolios, and IDs. Virus-scan and attach to candidate profiles automatically.",
        },
        {
          title: "Analytics & exports",
          description:
            "Funnel metrics, conversion by source, time-to-screen, and CSV/JSON exports for reporting.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit flows, send campaigns, or export data across teams and brands.",
        },
      ],
    },
    cta: {
      title: "Interview applicants the moment they apply",
      description:
        "Switch on AI WhatsApp Recruiter to screen at scale, cut time-to-hire, and improve candidate experience.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-WhatsApp-Picture-to-CRM",
    hero: {
      badge: "App • AI WhatsApp Picture to CRM",
      title: "Smart, Automated Document Capture.",
      //highlight: "Automatically",
      description:
        "Swiftwave.AI allows new applicants and existing candidates to send photos of their ID, Right to Work, and qualification documents directly through WhatsApp while your consultants sleep! The AI reads, verifies, and uploads data and images straight into your CRM candidate profiles, keeping records accurate and compliant automatically. Every update flows instantly to your system, enabling faster onboarding, zero manual admin, and stronger compliance 24/7.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        {
          src: "/apps/ai-whatsapp-chatbot.png",
          alt: "WhatsApp interview preview",
        },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI WhatsApp Recruiter with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect WhatsApp",
          description:
            "Link your WhatsApp Business API (Meta or Twilio). We’ll verify your number and templates for compliant messaging.",
        },
        {
          number: "2",
          title: "Connect Business CRM",
          description:
            "Authorize once to sync candidates & applications. Pick the jobs or pipelines you want to automate.",
        },
        {
          number: "3",
          title: "Choose Questions",
          description:
            "Select your screening set: eligibility, skills, availability, salary, location, and knockout logic. Add GDPR notice.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "We auto-invite applicants, run interviews, score results, book calendars, and write everything back to Business CRM.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Structured chat interviews",
        description:
          "Conversational, yet standardized. The bot adapts follow-ups, validates formats (e.g., visa type, years of experience), and collects files like CVs—without leaving WhatsApp.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Scoring, knockouts & shortlists",
        description:
          "Define weighted scores, knockout conditions, and auto-shortlist rules. Generate red/amber/green recommendations per candidate and job.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Calendar booking & handoff",
        description:
          "Offer time slots, confirm meetings, and send reminders. When ready, hand off to a recruiter or hiring manager in your chosen stage.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Full Business CRM sync",
        description:
          "Create/update candidates, attach transcripts & files, push notes and tags, move stages, and update custom fields—fully traceable.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI WhatsApp Recruiter",
      subtitle: "Included",
      items: [
        {
          title: "Template approval support",
          description:
            "Pre-approved message templates and variables for Meta/Twilio, plus fallbacks when sessions expire.",
        },
        {
          title: "Multilingual interviews",
          description:
            "Auto-detect language and run localized flows with consistent scoring across locales.",
        },
        {
          title: "GDPR consent capture",
          description:
            "Built-in consent prompts and logging; sync status to Business CRM and suppress when withdrawn.",
        },
        {
          title: "Media & file support",
          description:
            "Receive CVs, portfolios, and IDs. Virus-scan and attach to candidate profiles automatically.",
        },
        {
          title: "Analytics & exports",
          description:
            "Funnel metrics, conversion by source, time-to-screen, and CSV/JSON exports for reporting.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit flows, send campaigns, or export data across teams and brands.",
        },
      ],
    },
    cta: {
      title: "Interview applicants the moment they apply",
      description:
        "Switch on AI WhatsApp Recruiter to screen at scale, cut time-to-hire, and improve candidate experience.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-CV-Formatter",
    hero: {
      badge: "App • AI CV Formatter",
      title: "Perfectly Formatted CVs in Seconds",
      //highlight: "Automatically",
      description:
        "Turn messy resumes into clean, branded CVs automatically. Our AI extracts skills and history, normalizes titles and dates, applies your templates, and updates Business CRM—ready to share with clients instantly.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        { src: "/apps/ai-cv-formatting.png", alt: "CV formatting preview" },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle:
        "How to use AI CV Formatter with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect your Business CRM",
          description:
            "From Integration → click on Connect Business CRM account.",
        },
        {
          number: "2",
          title: "Go to Apps",
          description:
            "Find AI CV Formatter. Click on Purchase, or Configure if you already have the subscription.",
        },
        {
          number: "3",
          title: "Mark or unmark topics",
          description:
            "Select the topics you want to include or exclude for formatting.",
        },
        {
          number: "4",
          title: "Finish & Start",
          description: "Complete other configuration and start the App!",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Best-in-class parsing",
        description:
          "Extracts experience, education, certifications, skills, locations, and contact details—even from complex layouts and images—with normalization for titles and dates.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Brand-ready templates",
        description:
          "Choose from multiple layouts or bring your own. Keep fonts, spacing, and colors consistent across all submissions.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Role-aware summaries",
        description:
          "Generate concise summaries tailored to the target job. Highlight relevant achievements, tools, and keywords for ATS compatibility.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Duplicates & data hygiene",
        description:
          "Detect duplicate candidates, standardize contact details, and fix formatting issues before updating your ATS.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI CV Formatter",
      subtitle: "Included",
      items: [
        {
          title: "Multi-format support",
          description: "PDF, DOCX, RTF, images—with OCR for scans and photos.",
        },
        {
          title: "Skills taxonomy",
          description:
            "Map skills to your internal taxonomy and Business CRM custom fields.",
        },
        {
          title: "Template variables",
          description:
            "Dynamic placeholders for name, role, summary, competencies, and brand assets.",
        },
        {
          title: "Export & share",
          description:
            "Generate secure links, watermarks, and view tracking for client submissions.",
        },
        {
          title: "Analytics",
          description:
            "View rates, template usage, turnaround time, and conversion to interview.",
        },
        {
          title: "Role-based access",
          description:
            "Control who can edit templates, export, or share outside the org.",
        },
      ],
    },
    cta: {
      title: "Send polished, branded CVs—fast",
      description:
        "Switch on AI CV Formatter to standardize resumes and showcase candidates professionally with minimal effort.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-GDPR-Compliance",
    hero: {
      badge: "App • AI GDPR Compliance",
      title: "Collect & Track Candidate Consent",
      //highlight: "Automatically",
      description:
        "Send compliant consent requests from Swiftwave.AI via email, capture YES/NO replies instantly, and maintain an immutable audit trail synced with your Business CRM records.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        { src: "/apps/ai-gdpr.png", alt: "Consent dashboard preview" },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AI GDPR with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect Business CRM",
          description:
            "Go to Integration → Connect Business CRM account. Authorize once to sync candidates & applications.",
        },
        {
          number: "2",
          title: "Activate the App",
          description:
            "Go to Apps → find AI GDPR Compliance. Click Purchase or Configure if already subscribed.",
        },
        {
          number: "3",
          title: "Define Consent Template",
          description:
            "Set your consent purpose(s), privacy-notice link, and YES/NO instructions. Choose sending domain and schedule.",
        },
        {
          number: "4",
          title: "Start",
          description:
            "The assistant sends requests, captures replies, updates records, and stores an immutable audit log automatically.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Automated consent outreach",
        description:
          "Trigger consent emails to candidates from your selected sending domain(s). Use smart segments to keep your database compliant without manual chasing.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "YES/NO capture & classification",
        description:
          "Replies are classified as YES, NO, or Unclear. The assistant updates candidate records and Job Application status rules.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Immutable audit trail",
        description:
          "Every action is recorded and ready for audits and DSAR responses.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Multi-domain sending & brand control",
        description:
          "Send from different domains/brands with dedicated templates and link branding.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AI GDPR",
      subtitle: "Included",
      items: [
        {
          title: "Consent templates",
          description:
            "Create purpose-specific templates with privacy-notice links and auto-expiry rules.",
        },
        {
          title: "Automated follow-ups",
          description:
            "Nudge candidates who didn't respond or sent unclear replies—fully configurable cadences.",
        },
        {
          title: "Withdrawal handling",
          description:
            "Instantly honor NO/withdrawal and suppress future communications.",
        },
        {
          title: "CSV/JSON exports",
          description: "Export consent logs for audits and DSARs.",
        },
        {
          title: "Deliverability insights",
          description:
            "Track bounces, blocks, and engagement to improve capture rates.",
        },
        {
          title: "Role-based access",
          description: "Limit who can send, edit templates, or export logs.",
        },
      ],
    },
    cta: {
      title: "Ready to stay compliant—without the admin?",
      description:
        "Start using AI GDPR Compliance today and keep your Business CRM data clean and consent-safe.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
  {
    uid: "AI-AWR-Compliance",
    hero: {
      badge: "App • AI AWR Compliance (UK)",
      title: "Automate AWR Tracking & Stay Compliant",
      //highlight: "Automatically",
      description:
        "Stay ahead of AWR (Agency Worker Regulations) without lifting a finger. Our AI-powered assistant automatically tracks qualifying periods for each candidate, manages alerts for upcoming compliance deadlines, and ensures your Business CRM records are up to date—across temporary workers, contractors, and hybrid placements.",
      buttons: [
        { label: "How it works", href: "#how-it-works", variant: "primary" },
        { label: "Check Pricing", href: "/pricing", variant: "outline" },
      ],
      carouselImages: [
        { src: "/apps/ai-awr.png", alt: "AWR tracking dashboard" },
      ],
    },
    steps: {
      headingBadge: "Steps",
      headingTitle: "Use AWR Compliance with Business CRM in Swiftwave.AI CRM",
      items: [
        {
          number: "1",
          title: "Connect Business CRM",
          description:
            "Go to Integration → Connect Business CRM account. Authorize once to sync candidates, placements, and assignments.",
        },
        {
          number: "2",
          title: "Enable AWR Rules",
          description:
            "Choose default AWR rules (e.g., 12-week qualifying period) and your alert thresholds (e.g., 2 weeks/1 week/48 hours).",
        },
        {
          number: "3",
          title: "Map Time & Breaks",
          description:
            "Define how you record weeks worked, breaks between assignments, and supplier/client exceptions for accurate roll-ups.",
        },
        {
          number: "4",
          title: "Go Live",
          description:
            "The assistant tracks qualifying periods, fires alerts, updates Business CRM, and keeps a complete compliance trail.",
        },
      ],
    },
    features: [
      {
        icon: <MenuIcon />,
        title: "Automatic qualifying-period tracking",
        description:
          "Track each worker’s weeks worked across assignments and sites. Account for breaks, supplier changes, and client-specific counting rules to get an accurate AWR status at a glance.",
        image: "/hero.png",
      },
      {
        icon: <CheckCircleIcon />,
        title: "Proactive alerts & workflows",
        description:
          "Get early warnings as workers approach the 12-week mark. Trigger templated actions—rate parity checks, benefits alignment, or manager notifications—before deadlines hit.",
        image: "/hero.png",
      },
      {
        icon: <ShieldIcon />,
        title: "Single source of truth",
        description:
          "Syncs with Business CRM placements and timesheets to make sure your records reflect current AWR status, with notes and change history preserved for audits.",
        image: "/hero.png",
      },
      {
        icon: <GlobeIcon />,
        title: "Multi-brand placements & reports",
        description:
          "Whether you run multiple brands or supply into multiple clients, keep consolidated dashboards and downloadable AWR reports filtered by client, team, or timeframe.",
        image: "/hero.png",
      },
    ],
    whatYouGet: {
      title: "What you get with AWR Compliance",
      subtitle: "Included",
      items: [
        {
          title: "AWR rules engine",
          description:
            "Configurable timers, carry-over logic, and breaks handling aligned with AWR guidance.",
        },
        {
          title: "Alert cadences",
          description:
            "Email/Slack alerts at thresholds you set (e.g., T-14, T-7, T-2) with owner assignment.",
        },
        {
          title: "Placement health",
          description:
            "Color-coded status on each assignment with exceptions and action checklists.",
        },
        {
          title: "Audit trail",
          description:
            "Immutable log of changes, notes, and confirmations for inspections and disputes.",
        },
        {
          title: "Dashboards & exports",
          description:
            "Team and client views, CSV/JSON exports, and monthly summary emails.",
        },
        {
          title: "Role-based access",
          description:
            "Restrict who can edit rules, acknowledge alerts, or export reports.",
        },
      ],
    },
    cta: {
      title: "Prevent last-minute AWR surprises",
      description:
        "Turn on AWR Compliance to track qualifying periods automatically and keep Business CRM aligned—every day.",
      buttons: [
        { label: "Get Started", href: "#", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "outline" },
      ],
      footerText: "Questions?",
      footerLink: { label: "Contact us", href: "/contact-us" },
    },
  },
];
