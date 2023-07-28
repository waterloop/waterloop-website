import { AxiosResponse } from 'axios';
import { Product, ProductDetails } from 'products';
import { Server } from 'server';

const getProducts = (server: Server) => (): Promise<AxiosResponse<Product[]>> => server.get(`/api/products`);
const getProductDetails = (server: Server) => (id: number): Promise<AxiosResponse<ProductDetails>> => server.get(`/api/products/${id}`);

export default (server: Server) => ({
    getProducts: getProducts(server),
    getProductDetails: getProductDetails(server),
  });