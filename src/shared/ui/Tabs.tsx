"use client"

import React from "react"
import * as RadixTabs from "@radix-ui/react-tabs"

import Title from "@/shared/typography/Title"

import UIStateLayer from "@/shared/ui/UIStateLayer"

import { cn } from "@/lib/cn"

const Tabs = RadixTabs.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof RadixTabs.List>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.List>
>(({ className, ...props }, forwardedRef) => (
  <RadixTabs.List
    ref={forwardedRef}
    className={cn(
      "h-[48px] w-full flex items-center justify-between bg-surface",
      className
    )}
    {...props}
  />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>
>(({ className, children, ...props }, forwardedRef) => (
  <RadixTabs.Trigger
    className={cn(
      "flex-1 group data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary text-onSurfaceVariant border-b border-surfaceVariant transition-colors duration-short4 ease-standard",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <UIStateLayer className="p-2 group-data-[state=active]:bg-primary bg-onSurface group-data-[state=active]:bg-opacity-0 group-data-[state=active]:group-hover:bg-opacity-[0.08] group-data-[state=active]:group-active:bg-opacity-[0.12]">
      <Title size={"small"}>{children}</Title>
    </UIStateLayer>
  </RadixTabs.Trigger>
))
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Content>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Content>
>(({ className, ...props }, forwardedRef) => (
  <RadixTabs.Content
    className={cn("px-3 py-2 w-full", className)}
    {...props}
    ref={forwardedRef}
  />
))
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
