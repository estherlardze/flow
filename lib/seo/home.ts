import { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "Real Estate CRM | Manage Leads Efficiently",
  description:
    "A modern CRM for real estate professionals. Manage leads, track interactions, and close deals faster with our SaaS platform.",
  keywords: [
    "real estate crm",
    "lead management",
    "property sales",
    "real estate software",
  ],
  openGraph: {
    title: "Real Estate CRM | Manage Leads Efficiently",
    description:
      "A modern CRM for real estate professionals. Manage leads, track interactions, and close deals faster.",
    url: "https://yourdomain.com",
    siteName: "Real Estate CRM",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Real Estate CRM Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate CRM | Manage Leads Efficiently",
    description:
      "A modern CRM for real estate professionals. Manage leads, track interactions, and close deals faster.",
    images: ["https://yourdomain.com/twitter-image.jpg"],
    creator: "@yourhandle",
  },
};
