export class User {

    constructor(
        public user_id: number,
        public emai: string,
        public password: string,
        public name: string,
        public active: boolean,
        public address: string,
        public picture: string,
        public phonenumber: string,
        public gender: string) { }

}