/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { fetchQueenById } from '../../services/dragRaceApi';


export default class QueenDetail extends Component {
  state = {
    queen: [],
    //loading: true
  };

  async componentDidMount() {
    // const queenToFetch  = this.props;

    const { match } = this.props;

    try {
      const queen = await fetchQueenById(match.params.id);
      // const queen = await fetchQueenById(queenToFetch.match.params.id);
      this.setState({ queen });
    } catch(err) {
      console.log(err);
    } 
  }

  render() {
    const { queen } = this.state;

    return (
      <>
        <h1>{queen.name}</h1>
        <img src={queen.image_url} alt={queen.name} height="400px" />
        <p><b>Words of Wisdom:</b> {queen.quote}</p>
      </>
    );
  }
}
