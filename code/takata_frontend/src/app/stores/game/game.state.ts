import { Injectable } from "@angular/core";
import { Action, State, StateContext, Selector, Store } from "@ngxs/store";
import { GetGames } from "./game.actions";

export interface GameModel {
    idTable: string,
    startDate: Date,
    endDate: Date,
    redGoald: number,
    blueGoal: number,
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
export class UserState {

    @Selector()
    static users(state: GameStateModel) {
        return state.games;
    }

    @Action(GetGames)
    setPlans(ctx: StateContext<GameStateModel>, action: GetGames) {
        ctx.patchState({ games: action.games });
    }
}