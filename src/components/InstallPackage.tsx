"use client"

import { useState } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import { defaultProps } from "prism-react-renderer"
import darkTheme from "prism-react-renderer/themes/oceanicNext"
import Highlight from "prism-react-renderer"
import { Copy } from "iconoir-react"

import { useSnackbar } from "@/shared/ui/Snackbar/useSnackbar"

import { cn } from "@/lib/cn"

type PackageManagers = "npm" | "yarn" | "pnpm"

const InstallPackage = ({ packageName }: { packageName: string }) => {
  const [manager, setManager] = useState<PackageManagers>("yarn")

  return (
    <Tabs.Root
      className="flex flex-col gap-1"
      value={manager}
      onValueChange={(val) => setManager(val as PackageManagers)}
    >
      <Tabs.List className="w-fit px-2 py-1 rounded-t-md flex gap-2 bg-light-surfaceVariant dark:bg-dark-surfaceVariant">
        <Tabs.Trigger
          className="data-[state=active]:border-b data-[state=active]:border-light-primary dark:data-[state=active]:border-dark-primary text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant data-[state=active]:text-light-primary dark:data-[state=active]:text-dark-primary transition-colors duration-short4 ease-standard"
          value="npm"
        >
          npm
        </Tabs.Trigger>
        <Tabs.Trigger
          className="data-[state=active]:border-b data-[state=active]:border-light-primary dark:data-[state=active]:border-dark-primary text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant data-[state=active]:text-light-primary dark:data-[state=active]:text-dark-primary transition-colors duration-short4 ease-standard"
          value="yarn"
        >
          yarn
        </Tabs.Trigger>
        <Tabs.Trigger
          className="data-[state=active]:border-b data-[state=active]:border-light-primary dark:data-[state=active]:border-dark-primary text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant data-[state=active]:text-light-primary dark:data-[state=active]:text-dark-primary transition-colors duration-short4 ease-standard"
          value="pnpm"
        >
          pnpm
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content
        className="px-2 py-1 bg-light-inverseSurface dark:bg-dark-surfaceVariant w-[600px] border border-light-outline"
        value="npm"
      >
        <BashString code={`npm install ${packageName}`} />
      </Tabs.Content>
      <Tabs.Content
        className="px-2 py-1 bg-light-inverseSurface dark:bg-dark-surfaceVariant w-[600px] border border-light-outline"
        value="yarn"
      >
        <BashString code={`yarn add ${packageName}`} />
      </Tabs.Content>
      <Tabs.Content
        className="px-2 py-1 bg-light-inverseSurface dark:bg-dark-surfaceVariant w-[600px] border border-light-outline"
        value="pnpm"
      >
        <BashString code={`pnpm add ${packageName}`} />
      </Tabs.Content>
    </Tabs.Root>
  )
}

export default InstallPackage

const BashString = ({ code }: { code: string }) => {
  const { addSnackbar } = useSnackbar()

  return (
    <div className="group relative w-full">
      <Highlight
        {...defaultProps}
        code={code}
        language="bash"
        theme={darkTheme}
      >
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              className,
              "max-w-[600px] max-h-[650px] overflow-auto bg-light-inverseSurface dark:bg-dark-surfaceVariant py-2"
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
        className="absolute right-2 top-1 p-1 hidden group-hover:block transition-all rounded-md text-dark-primary bg-dark-surface hover:bg-dark-surfaceContainer active:bg-dark-surfaceContainerHigh"
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
