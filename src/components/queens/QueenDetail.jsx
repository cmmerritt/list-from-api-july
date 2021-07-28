import React, { Component } from 'react';
import { fetchQueenById } from '../../services/dragRaceApi';


export default class QueenDetail extends Component {
  state = {
    queen: [],
    loading: true
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
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { queen } = this.state;

    return (
      <>
        <h1>{queen.name}</h1>
        <img src={queen.image} alt={queen.name}/>
        <p>Words of Wisdom: {queen.quote}</p>
      </>
    );
  }
}
