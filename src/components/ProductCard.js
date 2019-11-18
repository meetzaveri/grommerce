import React from 'react';
import PropTypes from 'prop-types';
import { routes } from '../config/routes';
import { Link } from 'react-router-dom';

const ProductCard = ({
  id,
  img,
  description,
  discounted_price,
  mrp,
  name,
  quantity
}) => {
  return (
    <div className="mb-5 col-12 col-lg-6">
      <div className="flex-row listing-card-container card">
        <div className="w-40 position-relative">
          <Link to={routes.productInfo.replace(':id', id)}>
            <img src={img} alt={description} className="card-img-left" />
            <span className="position-absolute badge-top-left badge badge-danger badge-pill">
              <strike>&#8377; {mrp}</strike>
            </span>
            <span className="position-absolute badge-top-left-2 badge badge-danger badge-pill">
              &#8377; {discounted_price}
            </span>
          </Link>
        </div>
        <div className="w-60 d-flex align-items-center">
          <div className="card-body">
            <Link to={routes.productInfo.replace(':id', id)}>
              <h5 className="listing-heading">{name}</h5>
              <span className="text-muted">{quantity} units</span>
            </Link>
            <br />
            <p className="mt-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  discounted_price: PropTypes.number,
  mrp: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number
};

export default ProductCard;
