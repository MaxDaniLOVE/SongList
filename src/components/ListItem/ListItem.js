import React from 'react';

const ListItem = ({id, artist, song, genre, year}) => {
  return(
    <tr className="table-light">
      <th scope="row">{artist}</th>
      <td>{song}</td>
      <td>{genre}</td>
      <td>{year}</td>
    </tr>
  )
}

export default ListItem;