import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  private cache$?: Observable<any[]>
  private apiURL: string =  environment.apiUrl;

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]> {

    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe( shareReplay(1) )
    }

    return this.cache$;

  }

  private requestEstados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/estados`)
  }

}
