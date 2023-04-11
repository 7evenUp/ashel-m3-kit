"use client";

import React, { ReactNode, PropsWithChildren, FC } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import Button from "./Button";
import Headline from "@/components/ui/text/Headline";
import Body from "@/components/ui/text/Body";

export const Dialog = RadixDialog.Root;

export const DialogTrigger = RadixDialog.Trigger;

export const DialogTitle: FC<PropsWithChildren> = ({ children }) => (
  <RadixDialog.Title
    className="text-light-onSurface dark:text-dark-onSurface mb-4"
    asChild
  >
    <Headline size={"small"}>{children}</Headline>
  </RadixDialog.Title>
);

export const DialogDescription: FC<PropsWithChildren> = ({ children }) => (
  <RadixDialog.Description
    className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
    asChild
  >
    <Body>{children}</Body>
  </RadixDialog.Description>
);

export const DialogActionButtonContainer: FC<PropsWithChildren> = ({
  children,
}) => (
  <div className="flex items-center justify-end gap-2 mt-6">{children}</div>
);

export const DialogActionButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => (
  <RadixDialog.Close asChild>
    <Button appearance={"text"} onClick={onClick}>
      {children}
    </Button>
  </RadixDialog.Close>
);

export const DialogContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 bg-light-scrim dark:bg-dark-scrim bg-opacity-20 dark:bg-opacity-20" />
      <RadixDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest min-w-[280px] max-w-[560px] shadow-elevation3 p-6 rounded-[28px]">
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
};
