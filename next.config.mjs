/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "uploads.webspires.co.uk" },
      { protocol: "https", hostname: "abzrecoveryservices.co.uk" },
      { protocol: "https", hostname: "cdn.trustindex.io" },
      { protocol: "http", hostname: "cdn.trustindex.io" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
};

export default nextConfig;
