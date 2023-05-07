export const bashCode = `yarn create vite название_вашего_приложения --template react-ts
cd название_вашего_приложения
yarn`

export const classNamesSrc = `import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}`

export const talwindConfigExample = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        elevation1: '0 1px 2px 0 rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)',
        elevation2: '0 1px 2px 0 rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)',
        elevation3: '0 1px 3px 0 rgba(0,0,0,0.3), 0 4px 8px 3px rgba(0,0,0,0.15)',
        elevation4: '0 2px 3px 0 rgba(0,0,0,0.3), 0 6px 10px 4px rgba(0,0,0,0.15)',
        elevation5: '0 4px 4px 0 rgba(0,0,0,0.3), 0 8px 12px 6px rgba(0,0,0,0.15)',
      },
      colors: {
        "light": {
          "primary": "#6750A4",
          "onPrimary": "#FFFFFF",
          "primaryContainer": "#EADDFF",
          "onPrimaryContainer": "#21005D",
          "primaryFixed": "#EADDFF",
          "onPrimaryFixed": "#21005D",
          "primaryFixedDim": "#D0BCFF",
          "onPrimaryFixedVariant": "#4F378B",
          "secondary": "#625B71",
          "onSecondary": "#FFFFFF",
          "secondaryContainer": "#E8DEF8",
          "onSecondaryContainer": "#1D192B",
          "secondaryFixed": "#E8DEF8",
          "onSecondaryFixed": "#1D192B",
          "secondaryFixedDim": "#CCC2DC",
          "onSecondaryFixedVariant": "#4A4458",
          "tertiary": "#7D5260",
          "onTertiary": "#FFFFFF",
          "tertiaryContainer": "#FFD8E4",
          "onTertiaryContainer": "#31111D",
          "tertiaryFixed": "#FFD8E4",
          "onTertiaryFixed": "#31111D",
          "tertiaryFixedDim": "#EFB8C8",
          "onTertiaryFixedVariant": "#633B48",
          "error": "#B3261E",
          "onError": "#FFFFFF",
          "errorContainer": "#F9DEDC",
          "onErrorContainer": "#410E0B",
          "outline": "#79747E",
          "background": "#FEF7FF",
          "onBackground": "#1D1B20",
          "surface": "#FEF7FF",
          "onSurface": "#1D1B20",
          "surfaceVariant": "#E7E0EC",
          "onSurfaceVariant": "#49454F",
          "inverseSurface": "#322F35",
          "inverseOnSurface": "#F5EFF7",
          "inversePrimary": "#D0BCFF",
          "shadow": "#000000",
          "surfaceTint": "#6750A4",
          "outlineVariant": "#CAC4D0",
          "scrim": "#000000",
          "surfaceContainerHighest": "#E6E0E9",
          "surfaceContainerHigh": "#ECE6F0",
          "surfaceContainer": "#F3EDF7",
          "surfaceContainerLow": "#F7F2FA",
          "surfaceContainerLowest": "#FFFFFF",
          "surfaceBright": "#FEF7FF",
          "surfaceDim": "#DED8E1"
        },
        "dark": {
          "primary": "#D0BCFF",
          "onPrimary": "#381E72",
          "primaryContainer": "#4F378B",
          "onPrimaryContainer": "#EADDFF",
          "primaryFixed": "#EADDFF",
          "onPrimaryFixed": "#21005D",
          "primaryFixedDim": "#D0BCFF",
          "onPrimaryFixedVariant": "#4F378B",
          "secondary": "#CCC2DC",
          "onSecondary": "#332D41",
          "secondaryContainer": "#4A4458",
          "onSecondaryContainer": "#E8DEF8",
          "secondaryFixed": "#E8DEF8",
          "onSecondaryFixed": "#1D192B",
          "secondaryFixedDim": "#CCC2DC",
          "onSecondaryFixedVariant": "#4A4458",
          "tertiary": "#EFB8C8",
          "onTertiary": "#492532",
          "tertiaryContainer": "#633B48",
          "onTertiaryContainer": "#FFD8E4",
          "tertiaryFixed": "#FFD8E4",
          "onTertiaryFixed": "#31111D",
          "tertiaryFixedDim": "#EFB8C8",
          "onTertiaryFixedVariant": "#633B48",
          "error": "#F2B8B5",
          "onError": "#601410",
          "errorContainer": "#8C1D18",
          "onErrorContainer": "#F9DEDC",
          "outline": "#938F99",
          "background": "#141218",
          "onBackground": "#E6E0E9",
          "surface": "#141218",
          "onSurface": "#E6E0E9",
          "surfaceVariant": "#49454F",
          "onSurfaceVariant": "#CAC4D0",
          "inverseSurface": "#E6E0E9",
          "inverseOnSurface": "#322F35",
          "inversePrimary": "#6750A4",
          "shadow": "#000000",
          "surfaceTint": "#D0BCFF",
          "outlineVariant": "#49454F",
          "scrim": "#000000",
          "surfaceContainerHighest": "#36343B",
          "surfaceContainerHigh": "#2B2930",
          "surfaceContainer": "#211F26",
          "surfaceContainerLow": "#1D1B20",
          "surfaceContainerLowest": "#0F0D13",
          "surfaceBright": "#3B383E",
          "surfaceDim": "#141218"
        }
      }
    },
  },
  plugins: [],
}`

export const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})`

