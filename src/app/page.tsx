'use client'

import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-emerald-400">Welcome to Ashel UI kit</h1>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
