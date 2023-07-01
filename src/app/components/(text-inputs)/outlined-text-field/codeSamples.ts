export const usageCode = `<OutlinedTextField
  label="With leading icon"
  leadingIcon={<Search />}
  placeholder="This is placeholder"
  />
<OutlinedTextField
  label="With trailing icon"
  trailingIcon={<DeleteCircle />}
  />
<OutlinedTextField
  label="With both icons"
  leadingIcon={<Search />}
  trailingIcon={<DeleteCircle />}
  />
<OutlinedTextField
  label="Error state"
  variant="error"
  trailingIcon={<DeleteCircle />}
  supportingText="This is supporting text"
  supportingTextCharCount="14/10"
  />`