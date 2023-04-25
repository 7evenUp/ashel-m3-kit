"use client"

import { Language, defaultProps } from "prism-react-renderer"
import darkTheme from "prism-react-renderer/themes/oceanicNext"
import Highlight from "prism-react-renderer"
import { Copy } from "iconoir-react"

import { useSnackbar } from "@/lib/Snackbar/useSnackbar"

import { cn } from "@/utils/classNames"

const Code = ({ code, language }: { code: string; language: Language }) => {
  const { addSnackbar } = useSnackbar()

  return (
    <>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={darkTheme}
      >
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              className,
              "max-w-[600px] py-0 overflow-auto bg-light-inverseSurface dark:bg-dark-surfaceVariant border border-light-outline rounded-t-md p-3 my-2 relative group"
            )}
          >
            {tokens.map((line, i) => {
              const { key, ...rest } = getLineProps({ line, key: i })

              return (
                <div
                  key={`line-${i}`}
                  style={{ position: "relative" }}
                  {...rest}
                >
                  {line.map((token, j) => {
                    const { key, ...props } = getTokenProps({ token, j })

                    return <span key={j} {...props}></span>
                  })}
                </div>
              )
            })}
            <button
              className="absolute right-2 top-2 p-1 hidden group-hover:block transition-all rounded-md text-dark-primary bg-dark-surface hover:bg-dark-surfaceContainer active:bg-dark-surfaceContainerHigh"
              onClick={() => {
                navigator.clipboard.writeText(code)

                addSnackbar({
                  supportingText: "Текст скопирован",
                })
              }}
            >
              <Copy />
            </button>
          </pre>
        )}
      </Highlight>
    </>
  )
}

export default Code
