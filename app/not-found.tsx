import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 electric-lines bg-[var(--color-surface-muted)]">
      <div className="text-center max-w-md">
        <h1
          className="text-[120px] md:text-[160px] font-bold leading-none mb-4"
          style={{
            fontFamily: 'var(--font-clash), system-ui, sans-serif',
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3">
          Oops! This page doesn&apos;t exist.
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          The page you&apos;re looking for may have been moved or deleted.
        </p>
        <Button variant="primary" size="large" href="/">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
