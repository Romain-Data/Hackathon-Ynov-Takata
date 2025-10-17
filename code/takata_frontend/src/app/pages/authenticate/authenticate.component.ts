import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authenticate',
  imports: [PasswordModule, InputTextModule, CommonModule, FormsModule],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.scss'
})
export class AuthenticateComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    //login feature to add
    if(this.username == '' || this.password == ''){
      alert('Veuillez entrer votre informations.')
    } else {
    alert(`Envoie des données !\nUsername: ${this.username}\nPassword: ${this.password} et non on est sécur ici`);
    }
  }
}
