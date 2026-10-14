import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  // The parent folder has its own lockfile; pin the root to this project.
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
