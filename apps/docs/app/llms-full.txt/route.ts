import { source } from "@/lib/source"

export const revalidate = false

export async function GET() {
  const pages = await Promise.all(
    source.getPages().map(async (page) => `# ${page.data.title} (${page.url})\n\n${await page.data.getText("processed")}`),
  )
  return new Response(pages.join("\n\n"))
}
