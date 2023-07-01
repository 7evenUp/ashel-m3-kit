export const usageCode = `<FilledTextField
  label="With leading icon"
  leadingIcon={<Search />}
  placeholder="This is placeholder"
  />
<FilledTextField
  label="With trailing icon"
  trailingIcon={<DeleteCircle />}
  />
<FilledTextField
  label="With both icons"
  leadingIcon={<Search />}
  trailingIcon={<DeleteCircle />}
  />
<FilledTextField
  label="Error state"
  variant="error"
  trailingIcon={<DeleteCircle />}
  supportingText="This is supporting text"
  supportingTextCharCount="14/10"
  />`
