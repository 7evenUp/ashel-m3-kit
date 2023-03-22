import Body from '@/components/ui/text/Body'
import Display from '@/components/ui/text/Display'
import Headline from '@/components/ui/text/Headline'
import Label from '@/components/ui/text/Label'
import Title from '@/components/ui/text/Title'

const Documentation = () => {
  return (
    <>
      <Display>Documentation page</Display>
      
      <div className='flex flex-col gap-[1px]'>
        <Display size={'small'}>Text components</Display>

        <div className='p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3'>
          <Display size={'large'}>Display large</Display>
          <Display size={'medium'}>Display medium</Display>
          <Display size={'small'}>Display small</Display>
        </div>

        <div className='p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3'>
          <Headline size={'large'}>Headline large</Headline>
          <Headline size={'medium'}>Headline medium</Headline>
          <Headline size={'small'}>Headline small</Headline>
        </div>

        <div className='p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3'>
          <Body size={'large'}>Body large</Body>
          <Body size={'medium'}>Body medium</Body>
          <Body size={'small'}>Body small</Body>
        </div>

        <div className='p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3'>
          <Title size={'large'}>Title large</Title>
          <Title size={'medium'}>Title medium</Title>
          <Title size={'small'}>Title small</Title>
        </div>

        <div className='p-3 bg-light-surfaceVariant dark:bg-dark-surfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant rounded-xl flex flex-col gap-3'>
          <Label size={'large'}>Label large</Label>
          <Label size={'medium'}>Label medium</Label>
          <Label size={'small'}>Label small</Label>
        </div>
      </div>
    </>
  )
}

export default Documentation