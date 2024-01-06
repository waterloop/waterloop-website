import { Product, ProductDetails } from 'products';
import * as actionTypes from '../action-types';

export const setProducts = (products: Product[] ) => ({
    type: actionTypes.PRODUCTS_SET_PRODUCTS,
    payload: {
      products,
    },
  });

export const setProductDetails = (id: number, productDetails: ProductDetails | null | {}) => ({
  type: actionTypes.PRODUCTS_SET_PRODUCTDETAILS,
  payload: {
    id, productDetails,
  }
});