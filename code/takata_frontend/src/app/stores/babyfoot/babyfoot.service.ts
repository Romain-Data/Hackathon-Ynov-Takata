import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { BabyfootModel } from "./babyfoot.state";
import { GetGames } from "./babyfoot.actions";

@Injectable({ providedIn: 'root' })
export class BabyfootService {

    constructor(private store: Store) { }

    loadGame() {
        const babyfootData: BabyfootModel[] = [
            {
                babyfoot_Id: "Babyfoot1",
                end_date: undefined,
                red_goal: "Neuf",
                bleu_goal: "Disponible",
                nbmatches: "52",
            },
            {
                babyfoot_Id: "Babyfoot2",
                red_goal: "Neuf",
                bleu_goal: "Disponible",
                nbmatches: "98",
            },
            {
                babyfoot_Id: "Babyfoot3",
                red_goal: "Neuf",
                bleu_goal: "Disponible",
                nbmatches: "64",
            },
            {
                babyfoot_Id: "Babyfoot4",
                red_goal: "Neuf",
                bleu_goal: "Jeu en cours",
                nbmatches: "43",
            },
            {
                babyfoot_Id: "Babyfoot5",
                red_goal: "Usé",
                bleu_goal: "Disponible",
                nbmatches: "65",
            },
            {
                babyfoot_Id: "Babyfoot6",
                red_goal: "Usé",
                bleu_goal: "Jeu en cours",
                nbmatches: "105",
            },
            {
                babyfoot_Id: "Babyfoot7",
                red_goal: "Neuf",
                bleu_goal: "Disponible",
                nbmatches: "20",
            },
            {
                babyfoot_Id: "Babyfoot8",
                red_goal: "Neuf",
                bleu_goal: "Disponible",
                nbmatches: "32",
            },
            {
                babyfoot_Id: "Babyfoot9",
                red_goal: "Neuf",
                bleu_goal: "Disponible",
                nbmatches: "47",
            },
        ];
        this.store.dispatch(new GetGames(babyfootData));
    }
}
