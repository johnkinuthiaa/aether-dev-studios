import { ImageResponse } from "next/og";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME } from "@/lib/seo";

export const alt = `${SITE_NAME} - ${DEFAULT_TITLE}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 15% 20%, #3b82f61f, transparent 40%), radial-gradient(circle at 85% 85%, #3b82f62a, transparent 35%), #090d16",
          color: "#f8fafc",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: "-0.02em", fontWeight: 700, color: "#38bdf8" }}>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 58, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.04em", color: "#ffffff" }}>
            {DEFAULT_TITLE}
          </div>
          <div style={{ fontSize: 26, color: "#94a3b8", maxWidth: 980, lineHeight: 1.3 }}>
            {DEFAULT_DESCRIPTION}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#38bdf8", fontWeight: 700, letterSpacing: "0.02em" }}>
          High-Throughput Engineering • App Development • Performance Marketing
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
