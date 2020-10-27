/* eslint-disable object-curly-newline */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import actionsTypes from '../../constants/Products';
import actions from '../actions/Products';

import api from '../../services/api';

function* getProducts() {
  try {
    const response = yield call(api.getAll);

    const products = response.results.map((item, index) => {
      return {
        index,
        ...item,
        actual_price: 20.0,
        regular_price: 69.0,
        on_sale: true,
        installments: 3,
      };
    });

    yield put(actions.getProductsSuccess(products));
  } catch (err) {
    yield put(actions.getProductsFailure());
  }
}

function* watchRequest() {
  yield takeLatest(actionsTypes.REQUEST_PRODUCTS, getProducts);
}

function* productsSagas() {
  yield all([watchRequest()]);
}

export default productsSagas;
