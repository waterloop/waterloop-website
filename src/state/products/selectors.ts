import { ReduxState } from "state";

export const products = (state: ReduxState) => state.products.list;

export const productDetails = (state: ReduxState) => state.products.productDetails;