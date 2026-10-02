import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stock gallery photos (temporary until we have our own)
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },
};

export default nextConfig;
