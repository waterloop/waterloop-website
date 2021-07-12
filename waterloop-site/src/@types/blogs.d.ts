declare module "blogs" {
    export interface PostResponse {
        success: string;
        posts: Posts[]

    }
    export interface Posts {
        id: number;
        author: string;
        summary: string;
        date: string;
        link: string;
        image: string;
        title: string;
    }
}