import React from 'react';

const Controlers = ({artists, genres, years}) => {
  const artistsList = artists.map((artist, idx) => <option key={idx + 1}>{artist}</option>)
  const genresList = genres.map((genre, idx) => <option key={idx + 1}>{genre}</option>)
  const yearsList = years.map((year, idx) => <option key={idx + 1}>{year}</option>)
  return(
    <form>
      <fieldset>
        <div className="form-group">
          <label htmlFor="exampleSelect1">Artists</label>
          <select className="form-control" id="exampleSelect1">
            <option>All</option>
            {artistsList}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1">Genres</label>
          <select className="form-control" id="exampleSelect1">
            <option>All</option>
            {genresList}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1">Years</label>
          <select className="form-control" id="exampleSelect1">
            <option>All</option>
            {yearsList}
          </select>
        </div>
      </fieldset>
    </form>
  )
}

export default Controlers;