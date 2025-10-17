import { GameModel } from "./game.state";

export class GetGames {
    static readonly type = '[Games] get'
    constructor(public games: GameModel[]) { }
}