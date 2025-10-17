import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, input } from '@angular/core';
import { Store } from '@ngxs/store';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { Chart, registerables } from 'chart.js';
import { UserService } from '../../stores/user/user.service';
import { UserModel, UserState } from '../../stores/user/user.state';

Chart.register(...registerables);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardModule,
    Button
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  constructor(private store: Store, private userService: UserService) { }

  games = input<any[]>([])
  @ViewChild('topScoresCanvas') topScoresCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('genreCanvas') genreCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('activityCanvas') activityCanvas!: ElementRef<HTMLCanvasElement>;


  user?: UserModel;

  private topScoresChart?: Chart;
  private genreChart?: Chart;
  private activityChart?: Chart;


  public ngOnInit() {
    this.userService.loadUsers();
    const users = this.store.selectSnapshot(UserState.users) as UserModel[] | undefined;
    this.user = users && users.length ? users[0] : undefined;
  }
}
