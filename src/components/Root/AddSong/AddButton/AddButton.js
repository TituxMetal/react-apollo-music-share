import { Button, makeStyles } from '@material-ui/core'
import { AddBoxOutlined } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  }
}))

const AddButton = props => {
  const { root } = useStyles()

  return (
    <Button
      className={root}
      variant='contained'
      color='primary'
      endIcon={<AddBoxOutlined />}
      {...props}
    />
  )
}

export default AddButton
