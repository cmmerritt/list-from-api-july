import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Queen = ({ name, image, quote, id }) => (
  <Link to={`/queens/${id}`}>
    <figure>
      <img src={image} alt={name} width="300px"/>
      <figcaption>
        <p>{name}</p>
        <p>{quote}</p>
      </figcaption>
    </figure>
  </Link>
);

Queen.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Queen;
