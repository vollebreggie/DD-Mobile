import { User } from '../Model/User.Model'; 

export class Comment {

    constructor(
        public content_id: number,
        public content: string,
        public date: Date,
        public user: User) { }

}