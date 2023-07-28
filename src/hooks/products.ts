import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import * as productsActions from '../state/products/actions';
import * as productsSelectors from '../state/products/selectors';

const useProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsSelectors.products);
    const getProducts = useCallback(
        async () => {
          try {
            const response = await api.products.getProducts();
            const products = response.data;
            return products;

        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
            }
        }, [],
    );

    useEffect(() => {
        (async () => {
          dispatch(productsActions.setProducts(await getProducts() ?? []));
        })();
      }, [dispatch, getProducts]);

    return {
        products,
    };
}

export default useProducts;