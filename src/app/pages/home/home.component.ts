import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardItemComponent } from '../../shared/card-item/card-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}
  titulo = "Boas vindas!";
  listarPessoas() {
    this.router.navigate(['pessoas']);
  }
}
