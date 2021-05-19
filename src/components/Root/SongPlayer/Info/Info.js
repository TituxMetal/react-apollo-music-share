import { Typography } from '@material-ui/core'
import React from 'react'

const Info = ({ artist, title }) => (
  <>
    <Typography variant='h5' component='h3'>
      {title}
    </Typography>
    <Typography variant='subtitle1' component='p' color='textSecondary'>
      {artist}
    </Typography>
  </>
)

export default Info
