import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor(private router: Router) {}

  login() {
    if (this.email === "admin" && this.senha === "123") {
      alert("Boas vindas");
      this.router.navigate(['/pessoas']);
    } else {
      alert("Usuário ou senha incorretos");
    }
  }

}
