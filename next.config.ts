import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inclusivetravel.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.inclusivetravel.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ustravel002.s3.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
