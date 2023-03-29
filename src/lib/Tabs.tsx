"use client";

import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "@/utils/classNames";
import Title from "@/components/ui/text/Title";
import UIStateLayer from "@/components/ui/UIStateLayer";

const Tabs = RadixTabs.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof RadixTabs.List>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.List>
>(({ className, ...props }, ref) => (
  <RadixTabs.List
    ref={ref}
    className={cn(
      "h-[48px] w-full flex items-center justify-between bg-light-surface dark:bg-dark-surface",
      className
    )}
    {...props}
  />
));
TabsList.displayName = RadixTabs.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>
>(({ className, children, ...props }, ref) => (
  <RadixTabs.Trigger
    className={cn(
      "flex-1 group data-[state=active]:border-b-2 data-[state=active]:border-light-primary dark:data-[state=active]:border-dark-primary data-[state=active]:text-light-primary dark:data-[state=active]:text-dark-primary text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant border-b border-light-surfaceVariant dark:border-dark-surfaceVariant",
      className
    )}
    {...props}
    ref={ref}
    asChild
  >
    <button>
      <UIStateLayer className="p-2 group-data-[state=active]:bg-light-primary group-data-[state=active]:dark:bg-dark-primary bg-light-onSurface dark:bg-dark-onSurface group-data-[state=active]:bg-opacity-0 group-data-[state=active]:group-hover:bg-opacity-[0.08] group-data-[state=active]:group-active:bg-opacity-[0.12]">
        <Title size={"small"}>{children}</Title>
      </UIStateLayer>
    </button>
  </RadixTabs.Trigger>
));
TabsTrigger.displayName = RadixTabs.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Content>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Content>
>(({ className, ...props }, ref) => (
  <RadixTabs.Content
    className={cn("px-3 py-2 w-full", className)}
    {...props}
    ref={ref}
  />
));
TabsContent.displayName = RadixTabs.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
