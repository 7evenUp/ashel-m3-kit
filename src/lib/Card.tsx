import { cn } from "@/utils/classNames";
import { cva, VariantProps } from "class-variance-authority";
import React, { FC, HTMLAttributes } from "react";

const cardVariants = cva("rounded-xl px-4 py-3", {
  variants: {
    appearance: {
      elevated: "bg-light-surface dark:bg-dark-surface shadow-elevation1",
      filled: "bg-light-surfaceVariant dark:bg-dark-surfaceVariant shadow-elevation1 text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant",
      outlined: "border border-light-outline dark:border-dark-outline",
    },
  },
});

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    Required<Pick<VariantProps<typeof cardVariants>, "appearance">> {}

const Card: FC<Props> = ({ className, children, appearance, ...props }) => {
  return (
    <div className={cn(className, cardVariants({ appearance }), "")} {...props}>
      {children}
    </div>
  );
};

export default Card;
