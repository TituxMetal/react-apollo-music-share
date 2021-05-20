import {
  Avatar,
  Grid,
  IconButton,
  makeStyles,
  Typography
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles(theme => ({
  items: {
    margin: theme.spacing(1, 0)
  },
  avatarContainer: {
    height: theme.spacing(6),
    width: theme.spacing(6)
  }
}))

const QueuedSongItem = ({ artist, title, thumbnail }) => {
  const { items, avatarContainer } = useStyles()

  return (
    <Grid
      className={items}
      item
      container
      alignItems='center'
      justify='space-between'
    >
      <Grid item xs={1}>
        <Avatar className={avatarContainer} src={thumbnail} alt={title} />
      </Grid>
      <Grid item xs={8}>
        <Typography variant='subtitle2'>{title}</Typography>
        <Typography variant='body2' color='textSecondary'>
          {artist}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <Delete color='error' />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default QueuedSongItem
