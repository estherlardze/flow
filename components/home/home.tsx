"use client";

import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { DashboardPreview } from "./dashboard-preview";
import { Features } from "./features";
import { Testimonials } from "./testimonials";
import { Pricing } from "./pricing";
import { FinalCTA } from "./final-cta";
import { Footer } from "./footer";
import { Benefits } from "./why-choose-us";
import { Metrics } from "./social-proof";
import { FAQ as Faqs } from "./faqs";
import { LeadLossSection } from "./spreadsheets";
import { Loader } from "../ui/loader";

export function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <Metrics />
        <LeadLossSection />
        <Features />

        {/* <DashboardPreview /> */}
        {/* <Testimonials /> */}
        <Benefits />

        <Pricing />
        <Faqs />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
