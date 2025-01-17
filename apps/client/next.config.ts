import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output : "standalone",
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  runtime: "nodejs",
  cache: "no-store",
};

export default nextConfig;
