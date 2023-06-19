import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ProductDetails from 'components/ProductCard/ProductDetails';
import Shop, { ProductDetailsProperty } from './Shop';

const productDetails: ProductDetailsProperty = {
    name: 'Waterloop Sweatpants',
    picture: 'https://placeimg.com/640/480/nature',
    price: '$20',
    description: 'Sweatpants are casual pants designed for comfort and made of soft, absorbent materials such as cotton or fleece.',
    size_fit_chart: 'https://placeimg.com/640/480/nature',
    thumbnails: [
        'https://placeimg.com/640/480/nature', 
        'https://placeimg.com/640/480/nature', 
        'https://placeimg.com/640/480/nature', 
        'https://placeimg.com/640/480/nature'
    ],
    relatedProducts: [{
        name: 'Waterloop shirt',
        picture: 'https://placeimg.com/640/480/nature',
        price: '$10',
        id: '0'
    },
    {
        name: 'Waterloop shirt2',
        picture: 'https://placeimg.com/640/480/nature',
        price: '$10',
        id: '1'
    }]
  }

const ShopRouter = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={path} exact>
                <Shop/>
            </Route>
            <Route path={`${path}/:id`}>
                <ProductDetails data={productDetails}></ProductDetails>
            </Route>
        </Switch>
    );
}

export default ShopRouter;