import React from 'react';
import ListItem from '../ListItem';

const List = ({songList, onArtistSort, onSongSort, onGenreSort, onYearSort}) => {
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
          <th scope="col" onClick={() => onArtistSort()}>Singer</th>
          <th scope="col" onClick={() => onSongSort()}>Song</th>
          <th scope="col" onClick={() => onGenreSort()}>Genre</th>
          <th scope="col" onClick={() => onYearSort()}>Year</th>
        </tr>
      </thead>
      <tbody>
        {songsArray}
      </tbody>
    </table> 
  )
}

export default List;