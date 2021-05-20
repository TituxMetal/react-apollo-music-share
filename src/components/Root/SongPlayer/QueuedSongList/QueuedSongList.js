import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

import { DataList } from '#root/components/DataList'

import { QueuedSongItem } from './QueuedSongItem'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0, 2)
  }
}))

const QueuedSongList = () => {
  const { container } = useStyles()

  return (
    <Grid className={container} container>
      <Grid item xs={12}>
        <Typography gutterBottom variant='h4'>
          Queue (3)
        </Typography>
      </Grid>
      <Grid container>
        <DataList itemComponent={QueuedSongItem} itemNumber={3} />
      </Grid>
    </Grid>
  )
}

export default QueuedSongList
