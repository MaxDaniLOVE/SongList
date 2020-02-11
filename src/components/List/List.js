import React from 'react';
import ListItem from '../ListItem';
import './List.scss'

const List = ({songList, clickHandlers, selectedSort}) => {
  const tableHeaderLabels = ['Artist','Song','Genre','Year'];
  const tableHeader = tableHeaderLabels.map((element, idx) => {
    const newClassName = selectedSort === element ? 'table-header_active' : 'table-header'
    return (
      <th
        className={newClassName}
        scope="col"
        onClick={() => clickHandlers[idx]()}
        key={idx + 1}
      >
        {element}
      </th>
    )
  })
  const songsArray = songList.map(({id, artist, song, genre, year}) => {
    return <ListItem
              key={id}
              artist={artist}
              song={song}
              genre={genre}
              year={year}
            />
  })
  return (
    <table className="table table-hover container-list">
      <thead>
        <tr>
          {tableHeader}
        </tr>
      </thead>
      <tbody>
        {songsArray}
      </tbody>
    </table> 
  )
}

export default List;