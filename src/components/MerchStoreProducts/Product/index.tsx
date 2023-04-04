import React from 'react';

interface ProductProps {
    id: number;
    title: string;
    desc: string;
    price: number;
}

export class Product extends React.Component<
    ProductProps
> {
  render() {
    return (
      <>
        <h2>product component</h2>
      </>
    );
  }
}
