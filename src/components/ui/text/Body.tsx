import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

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

const Body: FC<Props> = ({ children, size }) => {
  return <p className={bodyVariants({ size })}>{children}</p>;
};

export default Body;
