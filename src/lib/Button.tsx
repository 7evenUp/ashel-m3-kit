import Label from "@/components/ui/text/Label";
import UIStateLayer from "@/components/ui/UIStateLayer";
import { cn } from "@/utils/classNames";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

const buttonVariants = cva(
  "group h-10 rounded-full w-fit disabled:bg-opacity-[0.12] dark:disabled:bg-opacity-[0.12]",
  {
    variants: {
      appearance: {
        elevated:
          "bg-light-surfaceVariant dark:bg-dark-surfaceVariant shadow-elevation1 disabled:bg-light-primary disabled:dark:bg-dark-primary hover:shadow-elevation2 active:shadow-elevation1",
        filled:
          "bg-light-primary dark:bg-dark-primary disabled:bg-light-onSurface disabled:dark:bg-dark-onSurface hover:shadow-elevation1 active:shadow-none",
        tonal: "bg-light-secondaryContainer dark:bg-dark-secondaryContainer disabled:bg-light-onSurface disabled:dark:bg-dark-onSurface hover:shadow-elevation1 active:shadow-none",
        outlined: "border border-light-outline dark:border-dark-outline disabled:border-light-onSurface disabled:dark:border-dark-onSurface disabled:border-opacity-[0.12] dark:disabled:border-opacity-[0.12]",
        text: "",
      },
    },
    defaultVariants: {},
  }
);

const uiStateLayerVariants = cva("", {
  variants: {
    appearance: {
      elevated: "bg-light-primary dark:bg-dark-primary",
      filled: "bg-light-onPrimary dark:bg-dark-onPrimary",
      tonal: "bg-light-onSecondaryContainer dark:bg-dark-onSecondaryContainer",
      outlined: "bg-light-primary dark:bg-dark-primary",
      text: "",
    },
  },
  defaultVariants: {},
});

const labelVariants = cva("", {
  variants: {
    appearance: {
      elevated: "text-light-primary dark:text-dark-primary",
      filled: "text-light-onPrimary dark:text-dark-onPrimary",
      tonal: "text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
      outlined: "text-light-primary dark:text-dark-primary",
      text: "",
    },
  },
  defaultVariants: {},
});

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
}

const Button: FC<Props> = ({
  icon,
  children,
  onClick,
  className,
  appearance,
  disabled,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        className,
        disabled && "shadow-none cursor-not-allowed",
        buttonVariants({ appearance })
      )}
      {...props}
    >
      <UIStateLayer
        className={cn(
          "rounded-full flex items-center gap-2 px-6 bg-opacity-0 dark:bg-opacity-0",
          !disabled &&
            "group-hover:bg-opacity-[0.08] group-active:bg-opacity-[0.12]",
          icon && "pl-4",
          uiStateLayerVariants({ appearance })
        )}
      >
        {icon && (
          <span
            className={cn(
              labelVariants({ appearance }),
              disabled &&
                "text-light-onSurface dark:text-dark-onSurface opacity-[0.38]"
            )}
          >
            {icon}
          </span>
        )}
        <Label
          size="large"
          className={cn(
            labelVariants({ appearance }),
            disabled &&
              "text-light-onSurface dark:text-dark-onSurface opacity-[0.38]"
          )}
        >
          {children}
        </Label>
      </UIStateLayer>
    </button>
  );
};

export default Button;
