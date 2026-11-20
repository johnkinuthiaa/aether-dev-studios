import type { Metadata } from "next";
import DemoOne from "@/components/ui/demo";

export const metadata: Metadata = {
  title: "Hero Demo | Aether Tech Studios",
  description: "Cinematic Hero Demonstration for Aether Tech Studios",
};

export default function DemoPage() {
  return <DemoOne />;
}
