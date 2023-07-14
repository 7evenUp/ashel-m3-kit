"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import Body from "@/shared/typography/Body"

import { cn } from "@/lib/cn"

interface PlainTooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  content: string
  triggerAsChild?: boolean
}

const PlainTooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  PlainTooltipProps
>(
  (
    { children, content, triggerAsChild = true, className, sideOffset = 4, ...props },
    forwardedRef
  ) => (
    <TooltipPrimitive.Provider delayDuration={500}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild={triggerAsChild}>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          className={cn(
            "flex items-center rounded min-h-[24px] bg-light-inverseSurface dark:bg-dark-inverseSurface px-2 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
          )}
          sideOffset={sideOffset}
          ref={forwardedRef}
          {...props}
        >
          <Body
            size="small"
            className="text-light-inverseOnSurface dark:text-dark-inverseOnSurface"
          >
            {content}
          </Body>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
)
PlainTooltip.displayName = "PlainTooltip"

export default PlainTooltip