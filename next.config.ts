import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "**",
        search: "",        
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "**",
        search: "",        
      },
    ]
  },
};

export default nextConfig;


// module.exports = nextConfig;
//eslint:{
//   ignoreDuringBuilds: true
// }