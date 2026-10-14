import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="container mx-auto px-6 pt-32 pb-20 text-center">
        <p className="text-primary text-sm font-medium tracking-wider uppercase">404</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          This page{" "}
          <span className="font-serif italic font-normal">doesn&apos;t exist.</span>
        </h1>
        <p className="text-muted-foreground mt-6">
          The link may be old, or the address may have a typo.
        </p>
        <div className="mt-10">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
