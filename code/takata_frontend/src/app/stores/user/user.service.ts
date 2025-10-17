import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { GetUser } from "./user.actions";
import { UserModel } from "./user.state";

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private store: Store) { }

    loadUsers() {
        const userData: UserModel[] = [
            {
                name: "tommy",
                surname: "shelby",
                pseudo: "tommy32",
                mail: "tommy@gmail.com",
                role: "user",
                password: "string"
            },
        ];
        this.store.dispatch(new GetUser(userData));
    }
}