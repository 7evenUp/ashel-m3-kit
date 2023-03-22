import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils/classNames";

const bodyVariants = cva("text-light-onSurface dark:text-dark-onSurface", {
  variants: {
    size: {
      large: "text-base tracking-[0.5px]",
      medium: "text-sm tracking-[0.25px]",
      small: "text-xs tracking-[0.4px]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface Props
  extends VariantProps<typeof bodyVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Body: FC<Props> = ({ children, size, className }) => {
  return <p className={cn(bodyVariants({ size }), className)}>{children}</p>;
};

export default Body;
