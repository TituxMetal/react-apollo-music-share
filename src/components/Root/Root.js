import { Grid } from '@material-ui/core'
import React from 'react'

import { AddSong } from './AddSong'
import { Header } from './Header'
import { SongList } from './SongList'
import { SongPlayer } from './SongPlayer'

const Root = () => (
  <>
    <Grid container>
      <Header />
    </Grid>
    <Grid container>
      <Grid item xs={12} md={7}>
        <AddSong />
        <SongList />
      </Grid>
      <Grid item xs={12} md={5}>
        <SongPlayer />
      </Grid>
    </Grid>
  </>
)

export default Root
