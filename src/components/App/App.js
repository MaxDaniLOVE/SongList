import React, { Component } from 'react';
import List from '../List';
import Filters from '../Filters';
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
      activePage: 1,
      isSortSelected: false,
      sortedList: []
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
      artistFilter: filter,
      activePage: 1
    })
  }

  onGenreFilterChange = (filter) => {
    this.setState({
      genreFilter: filter,
      activePage: 1
    })
  }

  onYearFilterChange = (filter) => {
    this.setState({
      yearFilter: filter,
      activePage: 1
    })
  }

  onActivePageChange = (activePage) => {
    this.setState({
      activePage,
    })
  }

  onDisplayedItemsChange = (displayedItems) => {
    this.setState({
      displayedItems,
      activePage: 1
    })
  }

  onArtistSort = () => {
    this.setState(({songList, isSortSelected}) => {
      const sortedList = [...songList].sort((a, b) => {
        if (a.artist > b.artist) return 1;
        if (a.artist < b.artist) return -1;
        return 0;
      });
      return {
        sortedList,
        isSortSelected: !isSortSelected
      }
    })
  }

  onGenreSort = () => {
    this.setState(({songList, isSortSelected}) => {
      const sortedList = [...songList].sort((a, b) => {
        if (a.genre > b.genre) return 1;
        if (a.genre < b.genre) return -1;
        return 0;
      });
      return {
        sortedList,
        isSortSelected: !isSortSelected
      }
    })
  }

  onSongSort = () => {
    this.setState(({songList, isSortSelected}) => {
      const sortedList = [...songList].sort((a, b) => {
        if (a.song > b.song) return 1;
        if (a.song < b.song) return -1;
        return 0;
      });
      return {
        sortedList,
        isSortSelected: !isSortSelected
      }
    })
  }

  onYearSort = () => {
    this.setState(({songList, isSortSelected}) => {
      const sortedList = [...songList].sort((a, b) => {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        return 0;
      });
      return {
        sortedList,
        isSortSelected: !isSortSelected
      }
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
      activePage,
      isSortSelected,
      sortedList
    } = this.state;
    const list = !isSortSelected ? songList : sortedList;
    const visiableContent = filter(list, artistFilter, genreFilter, yearFilter);
    const pagesAmount = Math.ceil(visiableContent.length / displayedItems);
    const page = visiableContent.splice((activePage - 1) * displayedItems, displayedItems);
    return (
      <div className="container">
        <List
          songList={page}
          onArtistSort={this.onArtistSort}
          onSongSort={this.onSongSort}
          onGenreSort={this.onGenreSort}
          onYearSort={this.onYearSort}
        />
        <Filters
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
          onActivePageChange={this.onActivePageChange}
          onDisplayedItemsChange={this.onDisplayedItemsChange}
        />
      </div>
    );
  }
}
