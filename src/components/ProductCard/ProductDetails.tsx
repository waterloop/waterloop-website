import React from 'react';
import '../../theme/styles.scss';
import { ProductDetailsProperty } from 'pages/Shop/Shop';
import { useParams } from 'react-router';
import sizeIcon from '../../static/img/merchStore/size-icon.svg';
import useProductDetails from 'hooks/product-details';
import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
import sizeChart from '../../../src/static/img/merchStore/size-chart.svg';
import { useHistory } from "react-router";

interface ProductDetailsProps {
    data?: ProductDetailsProperty;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    data
}) => {
    const { id } = useParams();
    const history = useHistory();
    const {productDetails} = useProductDetails(id);
    console.log("product details: ", productDetails);
    const productOnClick = (id: number) => {
        history.replace(`/shop/${id}`);
        window.location.reload();
    }

    return (
        <div className='productDetailsContainer'>
            <div className='productDetailsTop'>
                <div className='leftSection'>
                    {productDetails?.thumbnails?.map((item) => {
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
            {/* <div className='related-products-border'>
                <div className='related-product-text'>Related Products</div>
                <div className='border-line'></div>
            </div> */}
            <div className='relatedProductsContainer'>
            <div className='related-product-text'>Related Products</div>
                {productDetails?.related_products?.map((item) => {
                    return (
                        <div className='related-product'>
                            <img onClick={() => productOnClick(item.id)} src={item.picture} alt='cannot find product image' className='related-product-img'></img>
                            <div className='related-product-labels'>
                                <div className='related-product-title'>{item.name}</div>
                                <div className='related-product-price'>{'$' + item.price}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductDetails;