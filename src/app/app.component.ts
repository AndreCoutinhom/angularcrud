import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularcrud';
  titulo = 'Olá!'
  boasVindas = "Boas vindas ao Angular";
  textoBotao: string = "Clique aqui!"
  botaoDesabilitado: boolean = false;
  mensagem: string = '';
  nome: string = '';
  sobrenome: string = '';
  cidade: string = 'São Paulo';

  onBotaoClicado() {
    this.mensagem = "Você clicou no botão!";
  }

  onKeyUp(event: Event) {
    const input = event.target as HTMLInputElement;
    this.mensagem = `Olá ${input.value} !`;
  }
   
}