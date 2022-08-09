import { Role } from "./role";

export interface User {
    name: string;
    username: string;
    email: string;
    roles: Role[];
}