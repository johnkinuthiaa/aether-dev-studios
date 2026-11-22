"use client";

import { PrismaHero } from "@/components/ui/prisma-hero";
import FeatureUIRowDemo from "@/components/ui/feature-ui-row-demo";
import BentoGridShowcaseDemo from "@/components/ui/bento-product-features-demo";

export default function DemoOne() {
  return <PrismaHero />;
}

export { DemoOne, PrismaHero, DemoOne as PeakChartDemo, FeatureUIRowDemo, BentoGridShowcaseDemo };
