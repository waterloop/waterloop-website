import React, { useEffect } from "react";
import Hero from "components/Hero/General";
import "../../theme/styles.scss";
import { ProductCard } from "components";
import { useHistory } from "react-router";
import useProducts from "hooks/products";
import { Product } from "products";

export interface ProductProperty {
  name: string;
  picture?: string;
  price: string;
  id: string;
}

export interface ProductDetailsProperty {
  name: string;
  picture?: string;
  price: string;
  description: string;
  size_fit_chart?: string;
  thumbnails?: string[];
  relatedProducts?: ProductProperty[];
}

// const mockData: ProductProperty[] = [
//   {
//       name: 'test1',
//       picture: '',
//       price: '$10'
//   },
//   {
//     name: 'test2 hfuiysiudfhs',
//     picture: '',
//     price: '$10'
//   },
//   {
//     name: 'test1  iuior',
//     picture: '',
//     price: '$10'
//   },
//   {
//     name: 'test1 ahgddg',
//     picture: '',
//     price: '$10'
//   },
//   {
//     name: 'test2',
//     picture: '',
//     price: '$10'
//   },
//   {
//     name: 'testsgdfshjfg1',
//     picture: '',
//     price: '$10'
//   },
// ];

const Shop: React.FC = () => {
  const history = useHistory();
  const {products} = useProducts();
  // const products: any[] | null = null;
  // console.log("products: ", products);
  // const [productList, setProductList] = useState<ProductProperty[]>([]);
  useEffect(() => {
    // const list = [];
    // for (let i=0; i<10; i++) {
    //   const curr = 'test' + i;
    //   list.push({
    //     name: curr,
    //     picture: 'https://placeimg.com/640/480/nature',
    //     price: '$10',
    //     id: i.toString()
    //   })
    // }
    // setProductList(list);
  }, []);
  const handleClick = (item: Product) => {
    history.push(`/shop/${item.id}`);
  }

  return(
    <div>
      <Hero
        title="SHOP WATERLOOP"
        description="Wear official merchandise."
        anchor="#contact-form"
      ></Hero>

      <div className="productListContainer">
        <div className="productCardWrapper">
          {products && Array.isArray(products) && products.map((product) => {
              return (
                <ProductCard data={product} onClick={() => handleClick(product)}/>
              )
            }
            )
          }
        </div>    
      </div>
    </div >
  )
};

export default Shop;
