import React from 'react';
import PropTypes from 'prop-types';

const Queen = ({ name, image_url, quote }) => (
  <figure>
    <img src={image_url} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{quote}</p>
    </figcaption>
  </figure>
);

Queen.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  quote: PropTypes.string,
};

export default Queen;
