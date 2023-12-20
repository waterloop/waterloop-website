import React from 'react';
import '../../theme/styles.scss';
import { ProductDetailsProperty } from 'pages/Shop/Shop';
import { useParams } from 'react-router';
import sizeIcon from '../../static/img/merchStore/size-icon.svg';
import useProductDetails from 'hooks/product-details';
import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
import sizeChart from '../../../src/static/img/merchStore/size-chart.svg';

interface ProductDetailsProps {
    data?: ProductDetailsProperty;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    data
}) => {
    const { id } = useParams();
    console.log("id: ", id);
    const {productDetails} = useProductDetails(id);
    console.log("product details: ", productDetails);

    return (
        <div className='productDetailsContainer'>
            <div className='productDetailsTop'>
                <div className='leftSection'>
                    {/* Make sure to change the data to productDetails once we update the cms database to hold thumbnails */}
                    {data?.thumbnails?.map((item) => {
                        return (
                            <img src={item}></img>
                        )
                    }
                    )}
                </div>
                <div className='middleSection'>
                    <img src={productDetails?.picture}></img>
                </div>
                <div className='rightSection'>
                    <div className='productTitle'>{productDetails?.name}</div>
                    <div className='price'>{"CA $" + productDetails?.price}</div>
                    <div className='sizeChart'>
                        <div className='sizeChartText'>How does it fit?  </div>
                        <Tippy content={<img src={sizeChart}/>}>
                        <img id="sizechart" src={sizeIcon} className='sizeChartIcon'></img>
                        </Tippy>
                    </div>
                    <div className='description'>{productDetails?.description}</div>
                    <div className='orderButton'>
                    <a href={productDetails?.order_link} target="_blank" style={{ textDecoration: 'none'}}>
                    Order with Form
                    </a>
                    </div>
                </div>
            </div>
            <div className='relatedProductsContainer'></div>
        </div>
    )
}

export default ProductDetails;