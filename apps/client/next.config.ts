import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        "@prisma/client",
        "prisma",
      ];
    }
    return config;
  },
};

export default nextConfig;
