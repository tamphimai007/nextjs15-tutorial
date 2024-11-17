import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
      remotePatterns:[
        {
          protocol:'https',
          hostname:'fastly.picsum.photos',
          pathname:'/**'
        }
      ]
  }
};

export default nextConfig;
