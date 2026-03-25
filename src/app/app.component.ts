import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
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

  onBotaoClicado() {
    this.mensagem = "Você clicou no botão!";
  }

  onKeyUp(event: Event) {
    const input = event.target as HTMLInputElement;
    this.mensagem = `Olá ${input.value} !`;
  }
   
}