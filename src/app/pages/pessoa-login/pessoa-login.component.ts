import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pessoa-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pessoa-login.component.html',
  styleUrl: './pessoa-login.component.css'
})
export class PessoaLoginComponent {
  titulo = 'Login';
  email: string = '';
  senha: string = '';

  login() {
    if (this.email === "admin" && this.senha === "123") {
      console.log("Boas vindas");
    } else {
      console.log("Usuário ou senha incorretos");
    }
  }

}
