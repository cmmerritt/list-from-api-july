import React, { Component } from 'react';
import { fetchQueenById } from '../../services/dragRaceApi';
import { useParams } from 'react-router-dom';

export default class QueenDetail extends Component {
  state = {
    queen: []
  };

  async componentDidMount() {
    // const queenToFetch  = this.props;

    const { id } = useParams();

    try {
      const queen = await fetchQueenById(id);
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
        <img src={queen.image}/>
        <p>Words of Wisdom: {queen.quote}</p>
      </>
    );
  }
}
