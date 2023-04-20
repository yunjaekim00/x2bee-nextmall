/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./base.scss";`,
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_PRODUCT_IMG_URL}`],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
  compiler: {
    // Styled Component 쓰기 위해 추가 (Enables the styled-components SWC transform)
    // styledComponents: true,
  },
};

module.exports = nextConfig;
