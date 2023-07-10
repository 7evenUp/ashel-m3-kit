"use client"

import React from "react"
import * as RadixTabs from "@radix-ui/react-tabs"

import Title from "@/components/typography/Title"

import UIStateLayer from "@/components/ui/UIStateLayer"

import { cn } from "@/utils/classNames"

const Tabs = RadixTabs.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof RadixTabs.List>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.List>
>(({ className, ...props }, forwardedRef) => (
  <RadixTabs.List
    ref={forwardedRef}
    className={cn(
      "h-[48px] w-full flex items-center justify-between bg-light-surface dark:bg-dark-surface",
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
      "flex-1 group data-[state=active]:border-b-2 data-[state=active]:border-light-primary dark:data-[state=active]:border-dark-primary data-[state=active]:text-light-primary dark:data-[state=active]:text-dark-primary text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant border-b border-light-surfaceVariant dark:border-dark-surfaceVariant transition-colors duration-short4 ease-standard",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <UIStateLayer className="p-2 group-data-[state=active]:bg-light-primary group-data-[state=active]:dark:bg-dark-primary bg-light-onSurface dark:bg-dark-onSurface group-data-[state=active]:bg-opacity-0 dark:group-data-[state=active]:bg-opacity-0 group-data-[state=active]:group-hover:bg-opacity-[0.08] dark:group-data-[state=active]:group-hover:bg-opacity-[0.08] group-data-[state=active]:group-active:bg-opacity-[0.12] dark:group-data-[state=active]:group-active:bg-opacity-[0.12]">
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