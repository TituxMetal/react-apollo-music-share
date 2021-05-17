import {
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core'
import React from 'react'

const FormDialog = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Edit Song</DialogTitle>
    <DialogContent>
      <CardMedia
        component='img'
        style={{ width: 'auto', margin: 'auto' }}
        src='http://placekitten.com/g/250/250'
        alt='Song Thumbnail'
      />
      <TextField margin='dense' fullWidth name='title' label='Title' />
      <TextField margin='dense' fullWidth name='artist' label='Artist' />
      <TextField margin='dense' fullWidth name='thumbnail' label='Thumbnail' />
    </DialogContent>
    <DialogActions>
      <Button autoFocus color='secondary' onClick={onClose}>
        Cancel
      </Button>
      <Button color='primary' variant='outlined'>
        Add Song
      </Button>
    </DialogActions>
  </Dialog>
)

export default FormDialog
