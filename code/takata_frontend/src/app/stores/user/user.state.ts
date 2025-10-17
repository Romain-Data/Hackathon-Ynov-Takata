import { Injectable } from "@angular/core";
import { Action, State, StateContext, Selector, Store } from "@ngxs/store";
import { GetUser } from "./user.actions";

export interface UserModel {
    // token: string,
    name: string,
    surname: string,
    pseudo: string,
    mail: string,
    role: string,
    password: string
    
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

    @Action(GetUser)
    getUser(ctx: StateContext<UserStateModel>, action: GetUser) {
        ctx.patchState({users: action.users});
    }
}