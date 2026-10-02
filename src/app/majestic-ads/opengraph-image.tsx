import { ImageResponse } from "next/og";

export const alt = "Majestic Ads: a fresh set of ads for your product. $249 for your first set.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Load the page's display font. If the font download fails, the image still renders in the default font.
async function loadFont() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800",
      { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1" } },
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\)/)?.[1];
    if (!url) return undefined;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return undefined;
  }
}

export default async function OpengraphImage() {
  const font = await loadFont();
  const frame = { display: "flex", width: 120, height: 150, borderRadius: 16, background: "#19191c", border: "2px dashed #3a3a40" };
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0b",
          color: "#f5f5f2",
          fontFamily: font ? "Bricolage" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>Majestic Ads</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", width: 620 }}>
            <div style={{ display: "flex", fontSize: 80, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>
              A fresh set of ads for your product.
            </div>
            <div style={{ display: "flex", marginTop: 36 }}>
              <div
                style={{
                  display: "flex",
                  background: "#ff4d94",
                  color: "#0a0a0b",
                  fontSize: 32,
                  fontWeight: 700,
                  padding: "16px 34px",
                  borderRadius: 999,
                }}
              >
                $249 for your first set
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ ...frame, marginTop: 40 }} />
            <div style={{ ...frame, marginTop: 0 }} />
            <div style={{ ...frame, marginTop: 70 }} />
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a6a6ad" }}>
          6 image ads and 3 videos. Ready in 10 days. By Justin Henry Teh.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Bricolage", data: font, weight: 800, style: "normal" }] : undefined,
    },
  );
}
