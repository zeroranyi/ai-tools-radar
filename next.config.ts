import type { NextConfig } from "next";

// Static export for GitHub Pages. basePath/site URL are injected in CI
// (see .github/workflows/deploy.yml); empty locally so `npm run dev` works.
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
