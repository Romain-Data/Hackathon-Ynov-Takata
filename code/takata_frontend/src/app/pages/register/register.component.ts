import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [PasswordModule, InputTextModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email: string ='';
  username: string = '';
  password: string ='';
  password2: string ='';
  name: string ='';
  surname: string ='';
  role="user";

  onSubmit() {
      if(this.username == '' || this.email =='' || this.password == '' || this.name =='' || this.surname == ''){
        alert('Veuillez entrer votre informations correctement.')
      } else {
      alert(`Création du compte du joueur !\nemail: ${this.email}\nNom: ${this.name}\nPrénom: ${this.surname} \nUsername: ${this.username}\nPassword: et non on est sécur ici`);
      }
    }
  }

