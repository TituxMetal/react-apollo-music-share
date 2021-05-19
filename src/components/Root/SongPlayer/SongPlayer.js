import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles
} from '@material-ui/core'
import React from 'react'

import { Controls } from './Controls'
import { Info } from './Info'
import { QueuedSongList } from './QueuedSongList'

const songData = {
  title: 'Hypnotize',
  artist: 'System Of A Down',
  thumbnail: 'https://i.ytimg.com/vi/KAEBfiaY6Rc/hqdefault.jpg'
}

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2)
  },
  mediaContainer: {
    height: '140px',
    margin: 'auto'
  },
  root: {
    height: '100%',
    width: '100%'
  }
}))

const SongPlayer = () => {
  const { container, mediaContainer, root } = useStyles()

  return (
    <>
      <Card variant='outlined' className={container}>
        <Grid container item xs={12} justify='space-between'>
          <Grid item xs={9}>
            <CardContent>
              <Info artist={songData.artist} title={songData.title} />
              <Controls />
            </CardContent>
          </Grid>
          <Grid item xs={3} className={mediaContainer}>
            <CardMedia
              className={root}
              component='img'
              src={songData.thumbnail}
            />
          </Grid>
        </Grid>
      </Card>
      <QueuedSongList />
    </>
  )
}

export default SongPlayer
