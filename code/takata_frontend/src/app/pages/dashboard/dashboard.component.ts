import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { BabyfootModel, BabyfootState } from '../../stores/babyfoot/babyfoot.state';
import { BabyfootService } from '../../stores/babyfoot/babyfoot.service';

export interface TableColumn<T> {
  field: keyof T;
  header: string;
  centred?: boolean;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store, private BabyfootService: BabyfootService) {}

  babyfootColumns: TableColumn<BabyfootModel>[] = [
    { field: "babyfoot_Id", header: "Baby-Foot" },
    { field: "red_goal", header: "Etat", centred: true },
    { field: "bleu_goal", header: "Disponibilité", centred: true },
    { field: "nbmatches", header: "Nombre de matches total" },
  ]

  get babyfoots() {
    return this.store.select(BabyfootState.gamesInProgress);
  }

  public ngOnInit() {
    this.BabyfootService.loadGame();
  }
}
