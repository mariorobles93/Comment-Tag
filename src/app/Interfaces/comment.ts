import {User} from "./user";

export interface Comment {
    id: number;
    userID: number;
    name: string;
    content: string;
    timestamp: Date;
    tags ? : User[];
}
