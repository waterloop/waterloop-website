import React from 'react';
import Product from './Product';

const testProducts = [
    {
        id: 1,
        name: 'test product',
        desc: 'test description',
        price: 23.50,
    },
    {
        id: 1,
        name: 'test product',
        desc: 'test description',
        price: 23.50,
    },
    {
        id: 1,
        name: 'test product',
        desc: 'test description',
        price: 23.50,
    },
];

export class MerchStoreProducts extends React.Component<{}> {
  render() {
    return (
      <>
        {testProducts.map((product) => {
            return (
                <Product id={product.id} name={product.name} desc={product.desc} price={product.price}/>
            );
        })}
      </>
    );
  }
}
