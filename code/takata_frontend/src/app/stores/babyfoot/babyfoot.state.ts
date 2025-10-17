import { Injectable } from "@angular/core";
import { Action, State, StateContext, Selector, Store } from "@ngxs/store";
import { GetGames } from "./babyfoot.actions";
export interface BabyfootModel {
    babyfoot_Id: string,
    end_date?: Date,
    red_goal: string,
    bleu_goal: string,
    nbmatches?: string,
}

export interface BabyfootStateModel {
    babyfoots: BabyfootModel[]
}

@State<BabyfootStateModel>({
    name: "babyfoot",
    defaults: {
        babyfoots: []
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
}
