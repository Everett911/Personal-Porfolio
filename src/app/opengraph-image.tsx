import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Preview card shown when the site is shared on LinkedIn, Facebook, Messenger, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 80% 20%, #163a38 0%, #0f1418 55%)",
          color: "#f0f2f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
          {site.initials}
          <span style={{ color: "#20b2a6" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700 }}>{site.name}</div>
          <div style={{ fontSize: 36, color: "#20b2a6" }}>
            {`${site.role} · React · TypeScript · Next.js`}
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#8b95a1" }}>{site.location}</div>
      </div>
    ),
    size,
  );
}
