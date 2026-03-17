export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-[var(--color-border)] border-t-[var(--color-primary)] rounded-full animate-spin" />
        <span
          className="text-lg font-bold"
          style={{ fontFamily: 'var(--font-clash), system-ui, sans-serif' }}
        >
          <span className="text-[var(--color-primary)]">Snigo</span>
          <span className="text-[var(--color-text-primary)]">ride</span>
        </span>
      </div>
    </div>
  )
}
