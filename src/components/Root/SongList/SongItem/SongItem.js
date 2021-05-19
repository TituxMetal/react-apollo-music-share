import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography
} from '@material-ui/core'
import { PlayArrow, Save } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2)
  },
  root: {
    height: '100%',
    width: '100%'
  },
  mediaContainer: {
    height: '140px',
    width: '140px'
  }
}))

const SongItem = ({ artist, title, thumbnail }) => {
  const { container, mediaContainer, root } = useStyles()

  return (
    <Card className={container}>
      <Grid container alignItems='center' direction='row'>
        <Grid item xs={2} className={mediaContainer}>
          <CardMedia className={root} component='img' src={thumbnail} />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body1' component='p' color='textSecondary'>
              {artist}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions>
            <IconButton size='small' color='primary'>
              <PlayArrow />
            </IconButton>
            <IconButton size='small' color='secondary'>
              <Save />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default SongItem
