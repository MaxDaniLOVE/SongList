import React from 'react';
import ListItem from '../ListItem';

const List = ({songList}) => {
  const songsArray = songList.map(({id, artist, song, genre, year}) => {
    return <ListItem
              key={id}
              artist={artist}
              song={song}
              genre={genre}
              year={year}
            />
  })
  return (<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Singer</th>
      <th scope="col">Song</th>
      <th scope="col">Genre</th>
      <th scope="col">Year</th>
    </tr>
  </thead>
  <tbody>
    {songsArray}
  </tbody>
</table> )
}

export default List;