export class GetUser {
    static readonly type = '[user] get';
    constructor(public users: any) {}
}