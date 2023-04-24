import Display from "@/components/typography/Display"

import Heading from "@/components/Heading"

const SnackbarPage = () => {
  return (
    <div>
      <Display className="mb-4">Snackbar</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
      </div>
    </div>
  )
}

export default SnackbarPage
