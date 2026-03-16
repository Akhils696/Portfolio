import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
