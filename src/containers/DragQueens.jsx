import React, { Component } from 'react';
import QueenList from '../components/queens/QueenList.jsx';
import { fetchQueens } from '../services/dragRaceApi.js';

export default class DragQueens extends Component {
  state = {
    queens: [],
    loading: true
  }

  async componentDidMount() {
    const queens = await fetchQueens();
    this.setState({ queens, loading: false });
  }

  render() {
    const { queens, loading } = this.state;
    if(loading) return <h1>Loading...</h1>;
    return <QueenList queens={queens} />;
  }
}
