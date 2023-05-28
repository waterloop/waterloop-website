import React from 'react';
import '../../theme/styles.scss';
import { ProductDetailsProperty } from 'pages/Shop/Shop';

const ProductDetails: React.FC<ProductDetailsProperty> = ({
    name,
    picture = '',
    price,
    description,
    size_fit_chart
}) => {
    return (
        <div className='productDetailsContainer'>
            <div className='productDetailsTop'>
                <div className='leftSection'></div>
                <div className='middleSection'></div>
                <div className='rightSection'></div>
            </div>
            <div className='relatedProductsContainer'></div>
        </div>
    )
}

export default ProductDetails;