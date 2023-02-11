declare module "blogs" {
    export interface PostResponse {
        success: string;
        posts: Posts[]

    }
    export interface Posts {
        author: string;
        category: string;
        closed: string;
        date: string;
        id: number;
        image: string;
        link: string;
        summary: string;
        title: string;
        visibility: string;
    }
}
