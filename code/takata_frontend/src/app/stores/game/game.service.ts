import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { GetGames } from "./game.actions";
import { GameModel } from "./game.state";

@Injectable({ providedIn: 'root' })
export class GameService {

    constructor(private store: Store) { }

    loadGame() {
        const gamesData: GameModel[] = [
            {
                babyfoot_tableId: "Table1",
                start_date: new Date('2025-10-16T14:00:00'),
                end_date: new Date('2025-10-16T15:30:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table2",
                start_date: new Date('2025-10-16T14:00:00'),
                end_date: new Date('2025-10-16T15:30:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table3",
                start_date: new Date('2025-10-16T14:00:00'),
                end_date: new Date('2025-10-16T15:30:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table4",
                start_date: new Date('2025-10-16T14:00:00'),
                end_date: new Date('2025-10-16T15:30:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table5",
                start_date: new Date('2025-10-16T14:00:00'),
                end_date: undefined,
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table6",
                start_date: new Date('2025-10-16T14:00:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table7",
                start_date: new Date('2025-10-16T14:00:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table8",
                start_date: new Date('2025-10-16T14:00:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table9",
                start_date: new Date('2025-10-16T14:00:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table10",
                start_date: new Date('2025-10-16T14:00:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table11",
                start_date: new Date('2025-10-16T14:00:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table12",
                start_date: new Date('2025-10-16T14:00:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
            {
                babyfoot_tableId: "Table13",
                start_date: new Date('2025-10-16T14:00:00'),
                red_goal: 6,
                bleu_goal: 10,
                winner: "Blue",
                duration: "1h30"
            },
        ];
        this.store.dispatch(new GetGames(gamesData));
    }
}