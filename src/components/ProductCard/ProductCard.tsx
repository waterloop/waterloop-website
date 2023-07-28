import React from 'react';
// import { Button, Props } from 'components';
// import styled from 'styled-components';
import '../../theme/styles.scss';
// import { ProductProperty } from 'pages/Shop/Shop';
import { Product } from 'products';

// interface Props = {
//     name: string;
//     picture ?: string;
//     price: string;
// }

interface ProductCardProps {
    data: Product;
    onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data,
    onClick = () => null,
}) => {
    // const [openDetails, setOpenDetails] = useState(false);

    return (
        <div key={`productcard: ${data.id}`} className='productCardContainer' onClick={onClick}>
            <div className="productCardContent">
                <div className='imageContainer'>
                    <img src={data.picture} alt=""/>
                </div>
                <div className='labelContainer'>
                    <div className='name'>{data.name}</div>
                    {/* <div className='price'>{data.price}</div> */}
                    <div className='price'>${data.price}</div>
                </div>
            </div>
            
        </div>
    )
}
export default ProductCard;