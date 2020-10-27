import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons';

import { Product, ProductGroup, ProductInfo, InfoPrice } from './styles';

const SingleProduct = ({ product = {} }) => {
  const dispatch = useDispatch();

  return (
    <Product className="product">
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${
          product.index + 1
        }.png`}
        alt="pokemon"
      />

      <ProductGroup>
        <ProductInfo>
          <h3>{product.name}</h3>
          <InfoPrice>
            {product.on_sale && <span>R$ {product.regular_price}</span>}
            <strong>R${product.actual_price}</strong>
            <br />
            <span className="installments">Em até {product.installments}x</span>
          </InfoPrice>
        </ProductInfo>

        <Link to="/" className="link-back">
          <BsArrowLeft size={24} />
          Voltar para a home
        </Link>
      </ProductGroup>
    </Product>
  );
};

export default SingleProduct;
