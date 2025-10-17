import { GameModel } from "./game.state";

export class GetGames {
    static readonly type = '[Games] get'
    constructor(public games: GameModel[]) { }
}

export class GetGamesInProgress {
    static readonly type = '[GamesInProgress] get'
}