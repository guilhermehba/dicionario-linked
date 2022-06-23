import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API = environment.apiDicionario

export interface Base {
  id:number,
  nome:string
}
@Injectable({
  providedIn: 'root'
})
export class DicionarioService {

  constructor(private http:HttpClient) { }
  getDicionariosBase():Observable<Base[]>{
    return this.http.get<Base[]>(`${API}/Base`)
  }
}
