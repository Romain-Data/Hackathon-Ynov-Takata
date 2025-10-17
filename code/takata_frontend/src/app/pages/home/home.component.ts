import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Store } from '@ngxs/store';
import { GameModel, GameState } from '../../stores/game/game.state';
import { GameService } from '../../stores/game/game.service';

export interface TableColumn<T> {
  field: keyof T;
  header: string;
  centred?: boolean;
}
@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  
  constructor(private store: Store, private gameService: GameService) {}
  
  gameColumns: TableColumn<GameModel>[] = [
    { field: "idTable", header: "Baby-Foot" },
    { field: "redGoal", header: "Score Rouge", centred: true },
    { field: "blueGoal", header: "Score Bleu", centred: true },
    { field: "winner", header: "Gagnant" },
    { field: "duration", header: "Durée" },
  ]
  
  get games() {
    return this.store.select(GameState.gamesInProgress);
  }
  
  public ngOnInit() {
    this.gameService.loadGame();
  }
}
