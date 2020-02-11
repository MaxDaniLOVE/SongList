import React from 'react';
import ListItem from '../ListItem';
import './List.scss'

const List = ({songList, clickHandlers, selectedSort}) => {
  const tableHeaderLabels = ['Artist','Song','Genre','Year'];
  const tableHeader = tableHeaderLabels.map((element, idx) => {
    const tableHeaderRegExp = new RegExp(element)
    const sortUpRegExp = /(Up)$/m;
    const sortDownRegExp = /(Down)$/m;
    const iconUpClassName = sortUpRegExp.test(selectedSort) && tableHeaderRegExp.test(selectedSort)
      ? 'active'
      : '';
    const iconDownClassName = sortDownRegExp.test(selectedSort) && tableHeaderRegExp.test(selectedSort)
      ? 'active'
      : '';
    return (
      <th
        className="table-header"
        scope="col"
        key={idx + 1}
      >
        {element}
        <span className="table-header_btns-span">
          <i
            onClick={() => {
              clickHandlers[idx](1)
            }}
            className={"fa fa-chevron-up "+ iconUpClassName}
          />
          <i
            onClick={() => clickHandlers[idx](-1)}
            className={"fa fa-chevron-down "+ iconDownClassName}
          />
        </span>
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