import React, { Component } from 'react';
import List from '../List';
import getSongsService from '../../services/getSongsService';


export default class App extends Component {
  constructor(props){
    super(props);
    this.getSongsService = new getSongsService();
    this.state = {
      songList: []
    }
  }

  componentDidMount() {
    this.getSongsService.getChart()
      .then((songList) => {
        const artists = new Set(songList.map(({singer}) => singer))
        const genres = new Set(songList.map(({genre}) => genre))
        const years = new Set(songList.map(({year}) => year))
        this.setState({
          songList,
          artists: [...artists],
          genres: [...genres],
          years: [...years],
        })
      });
  }

  render() {
    const { songList } = this.state;
    return (
      <div className="container">
        <List songList={songList}/>
      </div>
      
    );
  }
}
