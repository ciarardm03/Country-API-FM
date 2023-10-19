import * as React from 'react'

import { cn } from '@/lib/utils'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn([
        ' overflow-hidden',
        'min-w-sm w-full',
        'bg-element',
        'text-foreground',
        'rounded-lg',
        'shadow-lg',
        'cursor-pointer',
      ],
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ src, alt, className, ...props }, ref) => (
  <img
    src={src}
    alt={alt}
    ref={ref}
    className={cn('w-full h-[213px]', className)}
    {...props}
  />
))
CardImage.displayName = 'CardImage'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-md ', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardCountryName = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-lg md:text-2xl font-bold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
))
CardCountryName.displayName = 'CardCountryName'

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col w-full py-sm gap-xs', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardDescriptionWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex gap-xs', className)}
    {...props}
  />
))
CardDescriptionWrapper.displayName = 'CardDescription'

const CardDescriptionTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-foreground text-base md:text-lg font-semibold ', className)}
    {...props}
  />
))
CardDescriptionTitle.displayName = 'CardDescriptionTitle'

const CardDescriptionValue = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-foreground text-base md:text-lg ', className)}
    {...props}
  />
))
CardDescriptionValue.displayName = 'CardDescriptionValue'


export {
  Card,
  CardImage,
  CardDescription,
  CardDescriptionTitle,
  CardDescriptionValue,
  CardCountryName,
  CardDescriptionWrapper,
  CardContent,
}
