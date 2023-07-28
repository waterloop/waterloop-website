import { ReduxState } from "state";

export const products = (state: ReduxState) => state.products.list;

export const productDetails = (id: number) => (state: ReduxState) => state.products.productDetails;