export const tsConfig = `{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path alias */
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`

export const btnSrc = `import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import Label from "@/components/typography/Label"

import UIStateLayer from "@/components/ui/UIStateLayer"

import { cn } from "@/utils/classNames"

const buttonVariants = cva(
  "group h-10 rounded-full w-fit disabled:bg-opacity-[0.12] dark:disabled:bg-opacity-[0.12] disabled:cursor-not-allowed disabled:shadow-none disabled:text-light-onSurface disabled:dark:text-dark-onSurface disabled:text-opacity-[0.38] disabled:dark:text-opacity-[0.38] transition-shadow",
  {
    variants: {
      appearance: {
        elevated:
          "bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow shadow-elevation1 disabled:bg-light-primary disabled:dark:bg-dark-primary hover:shadow-elevation2 active:shadow-elevation1 text-light-primary dark:text-dark-primary",
        filled:
          "bg-light-primary dark:bg-dark-primary disabled:bg-light-onSurface disabled:dark:bg-dark-onSurface hover:shadow-elevation1 active:shadow-none text-light-onPrimary dark:text-dark-onPrimary",
        tonal:
          "bg-light-secondaryContainer dark:bg-dark-secondaryContainer disabled:bg-light-onSurface disabled:dark:bg-dark-onSurface hover:shadow-elevation1 active:shadow-none text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
        outlined:
          "border border-light-outline dark:border-dark-outline disabled:border-light-onSurface disabled:dark:border-dark-onSurface disabled:border-opacity-[0.12] dark:disabled:border-opacity-[0.12] text-light-primary dark:text-dark-primary",
        text: "text-light-primary dark:text-dark-primary",
      },
    },
    defaultVariants: {},
  }
)

// Для стилей State Layer
// (Необходим, так как Button и State Layer в разных состояниях имеют разные свойства background)
const uiStateLayerVariants = cva("rounded-full flex items-center gap-2 px-6", {
  variants: {
    appearance: {
      elevated: "bg-light-primary dark:bg-dark-primary",
      filled: "bg-light-onPrimary dark:bg-dark-onPrimary",
      tonal: "bg-light-onSecondaryContainer dark:bg-dark-onSecondaryContainer",
      outlined: "bg-light-primary dark:bg-dark-primary",
      text: "bg-light-primary dark:bg-dark-primary px-3",
    },
  },
})

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Required<Pick<VariantProps<typeof buttonVariants>, "appearance">> {
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, children, className, appearance, ...props }, forwardedRef) => {
    return (
      <button
        className={cn(className, buttonVariants({ appearance }))}
        {...props}
        ref={forwardedRef}
      >
        <UIStateLayer
          className={cn(
            uiStateLayerVariants({ appearance }),
            icon && "pl-4",
            icon && appearance === "text" && "pl-3 pr-4"
          )}
        >
          {icon && <span>{icon}</span>}
          <Label size="large">{children}</Label>
        </UIStateLayer>
      </button>
    )
  }
)
Button.displayName = "Button"

export default Button`

export const labelSrc = `import { FC, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/classNames"

const labelVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-sm tracking-[0.1px] font-medium",
      medium: "text-xs tracking-[0.5px] font-medium",
      small: "text-[11px] leading-4 tracking-[0.5px] font-medium",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface Props
  extends VariantProps<typeof labelVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Label: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <span className={cn(labelVariants({ size }), className)} {...props}>
      {children}
    </span>
  )
}

export default Label`

export const uiStateLayerSrc = `import { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/classNames"

const UIStateLayer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full h-full bg-opacity-0 dark:bg-opacity-0 group-hover:bg-opacity-[0.08] group-active:bg-opacity-[0.12] group-disabled:bg-opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}

export default UIStateLayer`

export const appExample = `import { useEffect, useState } from "react"

import Button from "./components/ui/Button"

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex flex-col gap-6 justify-center items-center bg-light-surface dark:bg-dark-surface w-screen h-screen">
      <h1 className="text-5xl font-semibold text-light-primary dark:text-dark-primary">
        My brand new Material 3 App!
      </h1>
      <Button appearance="tonal" onClick={toggleTheme}>
        Change theme
      </Button>
    </div>
  )
}

export default App`