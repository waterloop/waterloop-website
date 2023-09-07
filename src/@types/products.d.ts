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
        id: number;
        product_id: number;
        name: string;
        description: string;
        category: string;
        price: number;
        picture: string;
        related_product_ids: string;
        order_link: string;
    }
}