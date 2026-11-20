import type { Metadata } from "next";
import MeadowRiseFooterDemo from "@/components/ui/meadow-rise-footer-demo";

export const metadata: Metadata = {
  title: "Meadow Rise Footer Demo",
  description: "Interactive Meadow Rise Footer Demonstration",
};

export default function FooterDemoPage() {
  return <MeadowRiseFooterDemo />;
}
