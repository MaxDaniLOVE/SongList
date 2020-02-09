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
        this.setState({
          songList,
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
