import { User } from './user';

export class Res {
    constructor(
        public status: string,
        public user: User,
    ) {}
}

export class ResSong {
    constructor(
        public status: string,
        public song,
    ) {}
}