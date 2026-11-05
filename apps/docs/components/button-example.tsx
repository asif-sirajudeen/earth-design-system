import { Button } from "@asif-sirajudeen/eds-ui"

export function ButtonExample() {
  return (
    <div className="not-prose flex flex-wrap items-center gap-2 rounded-lg border p-6">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}
