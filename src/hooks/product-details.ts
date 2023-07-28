import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import * as productsActions from '../state/products/actions';
import * as productsSelectors from '../state/products/selectors';

const useProductDetails = (id: number) => {
    const dispatch = useDispatch();
    const productDetails = useSelector(productsSelectors.productDetails);
    const getProductDetails = useCallback(
        async () => {
          try {
            const response = await api.products.getProductDetails(id);
            const productDetails = response.data;
            return productDetails;

        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
            }
        }, [],
    );

    useEffect(() => {
        (async () => {
          dispatch(productsActions.setProductDetails(id, await getProductDetails() || null));
        })();
      }, [dispatch, getProductDetails]);

    return {
        productDetails,
    };
}

export default useProductDetails;