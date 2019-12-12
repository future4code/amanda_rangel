import {Post} from "./post";

export interface PostCreator extends Post{
author: string
create(author: string, text: string): void;
}