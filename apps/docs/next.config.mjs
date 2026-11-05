import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Uses the built package (dist/), the same files consumers get.
  transpilePackages: [],
  async rewrites() {
    return [{ source: "/docs/:path*.md", destination: "/llms.mdx/docs/:path*" }]
  },
}

export default withMDX(config)
