import { DicionarioService } from './../service/dicionario.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.apiDicionario

export interface Base {
  id:number,
  nome:string
}
@Component({
  selector: 'app-home-dicionario',
  templateUrl: './home-dicionario.component.html',
  styleUrls: ['./home-dicionario.component.css']
})
export class HomeDicionarioComponent implements OnInit {
  listBase!:Base[]
  nomeDiario!:any
  constructor(private http:HttpClient, private service:DicionarioService) { }

  ngOnInit(): void {
    this.getDicionarios()
  }

  getDicionarios() {
    this.service.getDicionariosBase().subscribe({
      next: (dicionario) => (this.listBase = dicionario),
    });
  }
  gatilho(diario: string) {
    this.nomeDiario = sessionStorage.setItem('diario', diario);
  }
}
