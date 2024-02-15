import { User } from "./User";

export class Group {
    id?: string;
    groupName: string = '';
    groupDescription: string = '';
    members: User[] = [];
    createdDateTime: Date = new Date();
    groupAdmin?: User;
}