import Body from '@/components/ui/text/Body'
import Display from '@/components/ui/text/Display'
import Headline from '@/components/ui/text/Headline'

const Documentation = () => {
  return (
    <>
      <Display>Documentation page</Display>
      
      <div>
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
      </div>
    </>
  )
}

export default Documentation