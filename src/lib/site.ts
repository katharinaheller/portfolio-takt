import type { Metadata } from "next";
export const config = {
  name: "TAKT",
  locale: "de-DE",
  base: process.env.NEXT_PUBLIC_BASE_PATH || "",
  origin: process.env.SITE_ORIGIN || "https://katharinaheller.github.io",
};
export const href = (path = "") => `${config.base}/${path.replace(/^\//, "")}`;
export const absolute = (path = "") => `${config.origin}${href(path)}`;
export function meta(title: string, description: string, path = ""): Metadata {
  return {
    title: `${title} | TAKT`,
    description,
    alternates: { canonical: absolute(path) },
    openGraph: {
      title: `${title} | TAKT`,
      description,
      url: absolute(path),
      type: "website",
      locale: "de_DE",
      images: [{ url: absolute("social.jpg"), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absolute("social.jpg")],
    },
  };
}
