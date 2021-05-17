import { InputAdornment, makeStyles, TextField } from '@material-ui/core'
import { Link } from '@material-ui/icons'
import React from 'react'

const InputLinkIcon = () => (
  <InputAdornment position='start'>
    <Link />
  </InputAdornment>
)

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiInputBase-input': {
      paddingLeft: theme.spacing(1)
    },
    margin: theme.spacing(2)
  }
}))

const InputField = () => {
  const { root } = useStyles()

  return (
    <TextField
      autoFocus
      className={root}
      fullWidth
      margin='normal'
      placeholder='Add Youtube or SoundCloud Url'
      type='url'
      InputProps={{
        startAdornment: <InputLinkIcon />
      }}
    />
  )
}

export default InputField
