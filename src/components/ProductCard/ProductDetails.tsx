import React from 'react';
import '../../theme/styles.scss';
import { ProductDetailsProperty } from 'pages/Shop/Shop';
import { useParams } from 'react-router';
import sizeIcon from '../../static/img/merchStore/size-icon.svg';
import useProductDetails from 'hooks/product-details';

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
                    {data?.thumbnails?.map((item) => {
                        return (
                            <img src={item}></img>
                        )
                    }
                    )}
                </div>
                <div className='middleSection'>
                    <img src={data?.picture}></img>
                </div>
                <div className='rightSection'>
                    <div className='productTitle'>{data?.name}</div>
                    <div className='price'>{data?.price}</div>
                    <div className='sizeChart'>
                        <div className='sizeChartText'>How does it fit?  </div>
                        <img src={sizeIcon} className='sizeChartIcon'></img>
                    </div>
                    <div className='description'>{data?.description}</div>
                    <div className='orderButton'>Order with Form</div>
                </div>
            </div>
            <div className='relatedProductsContainer'></div>
        </div>
    )
}

export default ProductDetails;