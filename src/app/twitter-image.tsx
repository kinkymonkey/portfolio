import { ImageResponse } from "next/og";

export const alt = "Justin Henry Teh, Creative Operations Director";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b101c",
          color: "#fff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, textTransform: "uppercase" }}>
          Justin Henry Teh
        </div>
        <div style={{ fontSize: 96, fontStyle: "italic", marginTop: 32 }}>
          Creative Operations
        </div>
        <div style={{ fontSize: 30, marginTop: 32, opacity: 0.8 }}>
          20+ years designing. 8 running teams. AI in the pipeline.
        </div>
      </div>
    ),
    size,
  );
}
