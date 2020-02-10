import React, { Component } from 'react';

export default class Controlers extends Component {
  state = {
    artistFilter: [
      { artist: 'All', value: 'All' },
    ],
    genreFilter: [
      { genre: 'All', value: 'All' },
    ],
    yearsFilter: [
      { year: 'All', value: 'All' }
    ]
  }

  componentDidUpdate(prevProps) {
    if (prevProps.years.length !== this.props.years.length) {
      const {artists, genres, years} = this.props;
      const artistsList = artists.map((artist) => artist)
      const genresList = genres.map((genre) => genre)
      const yearsList = years.map((year) => year)
      this.setState(({artistFilter, genreFilter, yearsFilter}) => {
        const newArtistFilter = artistsList.map((el) => {return {artist: el, value: el}})
        const newGenresList = genresList.map((el) => {return {genre: el, value: el}})
        const newYearsFilter = yearsList.map((el) => {return {year: el, value: el}})
        return{
          artistFilter: [...artistFilter, ...newArtistFilter],
          genreFilter: [...genreFilter, ...newGenresList],
          yearsFilter: [...yearsFilter, ...newYearsFilter]
        }
      })
    }
  }

  render() {
    const {artistFilter, genreFilter, yearsFilter} = this.state;
    const {onArtistFilterChange, onGenreFilterChange, onYearFilterChange} = this.props;
    const artistsList = artistFilter.map(({artist, value}) => <option key={value}>{artist}</option>)
    const genresList = genreFilter.map(({genre, value}) => <option key={value}>{genre}</option>)
    const yearsList = yearsFilter.map(({year, value}) => <option key={value}>{year}</option>)
    return(
      <form className="container-controlers">
        <fieldset>
          <div className="form-group">
            <label htmlFor="exampleSelect1">Artists</label>
            <select
              onChange={(e) =>{
                onArtistFilterChange(e.target.value)
              }}
              className="form-control"
              id="exampleSelect1"
            >
              {artistsList}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1">Genres</label>
            <select
              onChange={(e) =>{
                onGenreFilterChange(e.target.value)
              }}
              className="form-control"
              id="exampleSelect1"
            >
              {genresList}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1">Years</label>
            <select
              onChange={(e) =>{
                onYearFilterChange(e.target.value)
              }}
              className="form-control"
              id="exampleSelect1"
            >
              {yearsList}
            </select>
          </div>
        </fieldset>
      </form>
    )
  }
}
