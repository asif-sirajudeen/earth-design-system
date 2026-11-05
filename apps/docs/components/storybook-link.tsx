// Storybook is served from /storybook on the same origin (see the Vercel build-order ticket).
export function StorybookLink({ story, children }: { story: string; children: string }) {
  return <a href={`/storybook/?path=/docs/${story}--docs`}>{children}</a>
}
