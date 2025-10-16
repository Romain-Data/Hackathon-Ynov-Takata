import { GameModel } from "./game.state";

export class GetGames {
    static readonly type = '[Game] get'
    constructor(public games: GameModel[]) { }
}