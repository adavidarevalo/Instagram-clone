export interface IUser {
    _id: string;
    avatar: string;
    description: string;
    email: string;
    name: string;
    userName: string;
    website: string;
}

export interface IUserPassword {
    lastPassowrd: string;
    password: string;
    confirmPassword: string;
}
