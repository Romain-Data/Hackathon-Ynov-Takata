import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { GetGames } from "./game.actions";
import { GameModel } from "./game.state";

@Injectable({ providedIn: 'root' })
export class PlanService {

    constructor(private store: Store) { }

    loadPlan() {
        const gamesData: GameModel[] = [
            {
                idTable: "Table1",
                startDate: new Date('2025-10-16T14:00:00'),
                endDate: new Date('2025-10-16T15:30:00'),
                redGoald: 6,
                blueGoal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                idTable: "Table2",
                startDate: new Date('2025-10-16T14:00:00'),
                endDate: new Date('2025-10-16T15:30:00'),
                redGoald: 6,
                blueGoal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                idTable: "Table3",
                startDate: new Date('2025-10-16T14:00:00'),
                endDate: new Date('2025-10-16T15:30:00'),
                redGoald: 6,
                blueGoal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                idTable: "Table4",
                startDate: new Date('2025-10-16T14:00:00'),
                endDate: new Date('2025-10-16T15:30:00'),
                redGoald: 6,
                blueGoal: 10,
                winner: "Blue",
                duration: "1h30"
            },
        ];
        this.store.dispatch(new GetGames(gamesData));
    }
}