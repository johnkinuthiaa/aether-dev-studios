import type { Metadata } from "next";
import CloudShaderDemo from "@/components/ui/cloud-shader-demo";

export const metadata: Metadata = {
  title: "Cloud Shader Demo | Hero Background",
  description: "Interactive WebGL Cloud Shader Demonstration",
};

export default function CloudDemoPage() {
  return <CloudShaderDemo />;
}
