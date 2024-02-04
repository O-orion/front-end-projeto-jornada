import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Promocao } from '../types/types';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listarPromocoes (): Observable<Promocao[]> {
    return this.http.get<Promocao[]>(`${this.apiUrl}/promocoes`).pipe(take(1));
  }

}
