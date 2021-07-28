import React from 'react';
import PropTypes from 'prop-types';
import Queen from './Queen';

const QueenList = ({ queens }) => {
  const queenElements = queens.map((queen) => (
    <li key={queen.name}>
      <Queen 
        name={queen.name}
        image={queen.image}
        quote={queen.quote}
      />
    </li>
  ));

  return <ul>{queenElements}</ul>;
};

QueenList.propTypes = {
  queens: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      quote: PropTypes.string
    })).isRequired
};

export default QueenList;
