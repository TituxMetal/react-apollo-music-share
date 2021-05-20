import React from 'react'

import { DataList } from '#root/components/DataList'

import { SongItem } from './SongItem'

const SongList = () => <DataList itemComponent={SongItem} itemNumber={10} />

export default SongList
