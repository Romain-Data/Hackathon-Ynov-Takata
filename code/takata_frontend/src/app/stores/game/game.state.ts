import { Injectable } from "@angular/core";
import { Action, State, StateContext, Selector, Store } from "@ngxs/store";
import { GetGames } from "./game.actions";
import { GameService } from "./game.service";
import { tap } from "rxjs";

export interface GameModel {
    babyfoot_tableId: string,
    start_date: Date,
    end_date?: Date,
    red_goal: number,
    bleu_goal: number,
    winner?: string,
    duration?: string
}

export interface GameStateModel {
    games: GameModel[]
}

@State<GameStateModel>({
    name: "game",
    defaults: {
        games: []
    },
})
@Injectable()
export class GameState {

    constructor( private gameService: GameService ){}

    @Selector()
    static games(state: GameStateModel) {
        return state.games;
    }

    @Selector()
    static gamesInProgress(state: GameStateModel) {
        return state.games.filter(game => game.end_date === undefined);
    }

    @Action(GetGames)
    getGames(ctx: StateContext<GameStateModel>, action: GetGames) {
        ctx.patchState({ games: action.games })
        // return this.gameService.loadGame().pipe(
        //     tap((gamesData: GameModel[]) => ctx.patchState({ games: gamesData }))
        // );
    }
}