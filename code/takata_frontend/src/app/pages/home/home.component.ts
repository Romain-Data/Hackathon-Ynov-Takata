import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Store } from '@ngxs/store';

export interface TableColumn<T> {
  field: keyof T;                   //clé dans l'objet data
  header: string;                  //texte affiché dans le <th>
  sortable?: boolean;             //si triable
  filterable?: boolean;          //si filtrable
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
export class HomeComponent {
  constructor(private store: Store) { }

  // gameColumn: TableColumn<>

}
