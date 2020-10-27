import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../store/actions/Products';
import Product from '../../components/Product';
import { List, Options } from './styles';

const ListProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.data);

  useEffect(() => {
    dispatch(actions.getProducts());
  }, [dispatch]);

  return (
    <List>
      <Options>
        <h1>produtos</h1>
        <span>({products.length} items)</span>
      </Options>
      <ul>
        {products.map((product) => (
          <Link key={product.index} to={`/product/${product.index}`}>
            <Product product={product} />
          </Link>
        ))}
      </ul>
    </List>
  );
};
export default ListProducts;
