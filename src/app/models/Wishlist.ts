import { Item } from "./Item";
import { User } from "./User";

export class Wishlist {
    id?: string;
    listName: string = '';
    listDescription: string = '';
    items: Item[] = [];
    createdDateTime: Date = new Date();
    listOwner?: User;
}