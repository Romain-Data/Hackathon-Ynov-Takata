import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { Store } from '@ngxs/store';
import { GameModel, GameState } from '../../stores/game/game.state';
import { GameService } from '../../stores/game/game.service';
import { Router } from '@angular/router';

export interface TableColumn<T> {
  field: keyof T;
  header: string;
  centred?: boolean;
}
@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    TableModule,
    Button
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  
  constructor(private store: Store, private gameService: GameService, private router: Router) {}
  
  gameColumns: TableColumn<GameModel>[] = [
    { field: "babyfoot_tableId", header: "Baby-Foot" },
    { field: "red_goal", header: "Score Rouge", centred: true },
    { field: "bleu_goal", header: "Score Bleu", centred: true },
    { field: "winner", header: "Gagnant" },
    { field: "duration", header: "Durée" },
  ]
  
  get games() {
    return this.store.select(GameState.gamesInProgress);
  }

  goToUser() {
    this.router.navigate(['/user']);
  }
  
  public ngOnInit() {
    this.gameService.loadGame();
  }
}
