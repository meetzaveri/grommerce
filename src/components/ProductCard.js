import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = props => {
  console.log('props', props);
  return (
    <div className="mb-5 col-12 col-lg-6">
      <div className="flex-row listing-card-container card">
        <div className="w-40 position-relative">
          <a href="">
            <img
              src={`https://gogo-react.coloredstrategies.com/${props.img}`}
              alt={props.description}
              className="card-img-left"
            />
            <span className="position-absolute badge-top-left badge badge-primary badge-pill">
              {props.status}
            </span>
          </a>
        </div>
        <div className="w-60 d-flex align-items-center">
          <div className="card-body">
            <a href="">
              <h5 className="listing-heading">{props.name}</h5>
              <br />
              <span />
            </a>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
