import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-base tracking-wide ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-element text-foreground justify-between hover:bg-element/90 shadow-sm',
        secondary: 'bg-element text-foreground hover:bg-element/80 shadow-md',

        destructive: '',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'text-foreground justify-start ',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'text-foreground font-semibold text-sm md:text-base md:space-x-2',
      },
      size: {
        default: 'h-[56px] lg:w-72  px-md',
        secondary: 'h-[56px] px-md',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-[56px] lg:w-72 px-sm md:px-md',
        ghost: 'w-full py-xs px-sm my-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
