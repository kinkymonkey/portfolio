import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/case-studies",
        destination: "/work",
        permanent: false,
      },
      {
        source: "/case-studies/:slug",
        destination: "/work/:slug",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
