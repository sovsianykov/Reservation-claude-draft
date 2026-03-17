import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg?react": {
        loaders: ["@svgr/webpack"],
        as: "*.tsx",
      },
    },
  },
};

export default nextConfig;
