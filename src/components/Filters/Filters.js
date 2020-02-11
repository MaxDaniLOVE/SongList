import React, { Component } from 'react';
import FilterItem from '../FilterItem';

export default class Filters extends Component {
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

  componentDidMount() {
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

  render() {
    const {artistFilter, genreFilter, yearsFilter} = this.state;
    const {onArtistFilterChange, onGenreFilterChange, onYearFilterChange} = this.props;
    const artistsList = artistFilter.map(({artist, value}) => <option key={value}>{artist}</option>)
    const genresList = genreFilter.map(({genre, value}) => <option key={value}>{genre}</option>)
    const yearsList = yearsFilter.map(({year, value}) => <option key={value}>{year}</option>)
    return(
      <form className="container-controlers">
        <fieldset>
          <FilterItem
            label={'Artists'}
            filterFunc={onArtistFilterChange}
            selectList={artistsList}
          />
          <FilterItem
            label={'Genres'}
            filterFunc={onGenreFilterChange}
            selectList={genresList}
          />
          <FilterItem
            label={'Years'}
            filterFunc={onYearFilterChange}
            selectList={yearsList}
          />
        </fieldset>
      </form>
    )
  }
}
