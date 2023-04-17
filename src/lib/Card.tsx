import { cn } from "@/utils/classNames";
import { cva, VariantProps } from "class-variance-authority";
import React, { FC, HTMLAttributes } from "react";

const cardVariants = cva("rounded-xl px-4 py-3", {
  variants: {
    appearance: {
      elevated: "bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow shadow-elevation1",
      filled: "bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest shadow-elevation1 text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant",
      outlined: "border border-light-outline dark:border-dark-outline",
    },
  },
});

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    Required<Pick<VariantProps<typeof cardVariants>, "appearance">> {}

const Card: FC<Props> = ({ className, children, appearance, ...props }) => {
  return (
    <div className={cn(cardVariants({ appearance }), className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
