import { Group } from './Group';
import { Wishlist } from './Wishlist';

export class User {
    id?: string;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    passwordHash: string = '';
    groups: Group[] = [];
    birthday: Date | null = null;
    role: UserRole = UserRole.Member;
    isActive: boolean = false;
    createdDateTime: Date = new Date();
    activationString: string = '';
}

export enum UserRole {
    Member,
    GroupAdmin,
    SuperAdmin,
}