import React from 'react';
import { Item, Image, Description } from './styles';

const Product = ({ product = {} }) => {
  return (
    <Item key={product.index} className="item">
      <Image>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${
            product.index + 1
          }.png`}
          alt={product.name}
        />
        {product.on_sale && <div>{product.discount_percentage} off</div>}

        <button type="button">Ver pokemon</button>
      </Image>

      <Description>
        <h3>{product.name}</h3>

        {product.on_sale && <span>R${product.regular_price}</span>}

        <strong>R${product.actual_price}</strong>
      </Description>
    </Item>
  );
};

export default Product;
