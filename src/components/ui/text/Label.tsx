import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

const labelVariants = cva("text-light-onSurface dark:text-dark-onSurface", {
  variants: {
    size: {
      large: "text-sm tracking-[0.1px] font-medium",
      medium: "text-xs tracking-[0.5px] font-medium",
      small: "text-[11px] leading-4 tracking-[0.5px] font-medium",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface Props
  extends VariantProps<typeof labelVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Label: FC<Props> = ({ children, size }) => {
  return <p className={labelVariants({ size })}>{children}</p>;
};

export default Label;
