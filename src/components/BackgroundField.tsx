export function BackgroundField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 glow-violet blur-3xl" />
      <div className="absolute top-[40%] -right-40 h-[420px] w-[420px] glow-lime blur-3xl opacity-60" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
