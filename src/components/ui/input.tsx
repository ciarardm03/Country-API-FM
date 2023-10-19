import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-[56px] md:max-w-[500px] lg:max-w-2xl w-full rounded-lg bg-element px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:none  disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        autoComplete={'off'}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
