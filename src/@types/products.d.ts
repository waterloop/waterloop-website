declare module "products" {
    export interface Product {
        id: number;
        name: string;
        description: string;
        category: string;
        price: number;
        picture: string;
    }
    export interface ProductDetails extends Product {
        variation_name: string;
        product_id: number;
        price: number;
        stock: number;
        picture: string;
        last_updated: string;
    }
}