import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils/classNames";

const displayVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-[57px] leading-[64px] tracking-[-0.25px]",
      medium: "text-[45px] leading-[52px]",
      small: "text-4xl leading-[44px]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface Props
  extends VariantProps<typeof displayVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Display: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <h1 className={cn(displayVariants({ size }), className)} {...props}>
      {children}
    </h1>
  );
};

export default Display;
