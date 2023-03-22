import React from 'react'
import ThemeToggle from './ThemeToggle'

const NavigationRail = () => {
  return (
    <nav className='bg-light-surface dark:bg-dark-surface text-light-onSurface dark:text-dark-onSurface
                    fixed top-0 left-0 flex flex-col gap-3 px-3 h-full min-w-[80px] items-center justify-center'>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <ThemeToggle />
    </nav>
  )
}

export default NavigationRail