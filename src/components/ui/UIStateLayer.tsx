import { cn } from "@/utils/classNames";
import { FC, HTMLAttributes } from "react";

const UIStateLayer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        "w-full h-full bg-opacity-0 dark:bg-opacity-0 group-enabled:group-hover:bg-opacity-[0.08] group-enabled:group-active:bg-opacity-[0.12]"
      )}
    >
      {children}
    </div>
  );
};

export default UIStateLayer;
