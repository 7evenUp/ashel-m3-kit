export const elevationExample = `extend: {
  boxShadow: {
    elevation1: '0 1px 2px 0 rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)',
    elevation2: '0 1px 2px 0 rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)',
    elevation3: '0 1px 3px 0 rgba(0,0,0,0.3), 0 4px 8px 3px rgba(0,0,0,0.15)',
    elevation4: '0 2px 3px 0 rgba(0,0,0,0.3), 0 6px 10px 4px rgba(0,0,0,0.15)',
    elevation5: '0 4px 4px 0 rgba(0,0,0,0.3), 0 8px 12px 6px rgba(0,0,0,0.15)',
  },
  ...
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

export const themeToggleSrc = `"use client"

import { useTheme } from "next-themes"

const ThemeToggle = () => {
  const { setTheme } = useTheme()
  return (
    <div className="flex gap-2">
      <button
        className="bg-slate-400 py-2 px-4 rounded-md text-onSurface"
        type="button"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="bg-slate-400 py-2 px-4 rounded-md text-onSurface"
        type="button"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </div>
  )
}

export default ThemeToggle`

export const finalAppSrc = `import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-surface">
      <h1 className="text-5xl text-onSurface">
        Работает!
      </h1>
      <p className="bg-primaryContainer text-onPrimaryContainer">
        Этот текст находится на primary container
      </p>
      <ThemeToggle />
    </main>
  )
}`

export const appWithProviders = `import Providers from "@/components/Providers"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}`

export const providersSrc = `"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}

export default Providers`

export const classNamesSrc = `import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}`

export const basicApp = `export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-surface">
      <h1 className="text-5xl text-onSurface">
        Работает!
      </h1>
      <p className="bg-primaryContainer text-onPrimaryContainer">
        Этот текст находится на primary container
      </p>
    </main>
  )
}`

export const darkModeTailwind = `/** @type {import('tailwindcss').Config} */
module.exports = {
  ...
  darkMode: 'class',
  ...
}`