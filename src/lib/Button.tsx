import Label from "@/components/ui/text/Label";
import UIStateLayer from "@/components/ui/UIStateLayer";
import { cn } from "@/utils/classNames";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

const buttonVariants = cva("group h-10 rounded-full w-fit shadow-elevation1", {
  variants: {
    appearance: {
      elevated: "bg-light-surfaceVariant dark:bg-dark-surfaceVariant shadow",
      filled: "",
      tonal: "",
      outlined: "",
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
      className={cn(
        buttonVariants({ appearance }),
        className,
        disabled
          ? "bg-light-primary dark:bg-dark-primary bg-opacity-[0.12] dark:bg-opacity-[0.12] shadow-none cursor-not-allowed"
          : "hover:shadow-elevation2 active:shadow-elevation1"
      )}
      {...props}
    >
      <UIStateLayer
        className={cn(
          "rounded-full flex items-center gap-2 px-6 bg-light-primary dark:bg-dark-primary bg-opacity-0 dark:bg-opacity-0",
          !disabled && "group-hover:bg-opacity-[0.08] group-active:bg-opacity-[0.12]",
          icon && "pl-4"
        )}
      >
        {icon && (
          <span
            className={cn(
              "text-light-primary dark:text-dark-primary",
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
            "text-light-primary dark:text-dark-primary",
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
