import { Injectable } from "@angular/core";
import { Action, State, StateContext, Selector, Store } from "@ngxs/store";
import { DeleteGame, GetGames } from "./babyfoot.actions";
export interface BabyfootModel {
    babyfoot_Id: string,
    end_date?: Date,
    red_goal: string,
    bleu_goal: string,
    nbmatches?: string,
}

export interface BabyfootStateModel {
    babyfoots: BabyfootModel[],
    gamesInProgress: BabyfootModel[];
}

@State<BabyfootStateModel>({
    name: "babyfoot",
    defaults: {
        babyfoots: [],
        gamesInProgress: []
    },
})
@Injectable()
export class BabyfootState {

    @Selector()
    static games(state: BabyfootStateModel) {
        return state.babyfoots;
    }

    @Selector()
    static gamesInProgress(state: BabyfootStateModel) {
        return state.babyfoots.filter(babyfoot => babyfoot.end_date === undefined);
    }

    @Action(GetGames)
    getGames(ctx: StateContext<BabyfootStateModel>, action: GetGames) {
        ctx.patchState({ babyfoots: action.games })
    }

    @Action(DeleteGame)
    deleteGame(ctx: StateContext<BabyfootStateModel>, action: DeleteGame) {
      const state = ctx.getState();
      const updated = state.gamesInProgress.filter(game => game.babyfoot_Id !== action.babyfootId);
      ctx.patchState({
        gamesInProgress: updated
      });
    }

}
