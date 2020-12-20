export class User {
    constructor(
        public _id: string,
        public username: string,
        public email: string,
        public password: string,
        public name: string,
        public description: string,
        public image: string, 
    ) {}
}
