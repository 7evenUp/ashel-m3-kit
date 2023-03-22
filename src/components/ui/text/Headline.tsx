import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils/classNames";

const headlineVariants = cva("text-light-onSurface dark:text-dark-onSurface", {
  variants: {
    size: {
      large: "text-[32px] leading-10",
      medium: "text-[28px] leading-9",
      small: "text-2xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface Props
  extends VariantProps<typeof headlineVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Headline: FC<Props> = ({ children, size, className }) => {
  return <h2 className={cn(headlineVariants({ size }), className)}>{children}</h2>;
};

export default Headline;
