import { cn } from "@/utils/classNames";
import { AnchorHTMLAttributes, FC } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const InlineLink: FC<Props> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        className,
        "text-light-primary dark:text-dark-primary underline underline-offset-4 hover:text-light-inversePrimary hover:dark:text-dark-inversePrimary"
      )}
    >
      {children}
    </a>
  );
};

export default InlineLink;
