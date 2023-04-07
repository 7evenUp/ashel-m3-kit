'use client'

import { Language, defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/oceanicNext";
import Highlight from "prism-react-renderer";
import { cn } from "@/utils/classNames";

const Code = ({ code, language }: { code: string, language: Language }) => {
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={darkTheme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cn(
            className,
            "max-w-[600px] py-0 overflow-auto bg-light-inverseSurface dark:bg-dark-surfaceVariant border border-light-outline rounded-t-md p-3 my-2"
          )}
        >
          {tokens.map((line, i) => {
            const { key, ...rest } = getLineProps({ line, key: i });

            return (
              <div key={`line-${i}`} style={{ position: "relative" }} {...rest}>
                {line.map((token, j) => {
                  const { key, ...props } = getTokenProps({ token, j });

                  return <span key={j} {...props}></span>;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
