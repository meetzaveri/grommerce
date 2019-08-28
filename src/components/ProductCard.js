import React from 'react';
import PropTypes from 'prop-types';
import { routes } from '../config/routes';
import { Link } from 'react-router-dom';

const ProductCard = props => {
  return (
    <div className="mb-5 col-12 col-lg-6">
      <div className="flex-row listing-card-container card">
        <div className="w-40 position-relative">
          <Link to={routes.productInfo.replace(':id', props.id)}>
            <img
              src={`https://gogo-react.coloredstrategies.com/${props.img}`}
              alt={props.description}
              className="card-img-left"
            />
            <span className="position-absolute badge-top-left badge badge-primary badge-pill">
              {props.status}
            </span>
          </Link>
        </div>
        <div className="w-60 d-flex align-items-center">
          <div className="card-body">
            <Link to={routes.productInfo.replace(':id', props.id)}>
              <h5 className="listing-heading">{props.name}</h5>
              <br />
              <span />
            </Link>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

export default ProductCard;
