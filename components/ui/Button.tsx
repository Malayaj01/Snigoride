'use client'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'white-outline'
  size?: 'default' | 'large'
  href?: string
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'default',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer'

  const sizeStyles = {
    default: 'px-5 py-2.5 text-sm',
    large: 'px-7 py-3.5 text-base',
  }

  const variantStyles = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] active:bg-[var(--color-primary-dark)]',
    secondary:
      'bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] hover:bg-[var(--color-border)]',
    outline:
      'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
    white:
      'bg-white text-[var(--color-text-primary)] hover:bg-gray-100',
    'white-outline':
      'border-2 border-white text-white hover:bg-white hover:text-[var(--color-text-primary)]',
  }

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
