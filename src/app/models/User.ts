import { Group } from './Group';
import { Wishlist } from './Wishlist';

export class User {
    id?: string;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    passwordHash: string = '';
    groups: Group[] = [];
    wishlists: Wishlist[] = [];
    birthday: Date | null = null;
    role: UserRole = UserRole.Member;
    isActive: boolean = false;
    createdDateTime: Date = new Date();
}

export enum UserRole {
    Member,
    GroupAdmin,
    SuperAdmin,
}