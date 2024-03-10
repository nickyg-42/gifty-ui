import { User } from "./User";

export class Item {
    id?: number;
    itemName: string = "";
    itemDescription: string = "";
    itemCost: number = 0.0;
    createdDateTime: Date = new Date();
    isReserved: boolean = false;
    rating: number = 0.0;
    reservedBy?: User;
}