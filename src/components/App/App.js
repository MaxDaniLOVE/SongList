import React, { Component } from 'react';
import List from '../List';
import Controlers from '../Controlers';
import getSongsService from '../../services/getSongsService';


export default class App extends Component {
  constructor(props){
    super(props);
    this.getSongsService = new getSongsService();
    this.state = {
      songList: [],
      artists: [],
      genres: [],
      years: [],
      artistFilter: 'All',
      genreFilter: 'All',
      yearFilter: 'All'
    }
  }

  componentDidMount() {
    this.getSongsService.getChart()
      .then((songList) => {
        const artists = new Set(songList.map(({artist}) => artist));
        const genres = new Set(songList.map(({genre}) => genre));
        const years = new Set(songList.map(({year}) => year));
        this.setState({
            songList,
            artists: [...artists],
            genres: [...genres],
            years: [...years],
          })
      });
  }

  onArtistFilterChange = (filter) => {
    this.setState({
      artistFilter: filter
    })
  }

  onGenreFilterChange = (filter) => {
    this.setState({
      genreFilter: filter
    })
  }

  onYearFilterChange = (filter) => {
    this.setState({
      yearFilter: filter
    })
  }

  render() {
    const { songList, artists, genres, years } = this.state;
    return (
      <div className="container">
        <List songList={songList}/>
        <Controlers
          artists={artists}
          genres={genres}
          years={years}
          onArtistFilterChange={this.onArtistFilterChange}
          onGenreFilterChange={this.onGenreFilterChange}
          onYearFilterChange={this.onYearFilterChange}
        />
      </div>
      
    );
  }
}
