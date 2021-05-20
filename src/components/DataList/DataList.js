import React from 'react'

import { songData } from '#root/data'

const DataList = ({ itemComponent: ItemComponent, itemNumber }) =>
  Array.from({ length: itemNumber }, () => songData).map((song, index) => (
    <ItemComponent key={index} {...song} />
  ))

export default DataList
