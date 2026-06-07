import type { NextConfig } from "next";

const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
  "https://app.aurastudioza.com";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: `${appBaseUrl}/privacy`,
        permanent: true,
      },
      {
        source: "/terms",
        destination: `${appBaseUrl}/terms`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
