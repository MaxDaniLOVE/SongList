import React from 'react';

const ListItem = ({id, singer, song, genre, year}) => {
  return(
    <tr className="table-light">
      <th scope="row">{singer}</th>
      <td>{song}</td>
      <td>{genre}</td>
      <td>{year}</td>
    </tr>
  )
}

export default ListItem;