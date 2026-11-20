import { ImageResponse } from "next/og";

export const alt = "Aether Tech Studios - Design, Web Apps and Zoho Integrations";
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
            "radial-gradient(circle at 15% 20%, #3b82f61f, transparent 40%), radial-gradient(circle at 85% 85%, #3b82f62a, transparent 35%), #f4f7fc",
          color: "#0f172a",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: "-0.02em", fontWeight: 700 }}>Aether Tech Studios</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, lineHeight: 1.03, fontWeight: 800, letterSpacing: "-0.04em" }}>
            Design. Build. Integrate.
          </div>
          <div style={{ fontSize: 34, color: "#334155", maxWidth: 980 }}>
            Conversion-focused design, custom web apps, and end-to-end Zoho integrations for
            businesses and SMEs.
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#1d4ed8", fontWeight: 700 }}>
          Sales • Marketing • Finance • Support • Operations
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
