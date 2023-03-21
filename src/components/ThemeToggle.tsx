'use client'

import { SunLight, HalfMoon } from 'iconoir-react'
import { useTheme } from 'next-themes'
import React from 'react'


const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button className='w-12 h-12 flex items-center justify-center rounded-full border bg-white hover:bg-slate-50 dark:bg-slate-900 hover:dark:bg-slate-700' onClick={() => {
      if (theme === 'light') {
        setTheme('dark')
      } else if (theme === 'dark') {
        setTheme('light')
      }
      
    }}>
      {theme === 'dark' ? <SunLight /> : <HalfMoon />}
    </button>
  )
}

export default ThemeToggle