import { cn } from "@/utils/classNames";
import { FC, HTMLAttributes } from "react";

const UIStateLayer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return <div className={cn("w-full h-full", className)}>{children}</div>;
};

export default UIStateLayer;
