import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CardModule } from 'primeng/card';
import { UserService } from '../../stores/user/user.service';
import { UserModel, UserState } from '../../stores/user/user.state';

@Component({
  selector: 'app-user',
  imports: [
    CardModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  constructor(private store: Store, private userService: UserService){}

  user?: UserModel;

  public ngOnInit() {
    this.userService.loadUsers();
    const users = this.store.selectSnapshot(UserState.users) as UserModel[] | undefined;
    this.user = users && users.length ? users[0] : undefined;
  }
}
