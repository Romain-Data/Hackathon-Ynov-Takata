import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { GetUser } from "./user.actions";
import { UserModel } from "./user.state";

@Injectable({ providedIn: 'root' })
export class GameService {

    constructor(private store: Store) { }

    loadUsers() {
        const userData: UserModel[] = [
            {
                idTable: "Table1",
                startDate: new Date('2025-10-16T14:00:00'),
                endDate: new Date('2025-10-16T15:30:00'),
                redGoal: 6,
                blueGoal: 10,
                winner: "Blue",
                duration: "1h30"
            },
        ];
        this.store.dispatch(new GetUser(userData));
    }
}