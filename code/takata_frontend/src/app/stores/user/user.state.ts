import { Injectable } from "@angular/core";
import { Action, State, StateContext, Selector, Store } from "@ngxs/store";
import { GetUser } from "./user.actions";

interface UserModel {
    token: string,
}

export interface UserStateModel {
    users: UserModel[]
}

@State<UserStateModel>({
    name: "user",
    defaults: {
        users: []
    },
})
@Injectable()
export class UserState {

    @Selector()
    static users(state: UserStateModel) {
        return state.users;
    }

    @Selector()
    static token(state: UserStateModel) {
        return state.users;
    }

    @Action(GetUser)
    setPlans(ctx: StateContext<UserStateModel>, action: GetUser) {
        ctx.patchState({users: action.users});
    }
}