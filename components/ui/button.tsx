import * as React from "react"

import { cn } from "@/lib/utils"

const variantStyles: Record<"default" | "outline", string> = {
  default:
    "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
  outline:
    "border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
}

const sizeStyles: Record<"default" | "lg", string> = {
  default: "h-9 px-4 py-2 text-sm",
  lg: "h-11 px-8 text-base",
}

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "outline"
  size?: "default" | "lg"
}

export function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  )
}
