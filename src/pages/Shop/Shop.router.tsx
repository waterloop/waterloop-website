import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ProductDetails from 'components/ProductCard/ProductDetails';
import Shop from './Shop';

const ShopRouter = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={path} exact>
                <Shop/>
            </Route>
            <Route path={`${path}/:id`}>
                <ProductDetails name={''} price={''} description={''}></ProductDetails>
            </Route>
        </Switch>
    );
}

export default ShopRouter;