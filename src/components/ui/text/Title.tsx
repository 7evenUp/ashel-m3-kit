import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

const titleVariants = cva("text-light-onSurface dark:text-dark-onSurface", {
  variants: {
    size: {
      large: "text-[22px] leading-7",
      medium: "text-base tracking-[0.15px] font-medium",
      small: "text-sm tracking-[0.1px] font-medium",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface Props
  extends VariantProps<typeof titleVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Title: FC<Props> = ({ children, size }) => {
  return <p className={titleVariants({ size })}>{children}</p>;
};

export default Title;
