import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API = environment.apiDicionario;

export interface Base {
  id: number;
  nome: string;
}
export interface Diario{
  id: number,
  title: string,
  description:string
}
@Injectable({
  providedIn: 'root',
})
export class DicionarioService {
  constructor(private http: HttpClient) {}
  getDicionariosBase(): Observable<Base[]> {
    return this.http.get<Base[]>(`${API}Base`);
  }

  getDicionariosJoinRH(): Observable<Diario[]> {
    return this.http.get<Diario[]>(`${API}Dicionario_Join_RH`);
  }

  getDicionariosRH(): Observable<Diario[]> {
    return this.http.get<Diario[]>(`${API}Dicionario_RH`);
  }

  getDicionariosGeral(): Observable<Diario[]> {
    return this.http.get<Diario[]>(`${API}Dicionario_Geral`);
  }

}
