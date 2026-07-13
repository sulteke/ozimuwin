/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Lint is available via `npm run lint`, but we don't want stylistic
  // rules (e.g. unescaped quotes in text) to block production builds.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
