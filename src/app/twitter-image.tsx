import { ImageResponse } from "next/og";

export const alt = "Aether Tech Studios - Backend Solutions, App Dev, Distributed Systems & Paid Ads";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
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
          Aether Tech Studios
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 60, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.04em", color: "#ffffff" }}>
            Backend Solutions & Distributed Systems
          </div>
          <div style={{ fontSize: 30, color: "#94a3b8", maxWidth: 980 }}>
            App Dev • API Engineering • AI Design Cleanup • Google, Meta & TikTok Ads
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#38bdf8", fontWeight: 700 }}>
          High-Throughput Engineering & Full-Funnel Performance Marketing
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
