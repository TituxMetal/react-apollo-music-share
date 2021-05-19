import React from 'react'

import { SongItem } from './SongItem'

const songData = {
  title: 'Hypnotize',
  artist: 'System Of A Down',
  thumbnail: 'https://i.ytimg.com/vi/KAEBfiaY6Rc/hqdefault.jpg'
}

const SongList = () =>
  Array.from({ length: 10 }, () => songData).map((song, index) => (
    <SongItem key={index} {...song} />
  ))

export default SongList
