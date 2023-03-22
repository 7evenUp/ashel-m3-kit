import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode } from "react";

const displayVariants = cva("text-light-onSurface dark:text-dark-onSurface", {
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

const Display: FC<Props> = ({ children, size }) => {
  return <h1 className={displayVariants({ size })}>{children}</h1>;
};

export default Display;
