import { Injectable } from '@angular/core';
import { Pessoa } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listar(): Pessoa[] {
    return [
      {
        id:1, 
        nome:"André",
        sobrenome:"Coutinho",
        dtNascimento:"2001-06-23"
      },
      {
        id:2, 
        nome:"Lucas",
        sobrenome:"Wallace",
        dtNascimento:"1990-01-01"
      },
      {
        id:3, 
        nome:"Marco",
        sobrenome:"Monteiro",
        dtNascimento:"1980-01-01"
      }
    ]
  }
}
