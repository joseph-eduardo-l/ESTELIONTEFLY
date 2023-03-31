/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  images: {
    domains: ["website-estelio.s3.amazonaws.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
