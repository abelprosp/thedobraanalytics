import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
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
          background: "#050507",
          color: "#f5f5f7",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28 }}>
          TheDobra
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, letterSpacing: -3, lineHeight: 0.95, maxWidth: 900 }}>
            Transforme dados em decisões.
          </div>
          <div style={{ fontSize: 28, color: "#86868b", maxWidth: 720 }}>
            Inteligência de dados para decisões extraordinárias.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
