import Display from '@/components/ui/text/Display'
import React from 'react'

const About = () => {
  return (
    <>
    <Display>About page</Display>
    <Comp />
    </>
  )
}

const Comp = () => {
  return (
    <label className="h-10 w-10 rounded-full bg-slate-300 flex items-center justify-center">
      <input type={'checkbox'} className="appearance-none" />
    </label>
  )
}

export default About