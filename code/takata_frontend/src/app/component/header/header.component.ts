import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    AvatarModule,
    SharedModule,
    RouterLink
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router){}

  home(){
    this.router.navigate(['/home'])
  }
  dashboard(){
    this.router.navigate(['/dashboard'])
  }
}
