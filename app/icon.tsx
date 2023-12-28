import { ImageResponse } from "next/og";

import { backgrounds } from "@/data";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: backgrounds[0],
          width: "100%",
          height: "100%",
          borderRadius: "8px",
        }}
      />
    ),
    size
  );
}
