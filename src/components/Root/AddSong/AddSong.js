import { Grid } from '@material-ui/core'
import React, { useState } from 'react'

import { AddButton } from './AddButton'
import { FormDialog } from './FormDialog'
import { InputField } from './InputField'

const AddSong = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const handleCloseDialog = () => setDialogIsOpen(false)

  return (
    <Grid container alignItems='center' wrap='nowrap'>
      <FormDialog open={dialogIsOpen} onClose={handleCloseDialog} />
      <InputField />
      <AddButton onClick={() => setDialogIsOpen(true)}>Add</AddButton>
    </Grid>
  )
}

export default AddSong
