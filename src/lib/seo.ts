const SITE = "NANDANARAJ R — Academic Portfolio";

// Link previews need full addresses. The GitHub Pages build passes its own address in
// VITE_SITE_ORIGIN (see .github/workflows/deploy.yml); other builds use the published address.
const ORIGIN = (
  (import.meta.env["VITE_SITE_ORIGIN"] as string | undefined) ||
  "https://profile-and-pursuit.lovable.app"
).replace(/\/+$/, "");
export const SHARE_IMAGE = `${ORIGIN}${import.meta.env.BASE_URL}og-image.png`;
const SHARE_IMAGE_ALT =
  "NANDANARAJ R — Assistant Professor, Department of Computer Science and Engineering";

export function pageHead(title: string, description: string) {
  const full = title ? `${title} · NANDANARAJ R` : SITE;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:site_name", content: SITE },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: SHARE_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: full },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SHARE_IMAGE },
      { name: "twitter:image:alt", content: SHARE_IMAGE_ALT },
    ],
  };
}
