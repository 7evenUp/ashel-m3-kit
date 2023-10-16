"use client"

import { Language, Highlight, themes } from "prism-react-renderer"
import { Copy } from "iconoir-react"

import { useSnackbar } from "@/shared/ui/Snackbar/useSnackbar"

import { cn } from "@/lib/cn"

const Code = ({ code, language }: { code: string; language: Language }) => {
  const { addSnackbar } = useSnackbar()

  return (
    <div className="group relative w-fit my-2">
      <Highlight code={code} language={language} theme={themes.oceanicNext}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              className,
              "max-w-[600px] max-h-[650px] overflow-auto bg-zinc-700 border border-outline rounded-t-md p-3"
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
          </pre>
        )}
      </Highlight>

      <button
        className="absolute right-3 top-3 p-1 hidden group-hover:block transition-all rounded-md text-primary bg-surface hover:bg-surfaceContainer active:bg-surfaceContainerHigh"
        onClick={() => {
          navigator.clipboard.writeText(code)

          addSnackbar({
            supportingText: "Текст скопирован",
          })
        }}
      >
        <Copy />
      </button>
    </div>
  )
}

export default Code
