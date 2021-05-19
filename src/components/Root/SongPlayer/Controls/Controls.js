import { Grid, IconButton, Slider, Typography } from '@material-ui/core'
import { PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons'
import React from 'react'

const Controls = () => (
  <Grid item container justify='space-between' alignItems='center' xs={8}>
    <IconButton>
      <SkipPrevious />
    </IconButton>
    <IconButton>
      <PlayArrow fontSize='large' />
    </IconButton>
    <IconButton>
      <SkipNext />
    </IconButton>
    <Typography variant='subtitle1' component='p' color='textSecondary'>
      00:01:30
    </Typography>
    <Grid item xs={12}>
      <Slider type='range' min={0} max={1} step={0.01} />
    </Grid>
  </Grid>
)

export default Controls
