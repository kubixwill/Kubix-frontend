import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Fix Turbopack root warning
  turbopack: {
    root: __dirname,
  },

  // ✅ Disable ESLint blocking builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
