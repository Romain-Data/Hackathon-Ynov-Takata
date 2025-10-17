import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { BabyfootModel, BabyfootState } from '../../stores/babyfoot/babyfoot.state';
import { BabyfootService } from '../../stores/babyfoot/babyfoot.service';
import { Observable } from 'rxjs';
import { DeleteGame } from '../../stores/babyfoot/babyfoot.actions';

export interface TableColumn<T> {
  field: keyof T;
  header: string;
  centred?: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  get babyfoots(): Observable<BabyfootModel[]> {
    return this.store.select(BabyfootState.gamesInProgress);
  }

  babyfootColumns: TableColumn<BabyfootModel>[] = [
    { field: 'babyfoot_Id', header: 'Baby-Foot' },
    { field: 'red_goal', header: 'État', centred: true },
    { field: 'bleu_goal', header: 'Disponibilité', centred: true },
    { field: 'nbmatches', header: 'Nombre de matches total' }
  ];

  selectedGame: BabyfootModel | null = null;

  constructor(
    private store: Store,
    private BabyfootService: BabyfootService
  ) {}

  ngOnInit(): void {
    this.BabyfootService.loadGame();
  }

  editGame(game: BabyfootModel): void {
    console.log('Modifier', game);
  }

  deleteGame(game: BabyfootModel): void {
    this.store.dispatch(new DeleteGame(game.babyfoot_Id));
}


  viewDetails(game: BabyfootModel): void {
    this.selectedGame = game;
  }
}
