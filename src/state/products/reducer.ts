import { Product, ProductDetails } from 'products';
import * as actionTypes from '../action-types';

interface ProductsState {
    list: Product[],
    productDetails: ProductDetails | null,
};

const initialState: ProductsState = {
    list: [],
    productDetails: null,
};

interface SetProducts {
    type: typeof actionTypes.PRODUCTS_SET_PRODUCTS;
    payload: {
        products: Product[];
    }
}

interface SetProductDetails {
  type: typeof actionTypes.PRODUCTS_SET_PRODUCTDETAILS;
  payload: {
    id: number;
    productDetails: ProductDetails;
  }
}

type ProductsAction = SetProducts | SetProductDetails;

export default (state = initialState, action: ProductsAction) => {
    switch (action.type) {
      case actionTypes.PRODUCTS_SET_PRODUCTS:
        return {
          ...state,
          list: action.payload.products,
        };
      case actionTypes.PRODUCTS_SET_PRODUCTDETAILS:
        return {
          ...state,
          productDetails: action.payload.productDetails,
        };
  
    //   case actionTypes.POSTINGS_SET_POSTING_BY_ID:
    //     return {
    //       ...state,
    //       byId: {
    //         ...state.byId,
    //         [action.payload.id]: action.payload.posting,
    //       },
    //     };
  
      default:
        return { ...state };
    }
  };