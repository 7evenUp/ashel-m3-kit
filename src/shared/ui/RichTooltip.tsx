"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import Body from "../typography/Body"
import Title from "../typography/Title"

import { cn } from "@/lib/cn"

interface RichTooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  subhead?: string
  supportingText: string
  action?: React.ReactNode
}

const RichTooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  RichTooltipProps
>(
  (
    {
      children,
      subhead,
      supportingText,
      action,
      className,
      sideOffset = 4,
      ...props
    },
    forwardedRef
  ) => (
    <TooltipPrimitive.Provider delayDuration={500}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          className={cn(
            "z-50 flex flex-col px-4 pt-3 pb-2 rounded-xl shadow-elevation2 max-w-[300px] bg-surfaceContainer animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
          )}
          sideOffset={sideOffset}
          side="right"
          align="start"
          ref={forwardedRef}
          {...props}
        >
          {subhead && (
            <Title size="small" className="mb-1 text-onSurfaceVariant">
              {subhead}
            </Title>
          )}
          {supportingText && (
            <Body size="medium" className="text-onSurfaceVariant">
              {supportingText}
            </Body>
          )}
          {action && <div className="mt-3">{action}</div>}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
)
RichTooltip.displayName = "RichTooltip"

export default RichTooltip
