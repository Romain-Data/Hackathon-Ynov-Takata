import { BabyfootModel } from "./babyfoot.state";

export class GetGames {
    static readonly type = '[Games] get'
    constructor(public games: BabyfootModel[]) { }
}

export class GetGamesInProgress {
    static readonly type = '[GamesInProgress] get'
}
