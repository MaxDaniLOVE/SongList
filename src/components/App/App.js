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
      selectedSort: null,
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

  onArtistSort = (index) => {
    this.setState(({songList, selectedSort}) => {
      let newSort;
      if (index === 1) {
        newSort = selectedSort === 'ArtistUp' ? null : 'ArtistUp';
      } else {
        newSort = selectedSort === 'ArtistDown' ? null : 'ArtistDown';
      }
      const sortedList = [...songList].sort((a, b) => {
        if (a.artist > b.artist) return 1 * index;
        if (a.artist < b.artist) return -1 * index;
        return 0;
      });
      return {
        sortedList,
        selectedSort: newSort
      }
    })
  }

  onGenreSort = (index) => {
    this.setState(({songList, selectedSort}) => {
      let newSort;
      if (index === 1) {
        newSort = selectedSort === 'GenreUp' ? null : 'GenreUp';
      } else {
        newSort = selectedSort === 'GenreDown' ? null : 'GenreDown';
      }
      const sortedList = [...songList].sort((a, b) => {
        if (a.genre > b.genre) return 1 * index;
        if (a.genre < b.genre) return -1 * index;
        return 0;
      });
      return {
        sortedList,
        selectedSort: newSort
      }
    })
  }

  onSongSort = (index) => {
    this.setState(({songList, selectedSort}) => {
      let newSort;
      if (index === 1) {
        newSort = selectedSort === 'SongUp' ? null : 'SongUp';
      } else {
        newSort = selectedSort === 'SongDown' ? null : 'SongDown';
      }
      const sortedList = [...songList].sort((a, b) => {
        if (a.song > b.song) return 1 * index;
        if (a.song < b.song) return -1 * index;
        return 0;
      });
      return {
        sortedList,
        selectedSort: newSort
      }
    })
  }

  onYearSort = (index) => {
    this.setState(({songList, selectedSort}) => {
      let newSort;
      if (index === 1) {
        newSort = selectedSort === 'YearUp' ? null : 'YearUp';
      } else {
        newSort = selectedSort === 'YearDown' ? null : 'YearDown';
      }
      const sortedList = [...songList].sort((a, b) => {
        if (a.year > b.year) return 1 * index;
        if (a.year < b.year) return -1 * index;
        return 0;
      });
      return {
        sortedList,
        selectedSort: newSort
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
      selectedSort,
      sortedList
    } = this.state;
    const list = !selectedSort ? songList : sortedList;
    const visiableContent = filter(list, artistFilter, genreFilter, yearFilter);
    const pagesAmount = Math.ceil(visiableContent.length / displayedItems);
    const page = visiableContent.splice((activePage - 1) * displayedItems, displayedItems);
    return (
      <div className="container">
        <List
          songList={page}
          clickHandlers={[this.onArtistSort, this.onSongSort, this.onGenreSort, this.onYearSort]}
          selectedSort={selectedSort}
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
