import React, { Component } from 'react';
import List from '../List';
import Controlers from '../Controlers';
import Footer from '../Footer';
import getSongsService from '../../services/getSongsService';
import filter from '../../utils/filter';
import './App.scss';


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
      yearFilter: 'All',
      displayedItems: 10,
      activePage: 1
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

  onDisplayedItemsChange = (amount) => {
    this.setState({
      activePage: amount
    })
  }

  render() {
    const {
      songList,
      artists,
      genres,
      years,
      artistFilter,
      genreFilter,
      yearFilter,
      displayedItems,
      activePage
    } = this.state;
    const visiableContent = filter(songList, artistFilter, genreFilter, yearFilter);
    const page = visiableContent.splice((activePage - 1) * displayedItems, displayedItems);
    const pagesAmount = Math.ceil(songList.length/displayedItems);
    return (
      <div className="container">
        <List
          songList={page}
        />
        <Controlers
          artists={artists}
          genres={genres}
          years={years}
          onArtistFilterChange={this.onArtistFilterChange}
          onGenreFilterChange={this.onGenreFilterChange}
          onYearFilterChange={this.onYearFilterChange}
        />
        <Footer
          displayedPages={pagesAmount}
          activePage={activePage}
          displayedItems={displayedItems}
          onDisplayedItemsChange={this.onDisplayedItemsChange}

        />
      </div>
    );
  }
}
