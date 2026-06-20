import type { NextConfig } from "next";

const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
  "https://app.aurastudioza.com";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
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
