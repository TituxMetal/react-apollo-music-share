import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { HeadsetTwoTone } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: { marginLeft: theme.spacing(2) }
}))

const Header = () => {
  const { root } = useStyles()

  return (
    <AppBar color='secondary' position='fixed'>
      <Toolbar>
        <HeadsetTwoTone />
        <Typography className={root} variant='h6' component='h1'>
          Apollo Music Share
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
